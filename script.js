// Single player elements
const rollBtn = document.getElementById("rollBtn");
const newGameBtn = document.getElementById("newGameBtn");
const diceRolledImage = document.getElementById("diceRolledImage");
const totalScoreText = document.getElementById("totalScoreText");
const winsText = document.getElementById("winsText");
const lossesText = document.getElementById("lossesText");
const winLoseMsg = document.getElementById("winLoseMsg");
const newGameMsg = document.getElementById("newGameMsg");
const onePplBtn = document.getElementById("onePplBtn");
const twoPplBtn = document.getElementById("twoPplBtn");
const containsAllContentSinglePlayer = document.getElementById("containsAllContentSinglePlayer");

// 2 player elements
const containsAllContentTwoPlayer = document.getElementById("containsAllContentTwoPlayer");
const winsTextP1 = document.getElementById("winsTextP1");
const lossesTextP1 = document.getElementById("lossesTextP1");
const winsTextP2 = document.getElementById("winsTextP2");
const lossesTextP2 = document.getElementById("lossesTextP2");
const totalScoreTextP1 = document.getElementById("totalScoreTextP1");
const totalScoreTextP2 = document.getElementById("totalScoreTextP2");
const currentScoreTextP1 = document.getElementById("currentScoreTextP1");
const currentScoreTextP2 = document.getElementById("currentScoreTextP2");
const holdBtnP1 = document.getElementById("holdBtnP1");
const rollBtnP1 = document.getElementById("rollBtnP1");
const holdBtnP2 = document.getElementById("holdBtnP2");
const rollBtnP2 = document.getElementById("rollBtnP2");
const winLoseMsgMultiPlayer = document.getElementById("winLoseMsgMultiPlayer");
const newGameMsgMultiPlayer = document.getElementById("newGameMsgMultiPlayer");
const diceRolledImageMP = document.getElementById("diceRolledImageMP");
const newGameBtnMP = document.getElementById("newGameBtnMP");
const playersTextWrap = document.getElementById("playersTextWrap");

let diceImages = [
    "./diceImages/one.png",
    "./diceImages/two.png",
    "./diceImages/three.png",
    "./diceImages/four.png",
    "./diceImages/five.png",
    "./diceImages/six.png"    
];

// single player variables
let totalScore = 0;
let totalWins = 0;
let totalLosses = 0;

// 2 player variables
let totalScoreP1 = 0;
let currentScoreP1 = 0;
let totalWinsP1 = 0;
let totalLossesP1 = 0;
let totalScoreP2 = 0;
let currentScoreP2 = 0;
let totalWinsP2 = 0;
let totalLossesP2 = 0;

twoPplBtn.addEventListener("click", () => {
    onePplBtn.classList.remove("selected");
    twoPplBtn.classList.add("selected");
    containsAllContentSinglePlayer.classList.add("hidden");
    containsAllContentTwoPlayer.classList.remove("hidden");
    
})

onePplBtn.addEventListener("click", () => {
    onePplBtn.classList.add("selected");
    twoPplBtn.classList.remove("selected");
    containsAllContentSinglePlayer.classList.remove("hidden");
    containsAllContentTwoPlayer.classList.add("hidden");
})




const endGame = () => {
    newGameMsg.textContent = `  Click new round to play again.`;
    newGameBtn.addEventListener("click", newGame);
    rollBtn.removeEventListener("click", rollDice);
};       

const newGame = () => {
    totalScore = 0;
    totalScoreText.textContent = `Score: ${totalScore}`;
    diceRolledImage.src = "";
    winLoseMsg.textContent = "";
    newGameMsg.textContent = "";
    rollBtn.addEventListener("click", rollDice);
}


const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6);
    diceRolledImage.src = diceImages[randomNumber];
    diceNumber = randomNumber + 1;
    scoreKeeper(diceNumber);
    
};
const scoreKeeper = (turnScore) => {
    if (turnScore == 1){
        totalLosses ++;
        lossesText.textContent = `Losses: ${totalLosses}`;
        winLoseMsg.textContent = `You Lose :(`;
        endGame();
    } else {
        totalScore += turnScore;
    }
    if (totalScore > 20){
        totalScoreText.textContent = `Score: ${totalScore}`;
        totalScore = 0;
        totalWins ++;
        winsText.textContent = `Wins: ${totalWins}`;
        winLoseMsg.textContent = `You Win!`;
        endGame();
    } else {
        totalScoreText.textContent = `Score: ${totalScore}`;
    }   
}; 



// multiplayer below



