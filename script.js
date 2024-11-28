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

    /*if (machineChoice == 'rock') {
        rockInARowCount++
    }
    if (machineChoice == 'rock' && rockInARowCount >= 2) {
        console.log('Rock 2 times in a row')
        makeMachineChoice()
    }
    console.log(machineChoice)*/
}   

makeMachineChoice()
console.log(machineChoice)



function result() {
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
        console.log('Player lose')
    }
    else if (playerChoice == 'rock' && machineChoice == 'rock') {
        console.log('Draw')
    }
    else if (playerChoice == 'rock' && machineChoice == 'scissors') {
        console.log('Player wins')
    }
    else if (playerChoice == 'paper' && machineChoice == 'paper') {
        console.log('Draw')
    }
    else if (playerChoice == 'paper' && machineChoice == 'rock') {
        console.log('Player wins')
    }
    else if (playerChoice == 'paper' && machineChoice == 'scissors') {
        console.log('Player lose')
    }
    else if (playerChoice == 'scissors' && machineChoice == 'paper') {
        console.log('Player wins')
    }
    else if (playerChoice == 'scissors' && machineChoice == 'rock') {
        console.log('Player lose')
    }
    else if (playerChoice == 'scissors' && machineChoice == 'scissors') {
        console.log('Draw')
    }
    else {
        console.log('Draw')
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
        result()
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
    result()
    makeMachineChoice()
}

function checkScissorsClicked() {
    isScissorsClicked = true
    previousChoice = 'scissors'
    rockInARowCount = 0
    initialScreen.classList.toggle('hide')
    resultScreen.classList.remove('hide')
    result()
    makeMachineChoice()
}


