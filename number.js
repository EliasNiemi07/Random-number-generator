const maxnum = document.querySelector("#maxnumber")
const form = document.querySelector("#numbeform")
const submit = document.querySelector("#numsubmit")
let number = 0;
let max = maxnum

submit.addEventListener("click", function (event) {
    event.preventDefault();

    number.textContent = "";
    randonumber = Math.floor(Math.random() * max + 1);
if (maxnum === "") {
    number.textContent = "Input a number!"
    return;
}

number.textContent = randonumber




});