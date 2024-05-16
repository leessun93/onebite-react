function add10(num){
  //필드 생성
    const promise = new Promise((resolve, reject) =>{
        //비동기 작업 실행하는 함수
        //excutor

        setTimeout(()=>{


            if(typeof num === "number"){
                resolve(num + 10);
            }else{
                reject("num이 숫자가 아닙니다.");
            }
        }, 2000);
    });  

    return promise;
};

/*
//then 메서드 뜻은 그 후에 라는 뜻
promise.then((value)=>{
    console.log(value);
}); //then 메서드는 성공후에만 실행됨
promise.catch((error)=>{
    console.log(error);
});//catch 는 메서드 실패시에만 실행됨

//고도화 체인같다고 해서 체이닝
promise
    .then((value)=>{
        console.log(value);
    })
    .catch((error)=>{
        console.log(error);
    });
*/

/*
setTimeout(()=>{
    console.log(promise);
}, 3000);*/
/*
const p = add10(0);
p.then((result)=>{
    console.log(result);

    //콜백안에 또 콜백하면 콜백지옥
    const newP = add10(result);
    newP.then((result)=>{
        console.log(result);
    });
    //새로운 프로미스를 반환하면 새 콜백 핸들링 가능?
    return newP;
});
*/
//고도화

add10(0)
    .then((result)=>{
        console.log(result);
        return add10(result);
    })
    .then((result)=>{
        console.log(result);
        return add10(undefined);
    })
    .then((result)=>{
        console.log(result);
        return add10(result);
    }).catch((error)=>{
        console.log(error);
    });//이러면 각 then들의 error을 캐치함