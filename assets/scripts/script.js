//Home page initialization
const homePage = document.getElementById('home-page');
const rpsPage = document.getElementById('rock-paper-scissors');
const cgPage = document.getElementById('color-game');
const showRpsButton = document.querySelector('.rps');
const showCgButton = document.querySelector('.cg');
const showHomeButton = document.querySelectorAll('.home-button');

//Common elements initialization 
const newGameButton = document.querySelectorAll('.newGame');
const restartButton = document.querySelectorAll('.restart');
const quitButton = document.querySelectorAll('.quit');
const playerCurrency = document.querySelectorAll('.playerCurrency');
const quarterButton = document.querySelectorAll('.quarter');
const halfButton = document.querySelectorAll('.half');
const threeQuarterButton = document.querySelectorAll('.three-quarter');
const allInButton = document.querySelectorAll('.allin');
const overlay = document.querySelector('.overlay');
const closeModalButton = document.querySelectorAll('.closeModalButton');
const winGameModal = document.querySelector('.wingame');
const loseGameModal = document.querySelector('.losegame');

//Rock Paper Scissors page initialization
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const computerButton = document.querySelector('.computer');
const playButton = document.querySelector('.play');
const gameResult = document.querySelector('.gameResult');
const computerDisplay = document.querySelector('.computer-section');
const playerDisplay = document.querySelector('.player-section');
const playerInputDisplay = document.querySelector('.input-container');
const gameHistoryDisplay = document.querySelector('.history-container');
const betInput = document.querySelector('.betInput');
const instructionsModal = document.querySelector('.rps-instructions');
const instructionsButton = document.querySelector('.instructions');
let playerSelection;
let computerSelection;
let cgPlayerSelection;
let cgComputerSelection;
let playerBet;
let cgPlayerBet;
let playerCoins;

//Color Game page initialization
const blueButton = document.querySelector('.cg-blue');
const redButton = document.querySelector('.cg-red');
const greenButton = document.querySelector('.cg-green');
const yellowButton = document.querySelector('.cg-yellow');
const whiteButton = document.querySelector('.cg-white');
const pinkButton = document.querySelector('.cg-pink');
const blueImgButton = document.querySelector('.cg-blue-img');
const redImgButton = document.querySelector('.cg-red-img');
const greenImgButton = document.querySelector('.cg-green-img');
const yellowImgButton = document.querySelector('.cg-yellow-img');
const whiteImgButton = document.querySelector('.cg-white-img');
const pinkImgButton = document.querySelector('.cg-pink-img');
const cgImageButton = document.querySelectorAll('.cg-computer-img');
const compChoiceOne = document.querySelector('.cg-computer.one');
const compChoiceTwo = document.querySelector('.cg-computer.two');
const compChoiceThree = document.querySelector('.cg-computer.three');
const cgPlayButton = document.querySelector('.cg-play');
const cgGameResult = document.querySelector('.cg-gameResult');
const computerCgDisplay = document.querySelector('.cg-computer-section');
const playerCgDisplay = document.querySelector('.cg-player-section');
const playerInputCgDisplay = document.querySelector('.cg-input-container');
const gameHistoryCgDisplay = document.querySelector('.cg-history-container');
const cgBetInput = document.querySelector('.cg-betInput');
const cgInstructionsModal = document.querySelector('.cg-instructions');
const cgInstructionsButton = document.querySelector('.instructions.cg');


/////////////////////// General Buttons ///////////////////////

//Home Button
showHomeButton.forEach((element) => element.addEventListener('click', showHomePage));
showRpsButton.addEventListener('click', showRpsPage);
showCgButton.addEventListener('click', showCgPage);

//Game Settings Buttons
newGameButton.forEach((element) => element.addEventListener('click', newGame));
restartButton.forEach((element) => element.addEventListener('click', restartGame));
quitButton.forEach((element) => element.addEventListener('click', quitGame));
instructionsButton.addEventListener('click', showInstructionsModal);
cgInstructionsButton.addEventListener('click', showCgInstructionsModal);
closeModalButton.forEach(element => element.addEventListener('click', closeModal));
overlay.addEventListener('click', closeModal);



