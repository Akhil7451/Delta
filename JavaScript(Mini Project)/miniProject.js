let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "purple", "green"];

let start = false;
let level = 0;

let h2 = document.querySelector("h2");
let highScore = document.querySelector("#highest-score");
let highSc = 0;

document.addEventListener("keypress", function() {
    if(start == false){
        console.log("Game started!");
        start = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    // random btn choose
    let randBtnIndex = Math.floor((Math.random()*4));
    let randColor = btns[randBtnIndex];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    // console.log(gameSeq);
    gameFlash(randBtn);
}

function checkUserSeq(idx) {
    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 500);
        }
    } else {
        document.querySelector("body").style.backgroundColor = "red";
        // alert(`Game Over! Your score is: ${level}`);
        h2.innerHTML = `Game Over! Please enter any key to start again!<br /><b>Last Score was ${level}</b>`;
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        }, 300);
        if(highSc < level) {
            highSc = level;
        }
        highScore.innerText = `Highest Score : ${highSc}`;
        reset();
    }
}

function userPress() {
    userFlash(this);
    userSeq.push(this.id);
    // console.log(userSeq);
    checkUserSeq(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click", userPress);
}

function reset() {
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;   
}