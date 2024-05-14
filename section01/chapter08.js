//1 null 병합 연산자
//존재하는 값을 추려내는 기능
// null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

//numm 혹은 undefined가 아닌걸 찾아 넣는다.
let var4 = var1 ?? var2;
//var 1 과 2 중 값이 없는게 아닌 값을 찾아 넣는다 라는 기호 = ??
//둘 다 값이 있을경우(null, undefined)가 없을경우는 첫번째 변수가 담긴다.

//2 typeof 연산자
let var7 = 1;
var7 = "hello";

let t1 = typeof var7;
// 자바스크립트는 타입이 수시로 바뀌어서
//typeof 를 넣으면 해당 변수의 타입이 출력된다.

//3.삼항 연산자
// 항을 3개 사용하는 연산자 
//조건식을 사용하여 참,거짓 값을 변환할 때

let var8 = 10;

//요구사항 : 변수 res에 var8의 값이 짝이면 짝 홀이면 홀이라 나오게 만들어라
let res = var8 % 2 === 0 ? "짝수" : "홀수";
