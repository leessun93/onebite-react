console.log(1);

setTimeout(()=>{
    console.log(2);
}, 3000); // 특정함수를 비동기적으로 지연시켜 실행하는 함수

console.log(3); //순서는 1 3 2
