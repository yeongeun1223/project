const get = (target) => {
   return document.querySelector(target);
};
const getAll = (target) => {
   return document.querySelectorAll(target);
};

let $header = get("#header");
let $gnb = get("#header .gnb");
let $gnbM = getAll("#header .gnb .gnbM");
let $li = getAll("#header .gnb > li");
let $gnbSub = getAll("#header .gnb .sub");
let $rolling = getAll(".main .rolling");
let $pgLi = getAll(".paging li");
let $pgA = getAll(".paging a");
let $logo = get("#header h1 img");

// 메인 메뉴 시작
$li.forEach((item, idx) => {
   item.addEventListener("mouseenter", (e) => {
      $header.classList.add("roll");
      $gnb.classList.add("roll");

      $gnbM.forEach((gnbItem) => {
         gnbItem.classList.add("roll");
         gnbItem.classList.remove("on");
      });
      e.currentTarget.firstElementChild.classList.add("on"); // gnbM

      $gnbSub.forEach((subItem) => {
         subItem.classList.remove("roll");
      });
      e.currentTarget.firstElementChild.nextElementSibling.classList.add("roll"); // sub sub0, sub1..
   });
   $header.addEventListener("mouseleave", (e) => {
      e.currentTarget.classList.remove("roll");
      $gnbSub[idx].classList.remove("roll");
      $gnb.classList.remove("roll");
      $gnbM.forEach((gnbItem) => {
         gnbItem.classList.remove("roll");
         gnbItem.classList.remove("on");
      });
   });
});
// 메인 메뉴 끝



// 타이틀박스 시작
let $shareIcon = getAll('.title-wrap .icon-box li p');
let $snsBox = get('.title-wrap .icon-box li .sns-box');
let $shareBg = get('.title-wrap .bg');

//타이틀박스 공유 아이콘 All
$shareIcon.forEach(shareItem => {
   shareItem.addEventListener('mouseenter',e => e.currentTarget.classList.add('on'));
   shareItem.addEventListener('mouseleave',e=> e.currentTarget.classList.remove('on'));
})

//타이틀박스 sns공유 아이콘 팝업
$shareIcon[0].addEventListener('click',e=>{
   $snsBox.classList.add('on');
   $shareBg.classList.add('on');
})
$shareBg.addEventListener('click',e=>{
   $shareBg.classList.remove('on');
   $snsBox.classList.remove('on');
})
$shareIcon[1].addEventListener('click',e=> prompt('이 글의 URL 주소입니다. Ctrl+C를 눌러 클립보드로 복사하세요.', window.location.href));
$shareIcon[2].addEventListener('click',e=> window.print());
// 타이틀박스 끝



// menu2 sub1 시작
let $testBtn = get('.menu2-sub1 .inner button');
let $testName = get('.my-info #name');
let $testHeight = get('.my-info #height');
let $testWeight = get('.my-info #weight');
let $testBefore = get('.menu2-sub1 .right .right1');
let $testAfter = get('.menu2-sub1 .right .right2');
let $avatar = get('.right .avatar img');
let $bodyCheck = getAll('.body-type li .check');
let $testTxt = get('.menu2-sub1 .right .test');
let BMIlist = ['저체중', '정상', '과체중', '비만', '고도비만'];
let BMI;

$testBtn.addEventListener('click', e => {
   let testNameValue = $testName.value;
   let testHeightValue = $testHeight.value;
   let testWeightValue = $testWeight.value;
   let testResult = ((testWeightValue / (Math.pow(testHeightValue, 2))) * 10000).toFixed(3); // BMI 계산 값

   if (isNaN(testNameValue) && !isNaN(testHeightValue) && !isNaN(testWeightValue)) {
      // 이름 부분이 공백 아닌 문자, 키와 몸무게가 숫자일 때 실행
      $testBefore.style.opacity = '0';
      $testAfter.style.opacity = '1';

      if (testResult < 18.5) BMItest(0);
      else if (testResult < 23) BMItest(1);
      else if (testResult < 25) BMItest(2);
      else if (testResult < 30) BMItest(3);
      else if (testResult >= 30) BMItest(4);

      $testTxt.innerHTML = `<strong><span>${testNameValue}</span>님 신체 정보 : <span>${testHeightValue}cm / ${testWeightValue}kg </span></strong>
      <strong>BMI 지수는 <span>${testResult}</span>으로 <span>'${BMI}'</span>입니다.</strong>`;
   }
});
const BMItest = (bmidx) => {
   $avatar.setAttribute('src', './images/test'+bmidx+'.png');
   $avatar.setAttribute('alt', BMIlist[bmidx]);
   $bodyCheck.forEach(bodyitem => {
      bodyitem.classList.remove('on');
   });
   $bodyCheck[bmidx].classList.add('on');
   BMI = BMIlist[bmidx];
};
// menu2 sub1 끝