const endGameMP = () => {
    newGameMsgMultiPlayer.textContent = `  Click new round to play again.`;
    newGameBtnMP.addEventListener("click", newGameMP);
    rollBtnP1.removeEventListener("click", rollDiceP1);
    rollBtnP2.removeEventListener("click", rollDiceP2);
    holdBtnP1.removeEventListener("click", holdP1);
    holdBtnP2.removeEventListener("click", holdP2);
};       

const newGameMP = () => {
    totalScoreP1 = 0;
    totalScoreP2 = 0;
    totalScoreTextP1.textContent = `Score: ${totalScoreP1}`;
    totalScoreTextP2.textContent = `Score: ${totalScoreP2}`;
    currentScoreP1 = 0;
    currentScoreP2 = 0;
    currentScoreTextP1.textContent = `Current: ${currentScoreP1}`;
    currentScoreTextP2.textContent = `Current: ${currentScoreP2}`;
    diceRolledImageMP.src = "";
    winLoseMsgMultiPlayer.textContent = "";
    newGameMsgMultiPlayer.textContent = "";
    rollBtnP1.addEventListener("click", rollDiceP1);
    holdBtnP1.addEventListener("click", holdP1);
}


const rollDiceP1 = () => {
    const randomNumber = Math.floor(Math.random() * 6);
    diceRolledImageMP.src = diceImages[randomNumber];
    diceNumber = randomNumber + 1;
    scoreKeeperP1(diceNumber);
    
};
const scoreKeeperP1 = (turnScore) => {
    if (turnScore == 1){
        currentScoreP1 = 0;
        currentScoreTextP1.textContent = `Current: ${currentScoreP1}`;
        holdP1();
    } else {
        currentScoreP1 += turnScore;
    }
    if ((currentScoreP1 + totalScoreP1) > 20){
        currentScoreTextP1.textContent = `Current: ${currentScoreP1}`;
        currentScoreP1 = 0;
        totalWinsP1 ++;
        winsTextP1.textContent = `Wins: ${totalWinsP1}`;
        totalLossesP2 ++;
        lossesTextP2.textContent = `Losses: ${totalLossesP2}`;
        winLoseMsgMultiPlayer.textContent = `Player 1 Wins!`;
        endGameMP();
    } else {
        currentScoreTextP1.textContent = `Current: ${currentScoreP1}`;
    }   
}; 

const holdP1 = () => {
    totalScoreP1 += currentScoreP1;
    totalScoreTextP1.textContent = `Score: ${totalScoreP1}`;
    currentScoreP1 = 0; 
    currentScoreTextP1.textContent = `Current: ${currentScoreP1}`;
    rollBtnP1.removeEventListener("click", rollDiceP1);
    rollBtnP2.addEventListener("click", rollDiceP2);
    holdBtnP2.addEventListener("click", holdP2);
    playersTextWrap.classList.remove("p1s-turn");
    playersTextWrap.classList.add("p2s-turn");
}

const rollDiceP2 = () => {
    const randomNumber = Math.floor(Math.random() * 6);
    diceRolledImageMP.src = diceImages[randomNumber];
    diceNumber = randomNumber + 1;
    scoreKeeperP2(diceNumber);
    
};
const scoreKeeperP2 = (turnScore) => {
    if (turnScore == 1){
        currentScoreP2 = 0;
        currentScoreTextP2.textContent = `Current: ${currentScoreP2}`;
        holdP2();
    } else {
        currentScoreP2 += turnScore;
    }
    if ((currentScoreP2 + totalScoreP2) > 20){
        currentScoreTextP2.textContent = `Current: ${currentScoreP2}`;
        currentScoreP2 = 0;
        totalWinsP2 ++;
        winsTextP2.textContent = `Wins: ${totalWinsP2}`;
        winLoseMsgMultiPlayer.textContent = `Player 2 Wins!`;
        totalLossesP1 ++;
        lossesTextP1.textContent = `Losses: ${totalLossesP1}`;
        endGameMP();
    } else {
        currentScoreTextP2.textContent = `Current: ${currentScoreP2}`;
    }   
};

const holdP2 = () => {
    totalScoreP2 += currentScoreP2;
    totalScoreTextP2.textContent = `Score: ${totalScoreP2}`;
    currentScoreP2 = 0; 
    currentScoreTextP2.textContent = `Current: ${currentScoreP2}`;
    rollBtnP2.removeEventListener("click", rollDiceP2);
    rollBtnP1.addEventListener("click", rollDiceP1);
    playersTextWrap.classList.add("p1s-turn");
    playersTextWrap.classList.remove("p2s-turn");
}

newGame();
newGameMP();
