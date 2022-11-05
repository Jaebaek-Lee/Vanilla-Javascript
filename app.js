//div.header:nth-child(2) h1
//header라는 클래스 네임이 있는 두 번째 div의 첫 번째 h1태그
const head = document.querySelector("div.header:nth-child(1) h1");
//이 head는 진짜 document.head랑 다르다. 그냥 내가 지은 이름일 뿐...
console.dir(head);

function click() {
    head.style.color = "blue";
    head.innerText = "Clicked!";
};

function mouseenter() {
    head.innerText = "Mouse is here!";
};

function mouseleave() {
    head.innerText = "JavaScript";
};

function resize() {
    document.body.style.backgroundColor = "darkgrey";
    //body, head, title같은건 document.으로 호출이 가능하다. 하지만 div나 h1같은건 안됨.
    //이건 querySelector로 받아야해.
}

head.addEventListener("mouseenter", mouseenter);
head.addEventListener("click", click);
head.addEventListener("mouseleave", mouseleave);
window.addEventListener("resize", resize);