// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    console.log("hello", loginInput.value);
    //입력이 없어도 hello를 출력하는 문제 발생.
}

loginButton.addEventListener("click", onLoginBtnClick);