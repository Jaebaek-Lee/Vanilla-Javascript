//console.log = 요소를 HTML과 같은 트리 구조로 출력
//console.dir = 요소를 JSON과 같은 트리 구조로 출력 - 객체의 요소를 보여줌
console.dir(document);
//document는 html 파일을 그대로 객체화해둔 것.
console.dir(document.getElementById("title"));
//document 객체의 getE~함수 - 인자로 title을 전달 - 를 호출하여 객체로 옮겨진 태그를 리턴받음.
const title = document.getElementById("title");
//const title은 title이라는 id가 있는 객체화된 태그가 됨.
console.dir(title.innerText);
//타이틀 객체의 innerText 키가 가진 value를 리턴받음.
//title = "gogo";//error
title.innerHTML = "gogo";//title 객체의 innerHTML 키의 value가 gogo로 변경됨.