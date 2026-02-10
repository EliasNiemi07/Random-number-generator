const maxnum = document.querySelector("#maxnumber")
const form = document.querySelector("#numbeform")
const submit = document.querySelector("#numsubmit")


submit.addEventListener("click", function (event) {
    event.preventDefault();
    
    const max = Number(maxnum.value);
    number.textContent = "";
    between.textContent = "";
    randonumber = Math.floor(Math.random() * max + 1);

between.textContent = "Randomizing between 1-"+max
number.textContent = randonumber




});