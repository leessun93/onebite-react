//6가지 요소 조작 메서드

//1.push
let arr1 = [1,2,3];
//push 메서드는 적용 후 배열이 길이를 반환함 따라서 변수에 담으면 랭스 나옴
const newlength = arr1.push(4,5,6,7);

// console.log(arr1);
// console.log(newlength);


//2.pop 배열의 맨 뒤 요소를 제거하고 반환
let arr2 = [1,2,3];
const poppedItem = arr2.pop();

// console.log(poppedItem);// 맨뒤의 3 반환
// console.log(arr2);

//3.shift 배열의 맨 앞 요소를 제거하고 반환
let arr3 = [1,2,3];
const shiftedItem = arr3.shift();//1제거 1반환
//console.log(shiftedItem, arr3);

//4. unshift
//배열의 맨 앞에 새로운 요소를 추가하는 메서드 배열의 길이 반환함
let arr4 = [1,2,3];
const newlength2 = arr4.unshift(0);//배열의 길이 반환 4
//console.log(newlength2, arr4);

//unshift 나 shift는 push나 pop에 비해 느리다.

//5.slice 가위처럼 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1,2,3,4,5,6];
let sliced = arr5.slice(2,5);//번 전까지 잘라냄 그래서 마지막 +1 헤주자
console.log(sliced);//잘라서 새로운 배열로 반환해줌
console.log(arr5);//원본 손상 x

//사용법 2
let sliced2 = arr5.slice(2);// i번재부터 끝까지 잘라라
let sliced3 = arr5.slice(-1); //뒤에서부터 i 번째 부터 뒤 끝까지 잘라라

//6.concat
//두개의 서로 다른 배열을 이어붙여 새로운 배열로 반환
let arr6 = [1,2];
let arr7 = [3,4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr);