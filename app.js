let button = document.querySelectorAll("#button");
console.log(button);
let winnermsg = document.querySelector("p");
console.log(winnermsg);

let resetGame = document.querySelector("#resetGame");
console.log(resetGame);
let newGame = document.querySelector("#new");
console.log(newGame);
let winningPatterns = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
console.log(winningPatterns);
let turn = true;
console.log(typeof turn);
let count = 0;
console.log(count);

const res = () =>{
turn = true;
count = 0;
for(butt of button) {
    butt.innerText = "";
    enableButton();
    winnermsg.classList.add("hide");

}
};
resetGame.addEventListener("click", res);

const newG = () => {

    turn = true;
    count = 0;
    for(butt of button) {
        butt.innerText = "";
        enableButton();
    
    }
};
newGame.addEventListener("click", newG);
const enableButton = () => {
    for(butt of button){
        butt.disabled = false;
    }
};
const disableButton = () => {
    for(butt of button){
        butt.disabled = true;
    }
};
const draw = ()=>{
winnermsg.innerHTML = "<p>Drawed!</p>"
winnermsg.style.color = "Green";
winnermsg.style.fontSize = "40px";
winnermsg.classList.remove("hide");
};
button.forEach((butt)=>{
butt.addEventListener("click", ()=>{
    if(turn){
        butt.innerText = "X";
        butt.style.color = "Red";
         butt.style.fontSize = "35px";
         butt.style.fontWeight = "bold";
        turn = false;

    } else{
        butt.innerText = "O";
        butt.style.color = "Green";
         butt.style.fontSize = "35px";
         butt.style.fontWeight = "bold";
        turn = true;

    }
    butt.disabled = true;
    count++;
    const checkdraw = checkWinner();
    if(count===9 && !checkdraw){
        console.log("draw");
        draw();
    }
checkWinner();
})

});
const checkWinner = () => {
  for(pattern of winningPatterns){
    let pos1 = button[pattern[0]].innerText;
    let pos2 = button[pattern[1]].innerText;
    let pos3 = button[pattern[2]].innerText;
    if(pos1!="" && pos2 !="" && pos3 !=""){
        if(pos1 == pos2 && pos2 == pos3){
            console.log("winner")
            winnermsg.innerHTML="<p>You are Winner</p>" + pos1;
            winnermsg.style.color = "Chocolate";
            winnermsg.style.fontSize = "35px";
            winnermsg.classList.remove("hide");
            disableButton();

        }
    }
  }

}