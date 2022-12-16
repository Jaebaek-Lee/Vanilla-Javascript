const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function login(event) {
    event.preventDefault();
    loginForm.classList.add("hidden");
    const USER_NAME = loginInput.value;
    greeting.innerText = USER_NAME;
    greeting.innerText = `Hello ${USER_NAME}`
    greeting.classList.remove("hidden"); 
}

loginForm.addEventListener("submit", login);