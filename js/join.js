;(function(){
    const create = target => document.createElement(target);
    const get = target => document.querySelector(target);
    const getAll = target => document.querySelectorAll(target);

    let $userId = get('.join table .userId'); 
    let $idBtn = get('.join table .chk-btn'); 
    let $pwAll = getAll('.join table .pw-line input'); 
    let $pwTxt = get('.join table .pw-line em');
    let $domain = get('.join table .domain'); 
    let $domainList = get('.join table .domain-list'); 
    let $userDate = getAll('.join table .birth-line select');
    let $txtInp = getAll('.join table input[type="text"]');
    let $submitWrap = getAll('.join .submit-wrap button');
    let $option;
    let pw1, pw2;


    //아이디 중복확인 버튼
    const idReset = () => {
        $idBtn.classList.remove('on');
        $idBtn.textContent='중복확인'
    }

    //아이디 중복확인
    $idBtn.addEventListener('click', e =>{ 
        e.preventDefault();
        let idVal = $userId.value;
        let uniqueId = 'ezen0000';
        if(idVal.trim('')===""){
            alert('공백을 제외하여 입력해주세요.');
            idReset();
        }else if(idVal.length<6){
            alert('영문/숫자 6자리 이상으로 입력해주세요.');
            idReset();
        }else if(idVal===uniqueId){
            alert('중복된 아이디입니다. 다시 입력해주세요.');
            idReset();            
        }else{
            alert('사용할 수 있는 아이디입니다.')
            $idBtn.textContent='확인완료'
            $idBtn.classList.add('on');
        }
    })


    // 비밀번호 첫번째 입력란
    $pwAll[0].addEventListener('keyup',e=>{
        pw1 = $pwAll[0].value;
        if(pw1.trim()===""){
            $pwTxt.textContent = '공백을 제외하여 입력해주세요.';
            $pwTxt.style.color = 'red';
        }else if(pw1.length<8){
            $pwTxt.textContent='영문/숫자 8자리 이상으로 입력해주세요.';
            $pwTxt.style.color = 'red';
        }else {
            $pwTxt.textContent='비밀번호 확인란을 입력해주세요.';
            $pwTxt.style.color = 'blue';
        }
    })

    // 비밀번호 두번째 입력란
    $pwAll[1].addEventListener('keyup',e=>{
        pw1 = $pwAll[0].value;
        pw2 = $pwAll[1].value;
        if(pw1===pw2){
            $pwTxt.textContent = '비밀번호가 일치합니다.';
            $pwTxt.style.color = 'blue';
        }else{
            $pwTxt.textContent = '비밀번호를 동일하게 입력해주세요.';
            $pwTxt.style.color = 'red';
        }
    })


    //이메일 도메인 선택 시 해당 값 입력 
    $domainList.addEventListener('change',e=>{
        let domainTxt = e.currentTarget.value;
        $domain.value = domainTxt;
    })
    

    // 생년월일 함수 생성
    const birth = (num) => {
        $option = create('option'); 
        $userDate[num].append($option);
    }

    // 생년월일 초기값
    birth(0);
    $option.textContent = '년';
    birth(1);
    $option.textContent = '월';
    birth(2);
    $option.textContent = '일';

    //생년월일 옵션 태그 생성
    for(let i=2023 ; i>=1900 ; i--){ 
        birth(0);
        $option.textContent = i + '년';
    }
    for(let i=1 ; i<=12 ; i++){ 
        birth(1);
        $option.textContent = i + '월';
    }
    for(let i=1 ; i<=31 ; i++){ 
        birth(2);
        $option.textContent = i + '일';
    }


    // 이전버튼 - 로그인화면으로 이동
    $submitWrap[0].addEventListener('click',e=> window.location.href = 'login.html')
    // 다음버튼
    $submitWrap[1].addEventListener('click',e=>{
        e.preventDefault();
        if($idBtn.classList.contains('on') === false){
            alert('아이디 중복확인을 해주세요.')
        }else if(!$pwAll[0].value || !$pwAll[1].value){  
            alert('필수입력항목을 확인해주세요.')
        }else if(!$txtInp[0].value || !$txtInp[1].value || !$txtInp[2].value || !$txtInp[3].value || !$txtInp[4].value || !$txtInp[5].value || !$txtInp[6].value){  
            alert('필수입력항목을 확인해주세요.')
        }else if($domain.value.includes('.') === false){
            alert('이메일 형식이 아닙니다')
        }else{
            alert('회원가입이 완료되었습니다.');
            // index 연결하기
            window.location.href = 'http://www.naver.com';
        }        
    })
    
})();