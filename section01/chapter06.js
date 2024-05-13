//1.묵시적 형 변환
// 자바스크립트 엔진이 알아서 형 변환 함

let num = 10;
let str = "20";

const result = num + str;
// = 숫자 + 문자라 숫자를 문자로 변환 알아서해줌

//2. 명시적 형 변환
//프로그래머 내장 함수등을 이용하여 개발자가 형변환을 명ㅅ
let str1 = "10";
let strToNum1 = Number(str1);
console.log(str1);

let str2 = "10개";
//팔스인트 함수를 쓰면 문자떼고 숫자만 가져옴
let strToNum2 = parseInt(str2);

console.log(strToNum2);

// 숫자 ->문자
let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1 + "입니다");
