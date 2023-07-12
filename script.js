const rollBtn = document.getElementById("rollBtn");
const newGameBtn = document.getElementById("newGameBtn");
const diceRolledImage = document.getElementById("diceRolledImage");
const totalScoreText = document.getElementById("totalScoreText");
const winsText = document.getElementById("winsText");
const lossesText = document.getElementById("lossesText");
const winLoseMsg = document.getElementById("winLoseMsg");
const newGameMsg = document.getElementById("newGameMsg");


let diceImages = [
    "diceImages/one.png",
    "diceImages/two.png",
    "diceImages/three.png",
    "diceImages/four.png",
    "diceImages/five.png",
    "diceImages/six.png"    
];

let totalScore = 0;
let totalWins = 0;
let totalLosses = 0;



const endGame = () => {
    newGameMsg.textContent = `  Press the new game button to play again.`;
    newGameBtn.addEventListener("click", newGame)
    rollBtn.removeEventListener("click", rollDice);
};       

const newGame = () => {
    totalScore = 0;
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
        totalScore = 0;
        totalLosses += 1;
        lossesText.textContent = `Losses: ${totalLosses}`;
        winLoseMsg.textContent = `You Lose :(`;
        endGame();
    } else {
        totalScore += turnScore;
    }
    if (totalScore > 20){
        totalScoreText.textContent = `Score: ${totalScore}`;
        totalScore = 0;
        totalWins += 1;
        winsText.textContent = `Wins: ${totalWins}`;
        winLoseMsg.textContent = `You Win!`;
        endGame();
    } else {
        totalScoreText.textContent = `Score: ${totalScore}`;
    }   
}; 

newGame();