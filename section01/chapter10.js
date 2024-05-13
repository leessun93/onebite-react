//1.반복문 for
//초기식;조건식;증감식
 for(let idx= 0; idx<5; idx++) {
    console.log(idx);

    if(idx%2 ===0){
        //컨티뉴문을 만나면 반복문 내의 다른 코드는 실행되지 않고 다음 회차로 넘어가게된다.
        continue;
    }

    if(idx >= 5){
        break;
    }
 }