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
        let getQuote = data.slip
        ids.innerHTML =    `Advice #${getQuote.id}`;
        advice.innerHTML = getQuote.advice;
    });
}

btn.addEventListener("click", function(){
    randomAdvice()
});


