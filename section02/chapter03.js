//구조분해할당

let arr = [1,2,3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

//위의 하나씩 선언한걸 고도화해보자
let [one, two, three, four = 4] = arr;

//없는값은 선언해줄 수 있음


//2. 객체의 구조분해 할당;
let person = {
    name : "이정환",
    age : 27,
    hobby: "테니스"
}

//객체 구조분해 할당
let {name ,age : myAge, hobby} = person; // age를 myAge 키값으로 받고싶을 떄 쓴다


//3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({name,age,hobby,extra})=>{
    console.log(name,age,hobby,extra);
}
//이런식으로 객체를 넘기면 객체의 각 속성을 변수로 할당받을 수 있다.
func(person);
