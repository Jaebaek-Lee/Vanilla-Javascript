const age = parseInt(prompt("How old are you?"));
//우측이 먼저 실행되고 그 값이 저장된 주소를 age에 할당하는 것이라 되는 것
//이건 c++도 마찬가지임. 즉 둘 다 const 변수의 값 할당이 런타임 시간에 일어나는 것 같다.
//알아보니 실제로 컴파일러는 const 변수가 compile time constants인지 run time constants인지
//컴파일 단계에서 구분하는 것 같다.
if (isNaN(age) || age < 0) {
    console.log("Please write a real positive number");
}
else if (age < 18) {
    console.log("Go to your mommy");
}
else if (age >= 18 && age <= 50) {
    console.log("You can drink");
}
else {
    console.log("I love you");
}
//===는 자동 형변환을 용납하지 않는다.
//parseInt는 숫자 말고 다른게 들어오면 NaN를 리턴한다.
//기타는 다 C++과 동일함. || && 등등