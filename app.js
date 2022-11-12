// Select Item

const ids = document.querySelector("#advice");
const advice = document.querySelector("#advice--text");
const btn = document.querySelector(".button");

// console.log(button);

window.addEventListener("DOMContentLoaded", function(){
    randomAdvice()
})

function randomAdvice(){
    fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
        ids.innerHTML =    `Advice #${data.slip.id}`;
        advice.innerHTML = data.slip.advice;
    });
}

btn.addEventListener("click", function(){
    randomAdvice()
});


