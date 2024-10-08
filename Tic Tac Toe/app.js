let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0;

let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("Button was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
            box.style.color = "#191913";
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count ++;

        let isWinner = checkWinner();
        if(count === 9 && !isWinner){
            checkDraw();
        }
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

};
const checkDraw = () =>{
        msg.innerText = "Game is Draw, restart the game";
        msgContainer.classList.remove("hide");
        disableBoxes();
};

const checkWinner = () =>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !== "" && pos2Val !== "" && pos3Val !== ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner");
                showWinner(pos1Val);
            }
        };
    }
};

resetbtn.addEventListener("click", () =>{
    console.log("Game Restarted");
    location.reload();
});