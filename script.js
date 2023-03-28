
let saveEl = document.getElementById("prev-el");
let countEl = document.getElementById("count-el");
let resEl = document.getElementById("reset");
let count = 0;

function increment(){
    count += 1;
    countEl.textContent = count;
}

function save(){
    let countStr = count + ' - ';
    saveEl.textContent += countStr;
    countEl.textContent =0;
    count = 0;
    
}
