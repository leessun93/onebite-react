//1콜백함수
function main(value){
    // console.log(value);
    // console.log(1);
    // console.log(2);
    // value();
    // console.log("end"); //원하는 타이밍에 실행 할 수 있다.
}
function sub(){
    // console.log("i an sub");
}

main(sub);

//표현식 2번 main 함수호출시 인자에 sub 펑션 기입
// main(function sub(){
//     console.log("i am sub");
// });// 비 효율적인듯
//표현방법 3번
// main(()=> {
//     console.log("i am sub")
// })

//예시
function repeat(count, callback){
    for(let idx=1; idx<=count; idx++){
       callback(idx);
    }
}

repeat(5, function(idx){
    console.log(idx);
});