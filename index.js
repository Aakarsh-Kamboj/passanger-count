// document.getElementById("count-el").innerText = 5;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;
let preValue = 0;
function increment() {
    count++;
    countEl.textContent = count;
}
function save() {
    preValue += count;
    let countStr = preValue + " - ";
    saveEl.textContent += countStr;
    count = 0;
    countEl.textContent = 0;
}