let btn = document.querySelectorAll(".answer-btn");
let answers = document.querySelectorAll(".answers");
let answers2 = document.querySelectorAll(".answers-2");
let btn2 = document.querySelectorAll(".answer-btn-2");
let answers3 = document.querySelectorAll(".answers-3");
let btn3 = document.querySelectorAll(".answer-btn-3");

for (let b of btn) {
    b.onclick = function(){
        document.querySelector(".answers").classList.remove("answers");
        b.classList.add("answers");
    }
}

for (let c of btn2) {
    c.onclick = function(){
        document.querySelector(".answers-2").classList.remove("answers-2");
        c.classList.add("answers-2");
    }
}

for (let d of btn3) {
    d.onclick = function(){
        document.querySelector(".answers-3").classList.remove("answers-3");
        d.classList.add("answers-3");
    }
}