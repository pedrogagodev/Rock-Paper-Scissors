const initialScreen = document.querySelector('.initialScreen')
const resultScreen = document.querySelector('.resultScreen')
const modalScreen = document.querySelector('.modalWrapper')
const header = document.querySelector('.header')
const result = document.querySelector('.resultScreen .result h3')



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
let machineChoice
let playerChoice
let isRockClicked = false
let isPaperClicked = false
let isScissorsClicked = false
let previousChoice

btnReset.addEventListener('click', handleResetClick);
btnTryAgain.addEventListener('click', handleTryAgainClick);
btnRules.addEventListener('click', handleRulesClick);
btnCloseModal.addEventListener('click', handleCloseModal);
btnRockChoice.addEventListener('click', checkRockClicked);
btnPaperChoice.addEventListener('click', checkPaperClicked);
btnScissorsChoice.addEventListener('click', checkScissorsClicked);




function makeMachineChoice() {
    const options = ['rock', 'paper', 'scissors']

    const idx = Math.floor(Math.random() * options.length)

    machineChoice = options[idx]

}   

makeMachineChoice()


function calculateResult() {
    if (isRockClicked == true) {
        playerChoice = 'rock'
    }
    else if (isPaperClicked == true) {
        playerChoice = 'paper'
    }
    else if (isScissorsClicked == true) {
        playerChoice = 'scissors'
    }

    
    if (playerChoice == 'rock' && machineChoice == 'paper') {
        result.innerText = 'Player lose!'
        machineScore++
        header.querySelector('#machineScore').innerText = `Machine: ${machineScore}`
    }
    else if (playerChoice == 'rock' && machineChoice == 'scissors') {
        result.innerText = 'Player wins!'
        playerScore++
        header.querySelector('#playerScore').innerText = `Player: ${playerScore}`
    }
    else if (playerChoice == 'paper' && machineChoice == 'rock') {
        result.innerText = 'Player wins!'
        playerScore++
        header.querySelector('#playerScore').innerText = `Player: ${playerScore}`
    }
    else if (playerChoice == 'paper' && machineChoice == 'scissors') {
        result.innerText = 'Player lose!'
        machineScore++
        header.querySelector('#machineScore').innerText = `Machine: ${machineScore}`
    }
    else if (playerChoice == 'scissors' && machineChoice == 'paper') {
        result.innerText = 'Player wins!'
        playerScore++
        header.querySelector('#playerScore').innerText = `Player: ${playerScore}`
    }
    else if (playerChoice == 'scissors' && machineChoice == 'rock') {
        result.innerText = 'Player lose!'
        machineScore++
        header.querySelector('#machineScore').innerText = `Machine: ${machineScore}`
    }

    else {
        result.innerText = 'Draw!'
    }
        
}



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
    isRockClicked = false
    isPaperClicked = false
    isScissorsClicked = false


}
function handleRulesClick() {
    modalScreen.classList.add('open')

}

function handleCloseModal() {
    modalScreen.classList.remove('open')
}
function checkRockClicked() {
    isRockClicked = true
    if (rockInARowCount == 0) {
        previousChoice = ''
    }
    rockInARowCount++
    if (rockInARowCount > 1) {
        console.log('não é permitido 2 vezes rock')
    }else {
        initialScreen.classList.add('hide')
        resultScreen.classList.remove('hide')
        calculateResult()
        makeMachineChoice()
    }

    if (rockInARowCount == 1 && previousChoice != 'rock' && previousChoice != undefined && previousChoice != '') {
        rockInARowCount = 0
        
    }

    }


function checkPaperClicked() {
    isPaperClicked = true
    previousChoice = 'paper'
    rockInARowCount = 0
    initialScreen.classList.add('hide')
    resultScreen.classList.remove('hide')
    calculateResult()
    makeMachineChoice()
}

function checkScissorsClicked() {
    isScissorsClicked = true
    previousChoice = 'scissors'
    rockInARowCount = 0
    initialScreen.classList.toggle('hide')
    resultScreen.classList.remove('hide')
    calculateResult()
    makeMachineChoice()
}


