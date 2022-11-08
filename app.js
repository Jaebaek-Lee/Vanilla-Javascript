//div.header:nth-child(2) h1
//header라는 클래스 네임이 있는 두 번째 div의 첫 번째 h1태그
const head = document.querySelector("div.header:nth-child(1) h1");
//이 head는 진짜 document.head랑 다르다. 그냥 내가 지은 이름일 뿐...
console.dir(head);
console.log(head.style.color);
function click() {
    const clickedClass = "active"; //수정 편의 + 오류 발생 낮춤
    if (head.className != clickedClass) {
        head.className = clickedClass;
    }
    else head.className = "";
}

head.addEventListener("click", click);