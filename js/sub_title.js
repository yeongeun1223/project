;(function(){
    const create = target => document.createElement(target);
    const get = target => document.querySelector(target);
    const getAll = target => document.querySelectorAll(target);

    // 타이틀박스
    let $shareIcon = getAll('.title-wrap .icon-box li p');
    let $snsBox = get('.title-wrap .icon-box li .sns-box');
    let $shareBg = get('.title-wrap .bg');

    // 타이틀박스 시작
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
})();