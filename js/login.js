;(function(){
    const create = target => document.createElement(target);
    const get = target => document.querySelector(target);
    const getAll = target => document.querySelectorAll(target);


    // login 시작
    let arrUrl = ['https://www.facebook.com/login.php?skip_api_login=1&api_key=659426698241332&kid_directed_site=0&app_id=659426698241332&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fresponse_type%3Dcode%26client_id%3D659426698241332%26redirect_uri%3Dhttps%253A%252F%252Fwww.gilhospital.com%252Fhtml%252Fportlet%252Flogin%252Fapi%252Ffacebook%252Fcallback.jsp%26state%3D611623691987524365940822897420826135471%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D9e007e99-53c8-4785-801d-f2436a075e8b%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.gilhospital.com%2Fhtml%2Fportlet%2Flogin%2Fapi%2Ffacebook%2Fcallback.jsp%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D611623691987524365940822897420826135471%23_%3D_&display=page&locale=ko_KR&pl_dbl=0',
    '../login/images/login_naver.png'
    ,'https://accounts.kakao.com/login/?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fencode_state%3D1%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fwww.gilhospital.com%252Fhtml%252Fportlet%252Flogin%252Fapi%252Fkakao%252Fcallback.jsp%26state%3D1197019687017686501677660352905751730145%26through_account%3Dtrue%26client_id%3Dfe6634ac60d06514a632f2e9117a4244#login'];
    let $loginBtn = get('.login .login-wrap .login-input button');
    let $socialBtn = getAll('.login .login-wrap .login-social a');
    let $failBtn = getAll('.login .fail-login div a');
    let $inpId = get('.login .login-wrap .login-input ul li .userId');
    let $inpPw = get('.login .login-wrap .login-input ul li .userPw');

    // 로그인 버튼 클릭 시 
    $loginBtn.addEventListener('click', e=>{
        e.preventDefault();
        let userId = $inpId.value;
        let userPw = $inpPw.value;
        let id='shiningudonlikesilver';
        let pw='1234';
        if( userId.trim() === '' )
            alert('아이디를 입력하세요.')
         else if ( userPw.trim() === '' ){
            alert('비밀번호를 입력하세요.')
        } else if(userId===id && userPw===pw){
            alert('로그인되었습니다.');
            // 링크 index 연결하기
            window.location.href = 'http://www.naver.com'
        } else {
            alert('로그인정보가 일치하지 않습니다.');        
        }
    })

    // 소셜계정으로 로그인
    $socialBtn.forEach( (socItem, idx) => {
        socItem.addEventListener('click',e=>{
            e.preventDefault();
            // 클릭 시 점선, 0.5초 뒤 사라지기
            e.currentTarget.classList.add('on');
            setTimeout(()=>{
                socItem.classList.remove('on');
            },700)
            // 팝업창
            window.open( arrUrl[idx], 'socpopup', 'width=430 height=630');
        })
    })
    
    //하단박스 버튼 오버 시
    $failBtn.forEach( failItem => {
        failItem.addEventListener('mouseenter', e=> e.currentTarget.style.backgroundColor = '#F3F1FF');
        failItem.addEventListener('mouseleave', e=> e.currentTarget.style.backgroundColor = '#fff');
    })
}
)();


