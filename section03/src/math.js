//math 모듈
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
/*
//common모듈 방식
//내보낼 함수를 정의해줌 알리아스가 같으면 그냥 함수이름만 써도 됨
module.exports = {
    add : add,
    sub
}*/

//es모듈방식
export {add, sub};

export function ddouble(a){
    return a*2*2;
}// es방식은 이렇게 export해도 된다.

//익스포트 디폴트를 하면 대표 함수로써 가져다 사용하는데서 따로 
//디폴트 함수로 임포트 해서 사용해 줄 수 있다.
export default function multiply(a,b){
    return a*b;
};