
const form = document.querySelector("form");
const input = document.querySelector("input");
const errorMessage = document.querySelector(".error__message");

form.addEventListener("submit", event =>{
    event.preventDefault();
    const email = form.email.value.trim();
    if(!email.includes("@gmail.com")){
        errorMessage.style.display = "block";
        input.style.borderColor = "hsl(354, 100%, 66%)";
    } else {
        errorMessage.style.display = "none";
    };
    
});