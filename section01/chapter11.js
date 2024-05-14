//함수선언
// function greething(){
//     console.log("하이");
// };
// //함수 호출
// console.log("호출 전");
// greething();
// console.log("호출 후");

function getArea(width, height){// 매개변수
    let area = width * height;

    function another(){
        conosole.log("어나더"); // 펑션 속의 펑션 == 중첩함수
    }
    return area;
}
let area1 = getArea(10, 20); //인수
console.log(area1);

//자바스크립트에서는 함수를 제일 아래 선언해도 동작을한다.
//이는 호이스팅이라는 효과 덕분인데
//호이스팅이란뜻은 끌어올리단 뜻이다.
//선언문이 아무리 밑바닥에 선언되어도 최 상단에서 호출해준다.

