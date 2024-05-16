//1.Date 객체를 ㅅ갱성하는 방법
let date1 = new Date(); //생성자
//console.log(date1);

//특정날짜
let date2 = new Date("1997-01-01 10:10:10"); // - . / 다 쓰임
//console.log(date2);

//2.타임 스탬프
//특정 시간(UTC 1970.01.01 협정세계시 뭐시기)부터 몇ms 지났는지를 의마함

let ts1 = date1.getTime();
let date4 = new Date(ts1);

//3. 시간요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() +1; //자바스크립트 월은 0부터 시작한다 따라서 +1 해줘야함
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

//4.시간 수정하기

date1.setFullYear(1993);
date1.setMonth(6);
date1.setDate(1);
date1.setHours(18);
date1.setMinutes(3);
date1.setSeconds(24);

//5.시간을 여러 포맷으로 출력하기
console.log(date1.toDateString());//시간제외 날짜만 출력
console.log(date1.toLocaleString());//현지화된 시간포멧
