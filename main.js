let startBtn = document.querySelector("#startBtn");
let stopBtn = document.querySelector("#stopBtn");
let resetBtn = document.querySelector("#resetBtn");
let lapBtn = document.querySelector("#lapBtn");
let showWatch = document.querySelector(".showWatch");
let lapContent = document.querySelector(".lapContent");
let resultClock = document.querySelector(".resultClock");

let data = [];

let a;
let sec = 0;
let min;
let saat;
let result;

function clock() {
    sec += 1;
    min = Math.floor(sec / 60);
    saat = Math.floor(min / 60);

    console.log("sec", sec);
    console.log("min", min);
    console.log("saat", saat, min, sec);
    result = `
                    <span id="hour">${saat < 10 ? "0" + saat : saat}</span>
                    <span id="minute">${min < 10 ? ":0" + min : ":" + min}</span>
                    <span id="seconds">${sec < 10 ? ":0" + sec : ":" + sec}</span>`
    showWatch.innerHTML = result;


}

startBtn.addEventListener("click", function () {
    clearTimeout(a);
    a = setInterval(clock, 1000);
});

stopBtn.addEventListener("click", function () {
    clearTimeout(a);

});

resetBtn.addEventListener("click", function () {
    sec = 0;
    clearTimeout(a);
    result = `<span id="hour">00:</span>
    <span id="minute">00:</span>
    <span id="seconds">00</span>`
    showWatch.innerHTML = result;
});

lapBtn.addEventListener("click", function () {
    clearTimeout(a);
    data.push(result);
    let showLap = data.map((item) => {
        return `<div class="resultClock">${item}</div>`;
    }).join("");
    lapContent.innerHTML = showLap;
    console.log(showLap);
});



// let a;
// let time = 0;
// function clock() {
//     time += 1;
//     console.log("minute ", time);
// }
// setInterval(clock, 1000);




