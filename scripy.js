let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");

let turno= true;

const winPaterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("box clicked")
        if (turno){
            box.innerText = "O";
            turno =false;
        } else{
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;
        


        checkWinner();
    });
});

const checkWinner =()=>{
    for (let pattern of winPaterns){
        

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 !="" && pos2 != "" && pos3 != ""){
            if (pos1 === pos2 && pos2 === pos3){
                console.log("You win the game",pos1);
            }
        }
    };
};