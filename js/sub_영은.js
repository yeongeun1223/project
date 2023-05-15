;(function(){
    const create = target => document.createElement(target);
    const get = target => document.querySelector(target);
    const getAll = target => document.querySelectorAll(target);

    // 고객의 소리 
    let $bg = get('.praise-board .card-wrap + .bg');
    let $popup = get('.praise-board .card-popup');
    let $preview = get('.praise-board .card-preview .inner');
    let $layout = getAll('.praise-board .card-wrap .card-layout'); 
    let $paging = getAll('.praise-board .paging a');
    let ran , timerID, previewAll, count;

    // 고객의 소리 시작
    // 카드미리보기 내용 랜덤, 타이머 설정
    const make = () => {
        ran = Math.floor(Math.random()*$layout.length);
        $preview.innerHTML = $layout[ran].innerHTML
        previewAll = Array.from($preview.children); //$preview 자식요소 배열로 변경
        previewAll.forEach(item =>{
            item.animate([
                {opacity:0},
                {opacity:1}
            ],300)
        })
    }

    make();
    timerID = setInterval(make,5000);


    // 카드레이아웃 클릭 시 팝업, 오버 시 style 변경 
    const show = () => {
        $bg.classList.add('show');
        $popup.classList.add('show');
    }
    const hide = () => {
        $bg.classList.remove('show');
        $popup.classList.remove('show');
    }
    const createBtn = () => {
        let $closeBtn = create('button');
        let $closei = create('i');
        $closeBtn.classList.add('close');
        $closei.classList.add('xi-close');
        $popup.append($closeBtn);
        $closeBtn.append($closei);
        $closeBtn.addEventListener('click', hide);
    }

    $layout.forEach((layoutItem,idx)=>{
        layoutItem.addEventListener('click', e=>{
            $popup.innerHTML = e.currentTarget.innerHTML;
            e.preventDefault();
            show();
            createBtn();
        })
        layoutItem.addEventListener('mouseenter',e=>{
            e.currentTarget.children[0].style.color='#6D5B74';
            e.currentTarget.classList.add('on');
        })
        layoutItem.addEventListener('mouseleave',e=>{
            e.currentTarget.children[0].style.color='#3D3D3D';
            e.currentTarget.classList.remove('on');
        })
    })

    $bg.addEventListener('click', hide);



    // 페이징버튼
    const clickNum = (e, idx) => {
        e.preventDefault(); // 링크 해제
        $paging.forEach(item => item.classList.remove('on'));
        $paging[idx].classList.add('on');
        count = idx;
      }

      const switchNum = () => {
        $paging.forEach( item => item.classList.remove('on')); 
        $paging[count].classList.add('on');
      }
  
    $paging.forEach((item, idx) => {
      item.addEventListener('click', e => {
        if (idx === 0) {
          count = 2;
        } else if (idx === 1) {
          count--;
          if (count < 2) count = 2;
        } else if (idx === $paging.length - 2) {
          count++;
          if (count > 6) count = 6;
        } else if (idx === $paging.length - 1) {
          count = 6;
        } else {
            clickNum(e, idx);
        }
    
        switchNum();
        e.preventDefault(); 
      });
    });
    

    //링크 안막은 버전
    // for(let i=2; i<$paging.length-2; i++) {
    //     $paging[i].addEventListener('click', e => {
    //         $paging.forEach(item => item.classList.remove('on'));
    //         $paging[i].classList.add("on");
    //         count = i;
    //     })
    // }
    // $paging[0].addEventListener('click', e => {
    //     count = 2;
    //     switchNum()
    // })
    // $paging[1].addEventListener('click', e => {
    //     count--;
    //     if(count < 2) count = 2;
    //     switchNum();
    // })
    // $paging[$paging.length-2].addEventListener('click', e => {
    //     count++;
    //     if(count > 6) count = 6;
    //     switchNum()
    // })
    // $paging[$paging.length-1].addEventListener('click', e => {
    //     count = 6;
    //     switchNum()
    // })

    // function switchNum() {
    //     $paging.forEach(item => {
    //         item.classList.remove('on');
    //     })
    //     $paging[count].classList.add('on');
    // };
})();




























