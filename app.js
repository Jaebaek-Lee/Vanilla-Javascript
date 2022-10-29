//배열을 쓰는 경우
//리스트를 만들고 싶을 때
const palemember = "이창민, 이재백, 한우석";
console.log(palemember);
//활용도 쓰레기
const palememberArray = ["이창민", "이재백", "한우석"];
console.log(palememberArray);
console.log(palememberArray[0]);
palememberArray.push("하리보");
console.log(palememberArray);
//활용도 굳.
//그러나 한 가지 카테고리에만 통함.

/* 객체는 여러가지 속성의 데이터를 가진다. */
const pale = {
    name: ["이창민", "이재백", "한우석"],
    age: 23,
    male: true,
    female: false
};
console.log(pale);
console.log(pale.name[0]);
console.log(pale.male);
pale.name = "이재백";//const는 pale이 가리킬 주소이지 요소가 아님. 변경 가능
console.log(pale.name[1]);//재
pale.location = "discord";
console.log(pale); //location 추가됨.