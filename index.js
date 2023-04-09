console.log("Welcome To Tic Tac Toe")
let start=new Audio("start.wav")
let end=new Audio("end.wav")
let audioTurn=new Audio("Ting.mp3")
let turn="x"
let gameover=false

//Function to change turn
const changeturn=()=>{
    return turn === "x"? "o":"x"
}

//Function to check for win 
const checkwin=()=>{
    let boxtext=document.getElementsByClassName('boxtext');
  let wins=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]
  wins.forEach(e=>{
    if ((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[2]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
      document.querySelector('.info').innerText=boxtext[e[0]].innerText+" Won"
      gameover=true
    }
  })
  
}

//Game logic
start.play();
let boxes=document.getElementsByClassName("box")
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector(".boxtext")
    element.addEventListener('click',(e)=>{
        if(boxtext.innerText===''){
            boxtext.innerText=turn;
            turn=changeturn();
            audioTurn.play();
            checkwin();
            if(!gameover){
            document.getElementsByClassName("info")[0].innerText="Turn for :- "+turn;
            }
        }
    })
})

