//1, number type
let num  = 27;
let num2 = 1.5;
let num3 = -20;

//양의 무한대
let inf = Infinity;
//음의 무한대
let mInf = -Infinity;

//연산 실패시 나오는 자료형 = 난
let nan = NaN; 

//2. String Type
let myName = `ㅋㅋ`;
//2-1문자열 합이 가능
let myLocation = `신림`;
let introduce = myName + myLocation;
//``로 ${}를 사용하여 변수할당 문자열 사용이 가능
//이건 템플릿 리터럴 문법이라 한다.
let introduceText = `${myName}은 ${myLocation}에 거주합니다`;
console.log(introduceText);

//3 Boolean Type
let isSwitchOn = true;
let isEmpty = false;

//4.Null type
let empty = null;

//5.Undefined Type
let none;
console.log(none);

//널은 아무것도 없다 개발자가 직접 선언해야함, 언디파인드는 변수선언하고 아무것도 할당하지않을 때
