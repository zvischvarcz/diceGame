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


twoPplBtn.addEventListener("click", () => {
    onePplBtn.classList.remove("selected");
    twoPplBtn.classList.add("selected");
    containsAllContentSinglePlayer.classList.add("hidden");
    
})

onePplBtn.addEventListener("click", () => {
    onePplBtn.classList.add("selected");
    twoPplBtn.classList.remove("selected");
    containsAllContentSinglePlayer.classList.remove("hidden");
})




const endGame = () => {
    newGameMsg.textContent = `  Click new round to play again.`;
    newGameBtn.addEventListener("click", newGame)
    rollBtn.removeEventListener("click", rollDice);
};       

const newGame = () => {
    totalScore = 0;
    totalScoreText.textContent = `Score: ${totalScore}`;
    diceRolledImage.src = ""
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

newGame();