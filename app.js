
let boxes = document.querySelectorAll(".box");
let resetGameBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContanier = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn = true;//first turn for x
let count=0 ;//count to check the draw condition
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame=()=>{
    console.log("resetGame called");
    turn=true;
    enableBoxes();
    msgContanier.classList.add("hide");

}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box clicked");
        

        
        if(turn){
            box.innerText="X";
            box.classList.add("xColor")
            turn=false;
        }
        else
        {
            box.innerText="O";
            box.classList.add("oColor")
            turn=true;
        }
        box.disabled=true;
        checkWinner();
    })
})

const disableBoxes= ()=>{
    for(let box of boxes){
        box.disabled=true;

    }

}

const enableBoxes= ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";

    }

}

const showWinner= (winner)=>{
    msg.innerText=`congratulation, winner is ${winner}`;
    msgContanier.classList.remove("hide");
    disableBoxes();

}



const checkWinner=() =>
{
     count++;
    if(count==9){
        console.log("Game draw");
        drawFun();
    }

        
    
    console.log(`checkWinner called ${count}`);

    for(let pattern of winPattern){
        
        
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val= boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val !="" && pos3Val != ""){

            if(pos1Val==pos2Val && pos2Val==pos3Val){

                console.log("Winner is",pos1Val)
                showWinner(pos1Val);
                count=0;

            }
        }




    }
}
newGameBtn.addEventListener("click",resetGame);
resetGameBtn.addEventListener("click",resetGame);

const drawFun=()=>{
    console.log("draw fun called")
    msg.innerText="Game draw";
    msgContanier.classList.remove("hide");

}