//Bet Input buttons
quarterButton.forEach((element) => element.addEventListener('click', setQuarterBet));
halfButton.forEach((element) => element.addEventListener('click', setHalfBet));
threeQuarterButton.forEach((element) => element.addEventListener('click', setThreeQuarterBet));
allInButton.forEach((element) => element.addEventListener('click', setAllInBet));

/////////////////////// Rock Paper Scissors Buttons ///////////////////////

// Player Selection Buttons for Rock Paper Scissors
rockButton.addEventListener('click', () => playerSelection = 'rock');
paperButton.addEventListener('click', () => playerSelection = 'paper');
scissorsButton.addEventListener('click', () => playerSelection = 'scissors');
rockButton.addEventListener('click', selectPlayerButton);
paperButton.addEventListener('click', selectPlayerButton);
scissorsButton.addEventListener('click', selectPlayerButton);

//Play button for Rock Paper Scissors
playButton.addEventListener('click', () => gameResult.textContent = playRound(playerSelection, computerSelection));

/////////////////////// Color Game Buttons ///////////////////////

// Player Selection Buttons for Color Game
blueButton.addEventListener('click', () => cgPlayerSelection = 'blue');
redButton.addEventListener('click', () => cgPlayerSelection = 'red');
greenButton.addEventListener('click', () => cgPlayerSelection = 'green');
yellowButton.addEventListener('click', () => cgPlayerSelection = 'yellow');
whiteButton.addEventListener('click', () => cgPlayerSelection = 'white');
pinkButton.addEventListener('click', () => cgPlayerSelection = 'pink');
blueButton.addEventListener('click', cgSelectPlayerButton);
redButton.addEventListener('click', cgSelectPlayerButton);
greenButton.addEventListener('click', cgSelectPlayerButton);
yellowButton.addEventListener('click', cgSelectPlayerButton);
whiteButton.addEventListener('click', cgSelectPlayerButton);
pinkButton.addEventListener('click', cgSelectPlayerButton);

//Play button for Color Game
cgPlayButton.addEventListener('click', () => cgGameResult.textContent = cgPlayRound(cgComputerSelection));

/////////////////////// Button Styles ///////////////////////

//Button styles for rock paper scissors
function selectPlayerButton(){
    if (playerSelection === 'rock'){
        rockButton.style.backgroundColor = '#f6d003';
        paperButton.style.backgroundColor = '';
        scissorsButton.style.backgroundColor = '';
    } else if (playerSelection === 'paper'){
        rockButton.style.backgroundColor = '';
        paperButton.style.backgroundColor = '#f6d003';
        scissorsButton.style.backgroundColor = '';
    } else if (playerSelection === 'scissors'){
        rockButton.style.backgroundColor = '';
        paperButton.style.backgroundColor = '';
        scissorsButton.style.backgroundColor = '#f6d003';
    } else {
        rockButton.style.backgroundColor = '';
        paperButton.style.backgroundColor = '';
        scissorsButton.style.backgroundColor = '';
    }
}

