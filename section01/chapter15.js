//1. 객체 리터럴 생성
//1번 객체생성자 라는 내장함수사용
let obj1 = new Object(); //객체 생성자
//2 객체 리터럴
let obj2 = {}; //이게 간결해서 많이 씀


let person = {
    name: "이정환",
    age : 27,
    hobby : "테니스",
    job : "fe Developer",
    extra : {},
    10 : 20,
    "like cat" : true
}

//3객체 프로퍼티 다루는 방법
//3.1점 표기법, 괄호 표기법
let name = person.name;
console.log(name);
//가로줄은 타입스크립트오류라 상관없음 

//아래와같이 키값으로 가져올 수 있다.
let age = person["age"]
console.log(age);

//이런식으로 변수에 키값을 담아서 가져올 수도 있다.
let property = "hobby";
let hobby = person[property];
console.log(hobby + "입니다.");



//3.1 새로운 프로퍼티를 추가하는 방법
person.jop = "fe developer2"; //직접 넣는다.
person["favoriteFood"] = "피자"; //없는 키값을 추가도 가능

console.log(person.favoriteFood);


//3.3 프로퍼티 수정하는 방법
person.jop = "educater";
person["favoriteFood"] = "이펙터";

//3.4 프로퍼티 삭제 하는 방법
delete person.jop;
delete person["favoriteFood"];

//3.5 프로퍼티의 존재유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
// "name" 이 person에 있냐 없냐 로 true false로 반환함

