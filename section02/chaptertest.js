let o1 = {name : "이선흠"};
//얕은복사
let o2 = o1;

console.log(o1.name);
console.log(o2.name);

o2.name = "리썬";

console.log(o1.name);
console.log(o2.name);

//객체타잆은 = 가변값 따라서 o2 ,o1이 같은 메모리를 가르키고있어 o2만 바꿔도 o1이 바뀜

//이로써 원시타입은 불변값 서로 가르키는 메모리가 다름
//반면 가변값은 가르키는 메모리가 같아서 메모리값변경 가능

//하여 o2만 변경해도 o1이 변경되버리는 불상사등을 사이드이펙트 라고 하는데 이를 방지하고
//위와같이 객체를 복사하고자 할 떄는 스프레드를 사용하자
//깊은 복사
let o3 = {...o1}; //이렇게 쓰면 내부 값만 복사된다.

console.log(o1 === o2); //같은 메모리를 가르키고있어 true
console.log(o1 === o3); //서로 다른 메모리라 false

//객체를 문자열로 변환하는 JSON.stringify()
console.log(
    JSON.stringify(o1) === JSON.stringify(o3)
); // == true 이렇게 문자열로 형변환해서 비교하자