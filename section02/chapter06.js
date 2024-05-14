//배열 순회
let arr = [1,2,3,4];

//배열 인덱스
for (let i = 0; i <arr.length; i++){
 //   console.log(arr[i]);
}

let arr2 = [4,5,6,7,8];

for(let i=0;i< arr2.length; i++){
    // console.log(arr2[i]);
}

//for of 반복문 == 오직 배열을 순회하기위해서만 존재함
for(let item of arr2){//아이템의 값을 순차적으로 item에 저장함
    // console.log(item);
}

//2.객체 순회
let person = {
    name : "리썬",
    age : 32,
    hobby : "기타"
}


//2.1 Object.keys 사용
// ->객체에서 ket 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
console.log(keys);

//또 포문 써도 되고
//for of
for(let key of keys){
    const value = person[key]; //이러면 벨류 깔끔하게 저장
    console.log(key, value);
}

//2.2 Object.values
//객체에서 벨류만 뽑아서 새로운 배열로 반환
let values = Object.values(person);

for(let value of vbalues){
    console.log(value);
}

//2.3 for in
for(let key in person){
    const value = person[key];
    console.log(key);
}

// 객체를 순회할때는 in 이고 배열을 순회할 떄는 of 이다 */