//Button styles for color game
function cgSelectPlayerButton(){
    if (cgPlayerSelection === 'blue'){
        blueImgButton.classList.remove('hidden');
        redImgButton.classList.add('hidden');
        greenImgButton.classList.add('hidden');
        yellowImgButton.classList.add('hidden');
        whiteImgButton.classList.add('hidden');
        pinkImgButton.classList.add('hidden');
    } else if (cgPlayerSelection === 'red'){
        blueImgButton.classList.add('hidden');
        redImgButton.classList.remove('hidden');
        greenImgButton.classList.add('hidden');
        yellowImgButton.classList.add('hidden');
        whiteImgButton.classList.add('hidden');
        pinkImgButton.classList.add('hidden');
    } else if (cgPlayerSelection === 'green'){
        blueImgButton.classList.add('hidden');
        redImgButton.classList.add('hidden');
        greenImgButton.classList.remove('hidden');
        yellowImgButton.classList.add('hidden');
        whiteImgButton.classList.add('hidden');
        pinkImgButton.classList.add('hidden');
    } else if (cgPlayerSelection === 'yellow'){
        blueImgButton.classList.add('hidden');
        redImgButton.classList.add('hidden');
        greenImgButton.classList.add('hidden');
        yellowImgButton.classList.remove('hidden');
        whiteImgButton.classList.add('hidden');
        pinkImgButton.classList.add('hidden');
    } else if (cgPlayerSelection === 'white'){
        blueImgButton.classList.add('hidden');
        redImgButton.classList.add('hidden');
        greenImgButton.classList.add('hidden');
        yellowImgButton.classList.add('hidden');
        whiteImgButton.classList.remove('hidden');
        pinkImgButton.classList.add('hidden');
    } else if (cgPlayerSelection === 'pink'){
        blueImgButton.classList.add('hidden');
        redImgButton.classList.add('hidden');
        greenImgButton.classList.add('hidden');
        yellowImgButton.classList.add('hidden');
        whiteImgButton.classList.add('hidden');
        pinkImgButton.classList.remove('hidden');
    }
}

/////////////////////// GENERAL FUNCTIONS ///////////////////////

//Functions for switching pages
function showHomePage(){
    homePage.classList.remove('hidden');
    rpsPage.classList.add('hidden');
    cgPage.classList.add('hidden');
    betInput.value = Number('');
    cgBetInput.value = Number('');
}

function showRpsPage(){
    homePage.classList.add('hidden');
    rpsPage.classList.remove('hidden');
    cgPage.classList.add('hidden');
}

function showCgPage(){
    homePage.classList.add('hidden');
    rpsPage.classList.add('hidden');
    cgPage.classList.remove('hidden');
}

//Function for quarter bet
function setQuarterBet(){
    playerBet = Math.round(0.25 * playerCoins);
    cgPlayerBet = Math.round(0.25 * playerCoins);
    betInput.value = Number(playerBet);
    cgBetInput.value = Number(cgPlayerBet);
}

//Function for half bet
function setHalfBet(){
    playerBet = Math.round(0.5 * playerCoins);
    cgPlayerBet = Math.round(0.5 * playerCoins);
    betInput.value = Number(playerBet);
    cgBetInput.value = Number(cgPlayerBet);
}

//Function for three quarters bet
function setThreeQuarterBet(){
    playerBet = Math.round(0.75 * playerCoins);
    cgPlayerBet = Math.round(0.75 * playerCoins);
    betInput.value = Number(playerBet);
    cgBetInput.value = Number(cgPlayerBet);
}

//Function for all in bet
function setAllInBet(){
    playerBet = Math.round(1 * playerCoins);
    cgPlayerBet = Math.round(1 * playerCoins);
    betInput.value = Number(playerBet);
    cgBetInput.value = Number(cgPlayerBet);
}

//Function for displaying coins
function displayPlayerCoins(playerCoins){
    playerCurrency.forEach((element) => element.textContent = ` ${playerCoins} Niels`);
}

//Function for winning a round
function winRound(){
    playerCoins += Number(playerBet);
    displayPlayerCoins(playerCoins);
}

function cgWinRound(){
    playerCoins += Number(cgPlayerBet);
    displayPlayerCoins(playerCoins);
}

//Function for losing a round
function loseRound(){
    playerCoins -= Number(playerBet);
    displayPlayerCoins(playerCoins);
}

function cgLoseRound(){
    playerCoins -= Number(cgPlayerBet);
    displayPlayerCoins(playerCoins);
}

