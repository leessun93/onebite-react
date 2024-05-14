//1함수 표현식
//함수 표현식은 호이스팅이 되지 않는다.
function funcA() {
    // console.log("funcA");
}

let varA = funcA;
// 함수를 변수에 담아 호출 가능
varA();


//익명함수
let varB = function(){
    // console.log("funcB");
}
varB();
//함수 를 변수에 담을 때 이름 생략 가능


//2.화살표 함수
//1.방식 1
let varC = ()=>{
    return 1;
}
//2.방식 2
let varC2 = (value) => {value +  1};
//3방식 3
let varc3 =(value) =>{
    console.log(value);
    return value + 1;
}


//콜백함수
// 자신이 아닌 다른 함수에 인수로써 전달 된 함수
function main(value){
    value();
}
function sub(){
    console.log("sub");
}
main(sub);