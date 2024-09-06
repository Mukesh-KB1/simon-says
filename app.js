let started = 0;
let level = 0;

let gameSeq = [];
let userSeq = [];


let highScore = 0;


let h2 = document.querySelector("h2");
let colClass = ["red","green","orange","blue"];

// Document Key press Start

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game started");
        started = true;

        levelUp();
    }
});


//Flash

function gameFlash(rand){
    rand.classList.add("flash");

    setTimeout( function(){
        rand.classList.remove("flash");
    },250);
}
function userFlash(rand){
    rand.classList.add("userflash");

    setTimeout( function(){
        rand.classList.remove("userflash");
    },250);
}

//Level Up

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`

    let randIdx = Math.floor(Math.random() * 4);
    let randomColClass = colClass[randIdx];
    let randColor = document.querySelector(`.${randomColClass}`);

    gameFlash(randColor);

    gameSeq.push(randomColClass);
    console.log(gameSeq);
}


let allBtn = document.querySelectorAll(".btn");

//HighScore

function HS(){
    
    if(highScore > level){
        return highScore;
    }
    else{
        return highScore = level;
    }
}


//Check 

function check(idx){ //0
    

    if(gameSeq[idx] == userSeq[idx]){
       if(gameSeq.length == userSeq.length){  
           setTimeout(levelUp , 500);
       }
    }

    else{

        let HighScore = HS();
        
        h2.innerHTML = `OOPs Game Over Final Score is <b>${level}</b> <br> press any key To start Again<br>
        HighSCore: ${HighScore}`;
        started = false;
        level = 0;
        gameSeq = [];
        userSeq= [];
    }
}

//Button Press All

function btnPress(){
    // console.log(this);
    userFlash(this);

    userSeq.push(this.getAttribute("id"));
    console.log(userSeq);  

    check(userSeq.length - 1); 
}

for(btn of allBtn){
    btn.addEventListener("click",btnPress);
}
 


