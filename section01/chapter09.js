//1. if 조건문
let num = 10;

if(num >= 10){
    // console.log("num 은 10 이상입니다.");
}else if(num >= 5){
    // console.log("5이상입니다.");
}
else{
    // console.log("조건이 거짓입니다.");
}

//2. Switch 문
//if문과 기능은 동일
// 다수의 조건을 처리할 때 더 직관적

let animal = "cat";

switch(animal){
    case "cat": {
        console.log("고양이");
        break;
    }
    case "dog": {
        console.log("개");
        break;
    }
    case "snake":{
        console.log("뱀");
        break;
    }
    case "tiger":{
        console.log("호랑이");
        break;
    }    
    default:{
        console.log("그런동물 난 몰라요");
    }
}