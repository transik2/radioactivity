let btn = document.querySelectorAll(".answer-btn");
let answers = document.querySelectorAll(".answers");

for (let b of btn) {
    b.onclick = function(){
        document.querySelector(".answers").classList.remove("answers");
        b.classList.add("answers");
        document.querySelector(".answers-close").classList.remove("answers-close")
        b.classList.add("answers-close");
    }
}