//1. falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n; //빅 인티져 

//2. Truthy 한 값
// 7가지 falsy 한 값 제외 전부
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

//3.활용 사례
function printName(person){
    // if(person === undefined){
    if(!person){
        console.log(person.name || person === null);
        return;
    }
    console.log(person.name);
}
let person;
printName(person);