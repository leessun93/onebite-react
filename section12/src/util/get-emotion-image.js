//비트가 실행하는 이미지 최적화,
//퍼블릭은 직접 이미지로 빌드되고, 에셌에 넣어서 import로 가져온 이미지는 캐싱해서 암호화됨(메모리 덜잡아먹음)
import emotion1 from "./../assets/emotion1.png";
import emotion2 from "./../assets/emotion2.png";
import emotion3 from "./../assets/emotion3.png";
import emotion4 from "./../assets/emotion4.png";
import emotion5 from "./../assets/emotion5.png";

export function getEmotionImage(emotionId){
    switch(emotionId){
        case 1: return emotion1;
        case 2: return emotion2;
        case 3: return emotion3;
        case 4: return emotion4;
        case 5: return emotion5;
        default : return null; 
    }
}