/////////////////////// Rock Paper Scissors Functions ///////////////////////
//Function for showing rock paper scissors instructions modal
function showInstructionsModal(){
    instructionsModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function closeModal(){
    instructionsModal.classList.add('hidden');
    cgInstructionsModal.classList.add('hidden');
    winGameModal.classList.add('hidden');
    loseGameModal.classList.add('hidden');
    overlay.classList.add('hidden');
}

//Function for getting computer's choice in rock paper scissors
function getComputerChoice(){
    let choiceArr = ['rock', 'paper', 'scissors'];
    let computerChoice = choiceArr[Math.floor(Math.random() * choiceArr.length)];
    return computerChoice;
}

function showComputerSelection(computerSelection){
    if (computerSelection === 'rock'){
        computerButton.src = './assets/images/rocks.png';
    } else if (computerSelection === 'paper'){
        computerButton.src = './assets/images/paper.png';
    } else if (computerSelection === 'scissors'){
        computerButton.src = './assets/images/scissors.png';
    }
}

//Function for playing a round in rock paper scissors
function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    playerBet = betInput.value;
    if (playerCoins >= playerBet){
        if (playerSelection === computerSelection) {
            showComputerSelection(computerSelection);
            return 'Draw!';
        } else if ((playerSelection === 'rock') && (computerSelection === 'scissors')){
            showComputerSelection(computerSelection);
            winRound();
            checkWonGame();
            return 'You win! Rock beats Scissors!';
        } else if ((playerSelection === 'rock') && (computerSelection === 'paper')){
            showComputerSelection(computerSelection);
            loseRound()
            checkGameOver();
            return 'You lose! Paper beats Rock!';
        } else if ((playerSelection === 'paper') && (computerSelection === 'rock')){
            showComputerSelection(computerSelection);
            winRound();
            checkWonGame();
            return 'You win! Paper beats Rock!';
        } else if ((playerSelection === 'paper') && (computerSelection === 'scissors')){
            showComputerSelection(computerSelection);
            loseRound()
            checkGameOver();
            return 'You lose! Scissors beats Paper!';
        } else if ((playerSelection === 'scissors') && (computerSelection === 'paper')){
            showComputerSelection(computerSelection);
            winRound();
            checkWonGame();
            return 'You win! Scissors beats Paper!';
        } else if ((playerSelection === 'scissors') && (computerSelection === 'rock')){
            showComputerSelection(computerSelection);
            loseRound()
            checkGameOver();
            return 'You lose! Rock beats Scissors!';
        } else {
            alert('Please choose your weapon!');
            return 'Please choose your weapon!';
        }
    } else {
        alert('Please enter the right amount');
        return 'Insufficient funds';
    }
}

