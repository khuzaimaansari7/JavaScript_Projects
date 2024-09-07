let userScoreCount = 0;
let compScoreCount = 0;

const choices = document.querySelectorAll(".choice");
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");
const expContainer = document.querySelector(".exp-container");
const expMsg = document.querySelector("#exp");
const resetbtn = document.querySelector("#btn");


let genCompChoice = () =>{
    let options = ["rock","paper","scissor"];
    let randIndx = Math.floor(Math.random()*3);

    return options[randIndx];
    
};
const drawGame = () =>{
    console.log("Game Was Draw!");
    msg.innerText = "Game Was Draw!";
};

const showWinner = (userWin) =>{
    if(userWin){
        console.log("You Won!");
        msg.innerText = "You Won!";
        userScoreCount ++;
        console.log("User Score:",userScoreCount,"Comp Score:",compScoreCount);
        userScore.innerText = userScoreCount;
        
    }
    else{
        console.log("Comp Won!");
        msg.innerText = "Comp Won!";
        compScoreCount ++;
        console.log("User Score:",userScoreCount,"Comp Score:",compScoreCount);
        compScore.innerText = compScoreCount;

    }
};

let checkResult = (userChoice, compChoice) =>{
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;

        if(userChoice === "rock"){
            if(compChoice === "paper"){
                userWin = false;
            }
            else{
                userWin = true;
            }
        }
        else if(userChoice === "paper"){
            if(compChoice === "scissor"){
                userWin = false;
            }
            else{
                userWin = true;
            }
        }
        else if(userChoice === "scissor"){
            if(compChoice === "rock"){
                userWin = false;
            }
            else{
                userWin = true;
            }
        }

        showWinner(userWin);
    }
}
const explanation = (userChoice, compChoice) =>{
    expMsg.innerText = ("Comp selected: "+ compChoice);
    expContainer.classList.remove("hide");
};
const playGame = (userChoice) =>{
    console.log("User Choice is:",userChoice);

    const compChoice = genCompChoice();
    console.log("Comp Choice is:",compChoice);

    checkResult(userChoice, compChoice);
    explanation(userChoice, compChoice);

};

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");

        playGame(userChoice);
    });
});

resetbtn.addEventListener("click", ()=>{
    console.log("Game Restarted");
    location.reload();
});

