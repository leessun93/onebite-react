//common modul System

// const moduleData = require("./math");
//객체의 구조분해할당
//위의 moduleData 로 받아쓰는게아닌 내부값을 바로 쓸 수 있음
//const {add, sub} = require("./math");

/*
console.log(moduleData);

console.log(moduleData.add(5,7));
console.log(moduleData.sub(12,3));
console.log("안녕 노드");*/

//console.log(add(7,9));
//console.log(sub(87, 9));


//es모듈시스템
/*
import mul from "./math.js"; //익스포트 디폴트 함수를 mul로 사용하는 것
import {add, sub, ddouble} from "./math.js";
*/
//디폴트 함수와 합쳐서 선언도 가능
import mul, {add,sub,ddouble} from "./math.js";
// console.log(add(5,7));
// console.log(sub(12,3));
// console.log(ddouble(7));

// console.log(mul(3,7));

//라이브러리를 import 할 땐 경로가 아닌 그냥 임포트 하면 된다.
import randomColor from "randomcolor";

const color = randomColor();
console.log(color);