//1.상수 객체
const animal = {
    type : "고양이",
    name : "나비",
    color : "black"
}

animal.age = 2;//추가
animal.name = "까망이"// 수정
delete animal.color; // 삭제는 가능

// 상수는 새로운값을 할당하는것만 불가능하고
// 이미 할당된 값을 추가 수정 삭제하는것은 가능하다

//2.메서드
//값이 함수인 프로퍼티를 말함

const person = {
    name : "이정환",
    //메서드
    sayHi(){
        console.log("안녕!");
    }
}

//호출
person.sayHi();
person["sayHi"]();
