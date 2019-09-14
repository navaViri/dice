const diceTriggerEl= document.querySelector(".dice_trigger"); 
const diceImageEl = document.querySelector(".dice_img"); 
//const mySoundEl= document.getElementById("sound"); 


function getRandom(){
    return 1+ Math.floor(Math.random() *6 );
}

function showDice() {
    diceTriggerEl.addEventListener("click", function(){
        let myRandomNum  = getRandom(); 
        diceImageEl.src="images/dice"+ myRandomNum+ ".png"; 
        //mySoundEl.play();
    })
}
showDice(); 

function play(){
    var soundRoll = document.getElementById("soundRoll");
    soundRoll.play();
    soundRoll.currentTime=0;
}



