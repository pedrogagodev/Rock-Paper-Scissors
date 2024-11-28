const initialScreen = document.querySelector('.initialScreen')
const resultScreen = document.querySelector('.resultScreen')
const modalScreen = document.querySelector('.modalWrapper')
const header = document.querySelector('.header')

const btnRockChoice = document.querySelector('#rockChoice')
const btnPaperChoice = document.querySelector('#paperChoice')
const btnScissorsChoice = document.querySelector('#scissorsChoice')

const btnReset = document.querySelector('#btnReset')
const btnTryAgain = document.querySelector('#btnTryAgain')
const btnRules = document.querySelector('#btnRules')
const btnCloseModal = document.querySelector('#btnCloseModal')

let playerScore = 0
let machineScore = 0
let rockInARowCount = 0

btnReset.addEventListener('click', handleResetClick);
btnTryAgain.addEventListener('click', handleTryAgainClick);
btnRules.addEventListener('click', handleRulesClick);
btnCloseModal.addEventListener('click', handleCloseModal);
btnRockChoice.addEventListener('click', handleRockChoice);
btnPaperChoice.addEventListener('click', handlePaperChoice);
btnScissorsChoice.addEventListener('click', handleScissorsChoice);



function handleResetClick() {
    header.querySelector('#playerScore').innerText = `Player: 0`
    header.querySelector('#machineScore').innerText = `Machine: 0`
    playerScore = 0
    machineScore = 0
    rockInARowCount = 0
    
}
function handleTryAgainClick() {
    resultScreen.classList.toggle('hide')
    initialScreen.classList.toggle('hide')

}
function handleRulesClick() {
    modalScreen.classList.add('open')

}

function handleCloseModal() {
    modalScreen.classList.remove('open')
}
function handleRockChoice() {

}

function handlePaperChoice() {

}

function handleScissorsChoice() {

}


