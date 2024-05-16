//5가지 요소 순회 및 탐색 메서드
//1. forEach
//모든 요소를 순회하면서, 각 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1,2,3];

arr1.forEach(function(item, idx, arr) { //인자 값 설명 현재요소 값 ,현재요소 순번, 전체배열 값 length?
    // console.log(idx, item*2);
});

let doubledArr = [];

arr1.forEach((item) =>{ //값, 인덱스, 배열의길이? 따라서 item은 값?
    doubledArr.push(item * 2);
});
// console.log(doubledArr);

//2.includes
//배열의 특정 요소가 있는지 확인하는 메서드

let arr2 = [1,2,3];
let isInclude = arr2.includes(21); // 2가 있는지 찾는다 true false로 반환

//index of
//특정요소의 인덱스(위치) 를 찾아서 반환하는 메서드
let arr3 = [1,2,3];
let index = arr3.indexOf(22); // 배열의 위치 1번 반환 없는숫자 찾으면 -1 반환 여러개의값일경우 첫번째만 찾음
// console.log(index);

//4.findIndex
//특정요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1,2,3,4,5,6,7,8];
const findedIndex = arr4.findIndex((item)=>{ //배열을 콜백함수로 순회하면서 조건에 맞는 배열 위치 값을 찾아냄
    if(item%2 !== 0) return true; 
});
//고도화
const findedIndex2 = arr4.findIndex((item)=> item%2 !== 0); //없는값일경우 -1반환
//console.log(findedIndex2);

//indexof의 경우는 얕은비교를 통해 비교해서 객체는 비교못함 그래서 상황에 따라 잘 써야함
//indexof 는 배열 //findindex 는 콜백함수로 객체
//따라서 findindex(Arr.findIndex((item) => item.name =='리썬'))

//5.find
let arr5 = [
    {name: "이선흠"},
    {name : "리썬"}
];

const finded = arr5.find( //find 콜백함수를 쓰면 객체 자체를 반환함
    (item) => item.name ==="리썬"
);

console.log(finded);