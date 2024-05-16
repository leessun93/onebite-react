//1 5가지 배열 변형 메서드
//1. filter
//기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
    {name: "이정환", hobby:"테니스"},
    {name: "이선흠", hobby:"테니스"},
    {name: "홍길동", hobby:"독서"}
];

//테니스만 추려서 새로운 배열로 반환 == filter()
const tennisPeople = arr1.filter((item) =>{
    if(item.hobby === "테니스") return true;
})
//고도화
const tennisPeople2 = arr1.filter((item) => item.hobby ==="테니스");

//where절 역할을 하는 함수이므로 잘 익혀두자 자주 쓰인다

//2.map
//배열의 모든요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값을 반환함
let arr2 = [1,2,3,4];
//map 현재요소, 반복카운트, 원본 배열을 전달받는다
//사용법은 배열.map(콜백함수(인자 3개)); 인것같다.
const mapReult1 = arr2.map((item,idx,arr)=>{
    console.log(idx, item);
    return item*2;
});

console.log(mapReult1);

//결론 = 맵 메서드는 원본배열에 데이터가공을 한 새로운 결과물 배열을 반환 

//사용예시 (arr1 의 name값만 뽑아서 새 배열로 내놔라)
let names = arr1.map((item) => item.name);

//3. sort
//배열을 사전순으로 정렬하는 메서드 String만 해당됨 int는 안먹음
let arr3 = ["d", "b","v", "a"];
arr3.sort();
//만약 숫자를 오름차순 내림차순으로 sort하고싶다면
let arr3_1 = [1,5,8,2,3,5];
arr3_1.sort((a,b)=>{
    if(a>b){
        return 1; //return 1일경우 앞으로 정렬하라 
    }else if(a<b){
        return -1;//return -1일경우 뒤로 정렬하라
    }else{
        return 0;//그대로 둬라
    }//내림차순 정렬일경우 return값만 반대로 조정
});

// console.log(arr3_1);


//4.toSorted
//원본은 놔두고 정렬된 새로운 배열을 반환
let arr5 = ["g","a","l","b","q"];
const sorted = arr5.toSorted();
//sort와 똑같은데 다만 원본을 유지한채로 새로 만드는것이 차이점

//5.join
//배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["안녕","내이름은","에엑따"];
const joined = arr6.join();
//각 요소의 구분자는 기본값으로, 이고 바꾸고싶다면 join(" ") 이런식으로 인자에 넣으면 된다.
console.log(joined);
