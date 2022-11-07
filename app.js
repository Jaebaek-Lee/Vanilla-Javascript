//div.header:nth-child(2) h1
//header라는 클래스 네임이 있는 두 번째 div의 첫 번째 h1태그
const head = document.querySelector("div.header:nth-child(1) h1");
//이 head는 진짜 document.head랑 다르다. 그냥 내가 지은 이름일 뿐...
console.dir(head);

function click() {
    const color = head.style.color;
    let newColor;
    console.log(color); //element.style은 js에서 지정된 style만 불러오고 실제 css value랑은
    //무관하게 동작한다. 따라서 현재 css로 설정된 color가 black여도 콘솔은 아무것도 출력 x
    if (color === "blue") { //if === "black"이라 썼을 경우 현재 값을 모르기 때문에
        newColor = "black";
    }
    else {
        newColor = "blue"; //이쪽으로 넘어가고, 여기서 색을 현재와 같은 색으로 바꾼다면 첫 클릭이
        //씹히는 것 처럼 보일 것. 따라서 css로 지정된 색은 if 밑에 넣어줘야함.
        console.log(color); //처음엔 암것도 출력 안할것.
    }
    head.style.color = newColor;
}

head.addEventListener("click", click);
