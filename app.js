console.log('a' + 1); //정수를 문자열로 변환함 - a1
console.log(10 + '10'); //정수를 문자열로 변환함 - 1010
console.log('12' * 12); //문자열을 정수로 변환함 - 144, /, % 연산자도 동일
//좌항과 우항의 위치를 바꾸어도 동일한 우선순위로 동작함.

const a = 5;

console.log(a);

//const a = 3; a가 3과 5의 주소를 모두 참조할 수는 없다.

//a = 3; //const로 선언되었기때문에, a가 저장하는 변수의 주소값이 바뀔 수 없다.

let b = null;//null 또한 data type이다.
console.log(b);
console.log(null);
let c = true;//true와 false(boolean) 또한 data type이다.
console.log(c);
console.log(false);
b = 3;
console.log(b);//let은 변경 가능하다.

//C언어와 JavaScript는 변수 선언시 메모리를 할당하는 구조가 다르다.
//자세한 내용 : 디스코드 개인 서버에 기록해뒀음.