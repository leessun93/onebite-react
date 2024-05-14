//spread 연산자
//흩뿌리다 연산자
//객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는것


//스프레드 연산자는 ...임
let arr1 = [1,2,3];
let arr2 = [4,...arr1,5,6];

let obj1 = {
    a: 1,
    b: 2
}
let obj2 = {
    ...obj1,
    c:3,
    d:4
}

//호출시 스프레드로 넣으면 아래 펑션에서처럼 사용가능함
function funcA(p1,p2,p3){
    console.log(p1,p2,p3);
}
funcA(...arr1);



//2.Rest 매개변수
// Rest 는 나머지. 나머지 매개변수
function funcB(one,...rest){ // 이렇게 인자값에도 스프레드를 쓰면 전부 배열로 알아서 담아준다. 이때 첫번째 매개변수를 꼭 다른 배열에 담고싶다면 저렇게 지정해주면 된다.
    //레스트 매개변수 뒤로는 인자를 넣을 수 없다. 항상 마지막에 와야한다.
    console.log(one);
    console.log(rest);
}
funcB(...arr1);