// function returnFalse(){
//     console.log("false 함수");
//     return false;
// }

// function returnTrue(){
//     console.log("True 함수");
//     return true;
// }

// //&& and 연산자라서 첫번째 false 함수가 확정되면 그 다음은 실행조차 안한다
// // 따라서 false만 나온다
// console.log(returnFalse() && returnTrue());
// //반대로 트루먼저 하게되면  true and 까지는 확정이 안나서 뒤의 false 까지 나온다
// console.log(returnTrue() && returnFalse());

// // || or 연산자또한 마찬가지이다. 앞에서 해결되면 뒤까지 안감

// // truty falsy 도 사용은 같다.


//단락편가 활용 사례

function printName(person){

    // if(!person){
    //     console.log("person의 값이 없음");
    //     return;
    // } 고도화 해보자


    //truty falsy 특징으로 if문 대신 있으면 담고 없으면 다음거담고 등으로
    //변수에 네임을 담고 
    const name = person && person.name;
    //console.log에서 있으면(truty)하면 출력 없으면(falsy)하면 문구 출력
    console.log(name || "person의 값이 없음");
}

printName(); //undefined
printName({name : 이정환}); // 이정환

//Or 연산자 T || T 는 앞의 T 
//and 연산자 T && T 는 뒤의 T