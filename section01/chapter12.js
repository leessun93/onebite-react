function funcA() {
    console.log("funcA");
}

let varA = funcA;
console.log(varA);
// 함수를 변수에 담아 호출 가능
varA();