/////////////////////// Color Game Functions ///////////////////////
function showCgInstructionsModal(){
    cgInstructionsModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

//Function for getting computer's choice in rock paper scissors
function csGetComputerChoice(){
    let cgChoiceArr = ['blue', 'red', 'green', 'yellow', 'white', 'pink'];
    let cgComputerChoice;
    let colorArray = [];
    for (i = 0; i < 3; i++){
        cgComputerChoice = cgChoiceArr[Math.floor(Math.random() * cgChoiceArr.length)];
        colorArray.push(cgComputerChoice);
    }
    return colorArray;
}

function hideCgImageButton(){
    cgImageButton.forEach((element) => element.classList.add('hidden'));
}

function showCgImageButton(cgComputerSelection){
    if (cgComputerSelection[0] === 'blue'){
        compChoiceOne.style.backgroundColor = 'blue';
    } else if (cgComputerSelection[0] === 'red'){
        compChoiceOne.style.backgroundColor = 'red';
    } else if (cgComputerSelection[0] === 'green'){
        compChoiceOne.style.backgroundColor = 'green';
    } else if (cgComputerSelection[0] === 'yellow'){
        compChoiceOne.style.backgroundColor = 'yellow';
    } else if (cgComputerSelection[0] === 'white'){
        compChoiceOne.style.backgroundColor = 'white';
    } else if (cgComputerSelection[0] === 'pink'){
        compChoiceOne.style.backgroundColor = 'pink';
    }

    if (cgComputerSelection[1] === 'blue'){
        compChoiceTwo.style.backgroundColor = 'blue';
    } else if (cgComputerSelection[1] === 'red'){
        compChoiceTwo.style.backgroundColor = 'red';
    } else if (cgComputerSelection[1] === 'green'){
        compChoiceTwo.style.backgroundColor = 'green';
    } else if (cgComputerSelection[1] === 'yellow'){
        compChoiceTwo.style.backgroundColor = 'yellow';
    } else if (cgComputerSelection[1] === 'white'){
        compChoiceTwo.style.backgroundColor = 'white';
    } else if (cgComputerSelection[1] === 'pink'){
        compChoiceTwo.style.backgroundColor = 'pink';
    }

    if (cgComputerSelection[2] === 'blue'){
        compChoiceThree.style.backgroundColor = 'blue';
    } else if (cgComputerSelection[2] === 'red'){
        compChoiceThree.style.backgroundColor = 'red';
    } else if (cgComputerSelection[2] === 'green'){
        compChoiceThree.style.backgroundColor = 'green';
    } else if (cgComputerSelection[2] === 'yellow'){
        compChoiceThree.style.backgroundColor = 'yellow';
    } else if (cgComputerSelection[2] === 'white'){
        compChoiceThree.style.backgroundColor = 'white';
    } else if (cgComputerSelection[2] === 'pink'){
        compChoiceThree.style.backgroundColor = 'pink';
    }
}

function cgPlayRound(cgComputerSelection){
    cgComputerSelection = csGetComputerChoice();
    cgPlayerBet = cgBetInput.value;
    let losingCondition;
    let winCounter = 0;
    if (playerCoins >= cgPlayerBet){
        losingCondition = cgComputerSelection.includes(cgPlayerSelection);
        if (cgPlayerSelection === 'blue' || cgPlayerSelection === 'red' || cgPlayerSelection === 'green' || cgPlayerSelection === 'yellow' || cgPlayerSelection === 'white'|| cgPlayerSelection === 'pink'){
            if (losingCondition === false){
                showCgImageButton(cgComputerSelection);
                hideCgImageButton();
                cgLoseRound();
                checkGameOver();
                return 'You lose!';
            } else {
                for (i = 0; i < 3; i++){
                    if (cgComputerSelection[i] === cgPlayerSelection){
                        winCounter += 1;
                        cgWinRound();
                    } 
                }
                showCgImageButton(cgComputerSelection);
                hideCgImageButton();
                checkWonGame();
                return `You win ${winCounter}x!`;
            }
        } else {
            return "Please choose a color!";
        }
        
    } else if (playerCoins === 0){
        alert('Game Over');
        quitGame();
        return 'Game Over!';
    } else {
        alert('Please enter the right amount');
        return 'Insufficient funds';
    }
}

/////////////////////// Game Settings Functions ///////////////////////
//Function for checking winning condition
function checkWonGame(){
    if (playerCoins >= 10000){
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        blueButton.disabled = true;
        redButton.disabled = true;
        greenButton.disabled = true;
        yellowButton.disabled = true;
        whiteButton.disabled = true;
        pinkButton.disabled = true;
        betInput.disabled = true;
        cgBetInput.disabled = true;
        quarterButton.forEach(element => element.disabled = true);
        halfButton.forEach(element => element.disabled = true);
        threeQuarterButton.forEach(element => element.disabled = true);
        allInButton.forEach(element => element.disabled = true);
        playButton.disabled = true;
        cgPlayButton.disabled = true;
        newGameButton.forEach(element => element.disabled = false);
        restartButton.forEach(element => element.disabled = true);
        quitButton.forEach(element => element.disabled = true);
        gameResult.textContent = 'Congratulations! You win!';
        cgGameResult.textContent = 'Congratulations! You win!';
        betInput.value = Number('');
        cgBetInput.value = Number('');
        winGameModal.classList.remove('hidden');
        overlay.classList.remove('hidden');
        return 'Congratulations! You win!';
    }
}


//Function for checking game over
function checkGameOver(){
    if (playerCoins === 0){
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
        blueButton.disabled = true;
        redButton.disabled = true;
        greenButton.disabled = true;
        yellowButton.disabled = true;
        whiteButton.disabled = true;
        pinkButton.disabled = true;
        betInput.disabled = true;
        cgBetInput.disabled = true;
        quarterButton.forEach(element => element.disabled = true);
        halfButton.forEach(element => element.disabled = true);
        threeQuarterButton.forEach(element => element.disabled = true);
        allInButton.forEach(element => element.disabled = true);
        playButton.disabled = true;
        cgPlayButton.disabled = true;
        newGameButton.forEach(element => element.disabled = false);
        restartButton.forEach(element => element.disabled = true);
        quitButton.forEach(element => element.disabled = true);
        gameResult.textContent = 'Game Over!';
        cgGameResult.textContent = 'Game Over!';
        betInput.value = Number('');
        cgBetInput.value = Number('');
        loseGameModal.classList.remove('hidden');
        overlay.classList.remove('hidden');
        return 'Game Over';
    }
}

//Function for New Game
function newGame(){
    playerCoins = 1000;
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    blueButton.disabled = false;
    redButton.disabled = false;
    greenButton.disabled = false;
    yellowButton.disabled = false;
    whiteButton.disabled = false;
    pinkButton.disabled = false;
    betInput.disabled = false;
    cgBetInput.disabled = false;
    quarterButton.forEach(element => element.disabled = false);
    halfButton.forEach(element => element.disabled = false);
    threeQuarterButton.forEach(element => element.disabled = false);
    allInButton.forEach(element => element.disabled = false);
    playButton.disabled = false;
    cgPlayButton.disabled = false;
    newGameButton.forEach(element => element.disabled = true);
    restartButton.forEach(element => element.disabled = false);
    quitButton.forEach(element => element.disabled = false);
    gameResult.textContent = '';
    cgGameResult.textContent = '';
    computerButton.src='./assets/images/question-mark.png';
    rockButton.style.backgroundColor = '';
    paperButton.style.backgroundColor = '';
    scissorsButton.style.backgroundColor = '';
    playerDisplay.style.opacity = '1';
    computerDisplay.style.opacity = '1';
    playerInputDisplay.style.opacity = '1';
    gameHistoryDisplay.style.opacity = '1';
    playerCgDisplay.style.opacity = '1';
    computerCgDisplay.style.opacity = '1';
    playerInputCgDisplay.style.opacity = '1';
    gameHistoryCgDisplay.style.opacity = '1';
    cgImageButton.forEach((element) => element.classList.remove('hidden'));
    compChoiceOne.style.backgroundColor = 'white';
    compChoiceTwo.style.backgroundColor = 'white';
    compChoiceThree.style.backgroundColor = 'white';
    blueImgButton.classList.add('hidden');
    redImgButton.classList.add('hidden');
    greenImgButton.classList.add('hidden');
    yellowImgButton.classList.add('hidden');
    whiteImgButton.classList.add('hidden');
    pinkImgButton.classList.add('hidden');
    playerSelection = '';
    cgPlayerSelection = '';
    displayPlayerCoins(playerCoins);
}

//Function for Restart Game
function restartGame(){
    playerCoins = 1000;
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    blueButton.disabled = false;
    redButton.disabled = false;
    greenButton.disabled = false;
    yellowButton.disabled = false;
    whiteButton.disabled = false;
    pinkButton.disabled = false;
    betInput.disabled = false;
    cgBetInput.disabled = false;
    quarterButton.forEach(element => element.disabled = false);
    halfButton.forEach(element => element.disabled = false);
    threeQuarterButton.forEach(element => element.disabled = false);
    allInButton.forEach(element => element.disabled = false);
    playButton.disabled = false;
    cgPlayButton.disabled = false;
    newGameButton.forEach(element => element.disabled = true);
    restartButton.forEach(element => element.disabled = false);
    quitButton.forEach(element => element.disabled = false);
    gameResult.textContent = '';
    cgGameResult.textContent = '';
    computerButton.src='./assets/images/question-mark.png';
    rockButton.style.backgroundColor = '';
    paperButton.style.backgroundColor = '';
    scissorsButton.style.backgroundColor = '';
    playerDisplay.style.opacity = '1';
    computerDisplay.style.opacity = '1';
    playerInputDisplay.style.opacity = '1';
    gameHistoryDisplay.style.opacity = '1';
    playerCgDisplay.style.opacity = '1';
    computerCgDisplay.style.opacity = '1';
    playerInputCgDisplay.style.opacity = '1';
    gameHistoryCgDisplay.style.opacity = '1';
    cgImageButton.forEach((element) => element.classList.remove('hidden'));
    compChoiceOne.style.backgroundColor = 'white';
    compChoiceTwo.style.backgroundColor = 'white';
    compChoiceThree.style.backgroundColor = 'white';
    blueImgButton.classList.add('hidden');
    redImgButton.classList.add('hidden');
    greenImgButton.classList.add('hidden');
    yellowImgButton.classList.add('hidden');
    whiteImgButton.classList.add('hidden');
    pinkImgButton.classList.add('hidden');
    betInput.value = Number('');
    cgBetInput.value = Number('');
    playerSelection = '';
    cgPlayerSelection = '';
    displayPlayerCoins(playerCoins);
}
//Function for Quit Game
function quitGame(){
    playerCoins = 0;
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    blueButton.disabled = true;
    redButton.disabled = true;
    greenButton.disabled = true;
    yellowButton.disabled = true;
    whiteButton.disabled = true;
    pinkButton.disabled = true;
    betInput.disabled = true;
    cgBetInput.disabled = true;
    quarterButton.forEach(element => element.disabled = true);
    halfButton.forEach(element => element.disabled = true);
    threeQuarterButton.forEach(element => element.disabled = true);
    allInButton.forEach(element => element.disabled = true);
    playButton.disabled = true;
    cgPlayButton.disabled = true;
    newGameButton.forEach(element => element.disabled = false);
    restartButton.forEach(element => element.disabled = true);
    quitButton.forEach(element => element.disabled = true);
    gameResult.textContent = '';
    cgGameResult.textContent = '';
    computerButton.src='./assets/images/question-mark.png';
    rockButton.style.backgroundColor = '';
    paperButton.style.backgroundColor = '';
    scissorsButton.style.backgroundColor = '';
    playerDisplay.style.opacity = '0.3';
    computerDisplay.style.opacity = '0.3';
    playerInputDisplay.style.opacity = '0.3';
    gameHistoryDisplay.style.opacity = '0.3';
    playerCgDisplay.style.opacity = '0.3';
    computerCgDisplay.style.opacity = '0.3';
    playerInputCgDisplay.style.opacity = '0.3';
    gameHistoryCgDisplay.style.opacity = '0.3';
    cgImageButton.forEach((element) => element.classList.remove('hidden'));
    compChoiceOne.style.backgroundColor = 'white';
    compChoiceTwo.style.backgroundColor = 'white';
    compChoiceThree.style.backgroundColor = 'white';
    blueImgButton.classList.add('hidden');
    redImgButton.classList.add('hidden');
    greenImgButton.classList.add('hidden');
    yellowImgButton.classList.add('hidden');
    whiteImgButton.classList.add('hidden');
    pinkImgButton.classList.add('hidden');
    betInput.value = Number('');
    cgBetInput.value = Number('');
    playerSelection = '';
    cgPlayerSelection = '';
    displayPlayerCoins(playerCoins);
}

quitGame();