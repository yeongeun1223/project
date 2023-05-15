const get = (target) => {
   return document.querySelector(target);
};
const getAll = (target) => {
   return document.querySelectorAll(target);
};

let $header = get('#header');
let $gnb = get('#header .gnb');
let $gnbM = getAll('#header .gnb .gnbM');
let $li = getAll('#header .gnb > li');
let $gnbSub = getAll('#header .gnb .sub');
let $rolling = getAll('.main .rolling');
let $pgLi = getAll('.paging li');
let $pgA = getAll('.paging a');
let $logo = get('#header h1 img');
let $sideBanner = get('.content3 .con-box .side-banner');
let $sidePrev = get('.content3 .con-box .side-banner .prev');
let $sideNext = get('.content3 .con-box .side-banner .next');

$li.forEach((item, idx) => {
   item.addEventListener('mouseenter', (e) => {
      $header.classList.add('roll');
      $gnb.classList.add('roll');
      $logo.setAttribute('src', './images/logo.png');

      $gnbM.forEach((gnbItem) => {
         gnbItem.classList.add('roll');
         gnbItem.classList.remove('on');
      });
      e.currentTarget.firstElementChild.classList.add('on'); // gnbM

      $gnbSub.forEach((subItem) => {
         subItem.classList.remove('roll');
      });
      e.currentTarget.firstElementChild.nextElementSibling.classList.add('roll'); // sub sub0, sub1..
   });
   $header.addEventListener('mouseleave', (e) => {
      $logo.setAttribute('src', './images/logo_w.png');
      e.currentTarget.classList.remove('roll');
      $gnbSub[idx].classList.remove('roll');
      $gnb.classList.remove('roll');
      $gnbM.forEach((gnbItem) => {
         gnbItem.classList.remove('roll');
         gnbItem.classList.remove('on');
      });
   });
});
// 메인 메뉴

const con3Swiper = () => {
   let swiper = new Swiper('.mySwiper', {
      scrollbar: {
         el: '.swiper-scrollbar',
         hide: true,
      },
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },
   });
   return swiper;
};
swiper = con3Swiper();
// 스와이퍼 - 코드 줄임

$pgLi.forEach((item, idx) => {
   item.addEventListener('click', (e) => {
      $rolling.forEach((ritem) => {
         ritem.style.display = 'none';
         ritem.style.opacity = '0';
      });
      $rolling[idx].style.display = 'block';
      setTimeout(() => {
         $rolling[idx].style.opacity = '1';
      }, 5); // 롤링 시 투명도 효과
      if (swiper) {
         swiper.destroy(true, true); // 스와이퍼 초기화
         swiper = null;
      }
      swiper = con3Swiper();
   });
});
// 페이징 롤링

$pgLi[0].addEventListener('click', (e) => {
   $pgA.forEach((item) => {
      item.addEventListener('mouseenter', (e) => {
         item.classList.remove('onbtn'); // 페이징 보라색 해제
      });
   });
   $gnbM.forEach((gnbItem) => {
      gnbItem.classList.remove('roll');
   });
   $header.addEventListener('mouseleave', (e) => {
      $gnbM.forEach((gnbItem) => {
         gnbItem.classList.remove('roll');
      });
   });
   $logo.setAttribute('src', './images/logo_w.png');
});
// 페이징, 컨텐츠 0번 스타일 설정

const pgStyle = () => {
   $logo.setAttribute('src', './images/logo.png'); // h1 로고 계속 회색
   $pgA.forEach((item) => {
      item.addEventListener('mouseenter', (e) => {
         item.classList.add('onbtn'); // 페이징 보라색 설정
      });
   });
   $gnbM.forEach((gnbItem) => {
      gnbItem.classList.add('roll'); // 메뉴 계속 검은색
   });
   $header.addEventListener('mouseleave', (e) => {
      $gnbM.forEach((gnbItem) => {
         gnbItem.classList.add('roll'); // 헤더에서 내려도 메뉴 계속 검은색
      });
      $logo.setAttribute('src', './images/logo.png'); // 헤더에서 내려도 로고 계속 검은색
   });
};

$pgLi[1].addEventListener('click', (e) => {
   pgStyle();
});
// 페이징, 컨텐츠 1번 스타일 설정

$pgLi[2].addEventListener('click', (e) => {
   pgStyle();
});
// 페이징, 컨텐츠 2번 스타일 설정

$pgLi[3].addEventListener('click', (e) => {
   pgStyle();
});
// 페이징, 컨텐츠 3번 스타일 설정

window.addEventListener('scroll', () => {
   window.scrollTo({ top: 0, behavior: 'auto' });
   // 스크롤 위치 top: 0 고정
});

let cnt = 0; // 현재 보이는 콘텐츠의 인덱스를 저장할 변수 초기화
let scrollTop = 0; // 현재 Y축 스크롤 위치

window.addEventListener('wheel', (e) => {
   if (e.wheelDelta < 0) {
      // 휠을 내릴 때
      cnt++;
      // 다음 콘텐츠로.. cnt 증가

      if (cnt >= 4) {
         // content3 다 보고 4가 되면..
         window.addEventListener('scroll', () => {
            window.scrollTo({ top: 910 });
            // 스크롤 위치 footer로
         });
         cnt = 3;
      }

      if (swiper) {
         swiper.destroy(true, true); // 스와이퍼 초기화
         swiper = null;
      }
      swiper = con3Swiper();

      $rolling.forEach((ritem) => {
         ritem.style.display = 'none';
         ritem.style.opacity = '0';
      });
      $rolling[cnt].style.display = 'block';
      $rolling[cnt].style.opacity = '1';
      // 다음 cnt로 롤링
   }
   //////////////////////////////// 휠 내릴 때

   if (e.wheelDelta > 0) {
      // 휠을 올릴 때
      cnt--;
      // 이전 콘텐츠로.. cnt 감소
      if (cnt <= 0) {
         // content3 다 보고 4가 되면..
         cnt = 0; // content0에서 멈춰
      }

      $rolling.forEach((ritem) => {
         ritem.style.display = 'none';
         ritem.style.opacity = '0';
      });
      $rolling[cnt].style.display = 'block';
      $rolling[cnt].style.opacity = '1';
      // 이전 cnt로 롤링

      if (swiper) {
         swiper.destroy(true, true); // 스와이퍼 초기화
         swiper = null;
      }
      swiper = con3Swiper();

      scrollTop = window.pageYOffset;
      if (scrollTop >= 900) {
         window.addEventListener('scroll', () => {
            window.scrollTo({ top: 0 });
            // 스크롤 위치 top: 0으로
         });
      }
   }
   //////////////////////////////// 휠 올릴 때
});
// 메인 휠 롤링

let adcnt = 0, interval = 4000, timerID = null;
timerID = setInterval(adroll, interval);

$sidePrev.addEventListener('click', e => {
   adcnt--;
   if (adcnt < 0) {
      adcnt = 5;
   }
   $sideBanner.style.backgroundImage = 'url(./images/main/con3_ad'+adcnt+'.jpg)';
   clearInterval(timerID);
   timerID = setInterval(adroll, interval);
});
$sideNext.addEventListener('click', e => {
   adroll();
   clearInterval(timerID);
   timerID = setInterval(adroll, interval);
});
function adroll() {
   adcnt++;
   if (adcnt > 5) {
      adcnt = 0;
   }
   $sideBanner.style.backgroundImage = 'url(./images/main/con3_ad'+adcnt+'.jpg)';
};
// 사이드 AD 배너 롤링