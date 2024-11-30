import Button from "./buttons.js"
import Choice from "./choices.js"

const initialScreen = document.querySelector('.initialScreen')
const resultScreen = document.querySelector('.resultScreen')
const modalScreen = document.querySelector('.modalWrapper')
const header = document.querySelector('.header')
const result = document.querySelector('.resultScreen .result h3')
const alertError = document.querySelector('.alertError')
const playerChoiceImg = document.getElementById('playerChoice')
const machineChoiceImg = document.getElementById('machineChoice')




const btnRockChoice = document.querySelector('#rockButton')
const btnPaperChoice = document.querySelector('#paperButton')
const btnScissorsChoice = document.querySelector('#scissorsButton')

const btnReset = document.querySelector('#btnReset')
const btnTryAgain = document.querySelector('#btnTryAgain')
const btnRules = document.querySelector('#btnRules')
const btnCloseModal = document.querySelector('#btnCloseModal')

let playerScore = 0
let machineScore = 0
let rockInARowCount = 0
let machineChoice
let playerChoice
let isRockClicked = false
let isPaperClicked = false
let isScissorsClicked = false
let previousChoice

const buttonA = Button({
    header,
    resultScreen,
    initialScreen,
    modalScreen,
    playerScore,
    machineScore,
    rockInARowCount,
    isRockClicked,
    isPaperClicked,
    isScissorsClicked
})

const choice = Choice ({
    machineChoice,
    result,
    header,
    playerChoiceImg,
    machineChoiceImg,
    initialScreen,
    resultScreen,
    alertError,
    rockInARowCount,
    previousChoice,
    isRockClicked,
    isPaperClicked,
    isScissorsClicked,
    playerChoice,
    machineScore,
    playerScore

 })

btnReset.addEventListener('click', buttonA.handleResetClick);
btnTryAgain.addEventListener('click', buttonA.handleTryAgainClick);
btnRules.addEventListener('click', buttonA.handleRulesClick);
btnCloseModal.addEventListener('click', buttonA.handleCloseModal);
window.addEventListener('keydown', buttonA.handleKeydown)
btnRockChoice.addEventListener('click', choice.checkRockClicked);
btnPaperChoice.addEventListener('click', choice.checkPaperClicked);
btnScissorsChoice.addEventListener('click', choice.checkScissorsClicked);

