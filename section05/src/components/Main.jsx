import "./Main.css";
//JSX 주의사항
//1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.(if for 등은 오류)
//2. 숫자, 문자열, 배열의 값만 랜더링 된다. (객체는 키 값을 기입해주어야한다)
//3. 모든 테그는 닫혀있어야한다 (img 등도 img/ 로 해주어야한다)
//4. 최상위 테그는 반드시 하나여야한다(빈테그로 묶어도된다.이러면 흩뿌려짐)
const Main = () =>{
    const user = {
        name : "이선흠",
        isLogin : true
    }

    if(user.isLogin){
        return <div
            className="logout"
        >로그아웃</div>;
    } else {
        return <div>로그인</div>;
    }
    // return (
    //     <>
    //         {user.isLogin ? (
    //             <div>로그아웃</div>
    //         ) : ( 
    //             <div>로그인</div>
    //         )}
    //     </>
    // );
};

export default Main;