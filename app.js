
let boxes = document.querySelectorAll(".box")
let msgcontainer = document.querySelector("#kia")
let msg = document.querySelector("#kia2")
let reset = document.querySelector("#ree")
let new1 = document.getElementById("#butt")

let turn0 = true
const reset1 = () => {
    turn0 = true
    msgcontainer.classList.add("hide")
    for (box of boxes) {

        box.innerText = ""
        box.disabled = false
    }

}

const winpattern = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
// for(box of boxes){
boxes.forEach((box) => {
    box.addEventListener("click", () => {

    
        if (turn0) {
            box.innerText = "X"
            turn0 = false
        }
        else {
            box.innerText = "O"
            turn0 = true
        }
        box.disabled = true;
        checkwinner();

    })



})
const no = () => {
    for (box of boxes) {
        box.disabled = true
    }
}

const winners = (winner) => {
 
    msg.innerText = `congratulation,Winner is Player ${winner}...\nPress New game to play again`;
    msgcontainer.classList.remove("hide");

    no();
}

const checkwinner = () => {
    // for (let pattern of winpattern) {
        winpattern.forEach((pattern)=>{

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {

                winners(pos1val)
            }
        }
    })}

