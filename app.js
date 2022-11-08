//div.header:nth-child(2) h1
//header라는 클래스 네임이 있는 두 번째 div의 첫 번째 h1태그
const head = document.querySelector("div.header:nth-child(1) h1");
//이 head는 진짜 document.head랑 다르다. 그냥 내가 지은 이름일 뿐...
console.dir(head);
console.log(head.style.color);

//head.className = clickedClass; -> 모든 classname을 이걸로 교체해버림.
        //만약 html에서 이미 클래스가 정의되어 있다면 그걸 없애버림. 문제 됨.

function click() {
    const clickedClass = "active"; //수정 편의 + 오류 발생 낮춤
    if (head.classList.contains(clickedClass)) {
        head.classList.remove(clickedClass);
    }
    else head.classList.add(clickedClass);
}

head.addEventListener("click", click);