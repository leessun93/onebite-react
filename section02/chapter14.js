//async
//어떤 함수를 비동기 함수로 만들어주는 키워드
//함수를 프로미스를 반환하도록 변환해주는 키워드

async function getData(){
    return{
        name:"이정환",
        id: "winterlood"
    };
}

console.log(getData());

//await
//async 함수 내부에서만 사용이 가능한 키워드
//비동기 함수가 다 처리되도록 기다리는 역할

async function printData(){
    //에이씽크 내부에 await를 쓰면 함수 호출 후 완료시에 진행된다.
    const data = await getData();
    console.log(data);
}