var timer = 60;
var score = 0;
var hitrn = 0;

// Make bubbble code
function createBubble() {
    var bub = " ";

    for (var i = 1; i <= 133; i++) {
        var rn = Math.floor(Math.random() * 10);
        bub += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = bub;
}

// Timer Code
function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector(
                "#pbtm"
            ).innerHTML = `<h1>GAME OVER  <br> <span>Your total score is ${score} </span></h1>`;
        }
    }, 1000);
}

// Hit code
function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

// Score Code
function myHighScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (details) {
    var clicknumber = Number(details.target.textContent);
    if (clicknumber === hitrn) {
        myHighScore();
        createBubble();
        getNewHit();
    }
});

createBubble();
runTimer();
getNewHit();

// NOTE FOR TIMER CODE:-
// apne timer ko nahi bola ki oo 0 pe ruk  jaye  isliye oo negative mai ja raha hai to use "if statement "
// time minus ho every second  "timer--"
//  after apply if statement 0 ke bad kay setInterval chal nahi chal rha hai to wrong setInterval chal raha hai bus print nahi kar raha hai ,else part main chal rah  hai.ye extra memory kha raha hai.
//too use clearInterval to stop SetInterval

// --------------------------------------------------------------------------------
// This code is create Bubble Every Single Line Is Important
// var bub = " ";

// for(var i = 1;i<=133;i++){
//     var rn = Math.floor(Math.random()*10);
//    bub += `<div class="bubble">${rn}</div>`;
// }

// document.querySelector("#pbtm").innerHTML = bub;
