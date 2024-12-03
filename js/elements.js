const initialScreen = document.querySelector('.initialScreen')
const resultScreen = document.querySelector('.resultScreen')
const modalScreen = document.querySelector('.modalWrapper')
const modalCard = document.querySelector('.modalCard')
const header = document.querySelector('.header')
const result = document.querySelector('.resultScreen .result h3')
const alertError = document.querySelector('.alertError')
const subtitles = document.querySelector('.subtitle')
const playerChoiceImg = document.getElementById('playerChoice')
const machineChoiceImg = document.getElementById('machineChoice')


const buttons = document.querySelector('.choices')
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

export {
    initialScreen,
    resultScreen,
    modalScreen,
    header,
    result,
    alertError,
    playerChoiceImg,
    machineChoiceImg,
    btnRockChoice,
    btnPaperChoice,
    btnScissorsChoice,
    btnReset,
    btnTryAgain,
    btnRules,
    btnCloseModal,
    modalCard,
    buttons,
    subtitles,
    playerScore,
    machineScore,
    rockInARowCount,
    machineChoice,
    isPaperClicked,
    isRockClicked,
    isScissorsClicked,
    playerChoice,
    previousChoice
}