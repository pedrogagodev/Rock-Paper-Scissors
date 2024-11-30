 export default function Choice ({
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
 }) {
    function makeMachineChoice() {
        const options = ['rock', 'paper', 'scissors']

        const idx = Math.floor(Math.random() * options.length)

        machineChoice = options[idx]

    }  

    function calculateResult() {
        makeMachineChoice()
        checkPlayerChoice()
        
        console.log(`Player choice ${playerChoice}`)
        console.log(`Machine choice ${machineChoice}`)

        if (playerChoice == 'rock' && machineChoice == 'paper') {
            result.innerText = 'Player lose!'
            machineScore++
            header.querySelector('#machineScore').innerText = `Machine: ${machineScore}`
            playerChoiceImg.src = 'assets/icon-rock.svg'
            machineChoiceImg.src = 'assets/icon-paper.svg'
        }
        else if (playerChoice == 'rock' && machineChoice == 'scissors') {
            result.innerText = 'Player wins!'
            playerScore++
            header.querySelector('#playerScore').innerText = `Player: ${playerScore}`
            playerChoiceImg.src = 'assets/icon-rock.svg'
            machineChoiceImg.src = 'assets/icon-scissors.svg'
        }
        else if (playerChoice == 'rock' && machineChoice == 'rock') {
            result.innerText = 'Draw!'
            playerChoiceImg.src = 'assets/icon-rock.svg'
            machineChoiceImg.src = 'assets/icon-rock.svg'
        }
        else if (playerChoice == 'paper' && machineChoice == 'rock') {
            result.innerText = 'Player wins!'
            playerScore++
            header.querySelector('#playerScore').innerText = `Player: ${playerScore}`
            playerChoiceImg.src = 'assets/icon-paper.svg'
            machineChoiceImg.src = 'assets/icon-rock.svg'
        }
        else if (playerChoice == 'paper' && machineChoice == 'scissors') {
            result.innerText = 'Player lose!'
            machineScore++
            header.querySelector('#machineScore').innerText = `Machine: ${machineScore}`
            playerChoiceImg.src = 'assets/icon-paper.svg'
            machineChoiceImg.src = 'assets/icon-scissors.svg'
        }
        else if (playerChoice == 'paper' && machineChoice == 'paper') {
            result.innerText = 'Draw!'
            playerChoiceImg.src = 'assets/icon-paper.svg'
            machineChoiceImg.src = 'assets/icon-paper.svg'
        }
        else if (playerChoice == 'scissors' && machineChoice == 'paper') {
            result.innerText = 'Player wins!'
            playerScore++
            header.querySelector('#playerScore').innerText = `Player: ${playerScore}`
            playerChoiceImg.src = 'assets/icon-scissors.svg'
            machineChoiceImg.src = 'assets/icon-paper.svg'
        }
        else if (playerChoice == 'scissors' && machineChoice == 'rock') {
            result.innerText = 'Player lose!'
            machineScore++
            header.querySelector('#machineScore').innerText = `Machine: ${machineScore}`
            playerChoiceImg.src = 'assets/icon-scissors.svg'
            machineChoiceImg.src = 'assets/icon-rock.svg'
        }

        else {
            result.innerText = 'Draw!'
            playerChoiceImg.src = 'assets/icon-scissors.svg'
            machineChoiceImg.src = 'assets/icon-scissors.svg'
        }
            
    }

    function switchToResultScreen() {
        initialScreen.classList.add('hide')
        resultScreen.classList.remove('hide')
        alertError.classList.remove('open')   
    }

    function checkRockClicked() {
        isPaperClicked = false
        isScissorsClicked = false
        isRockClicked = true
        if (rockInARowCount == 0) {
            previousChoice = ''
        }
        rockInARowCount++
        if (rockInARowCount > 1) {
            alertError.classList.add('open')
        }else {
            switchToResultScreen()
            calculateResult()
        }
    
        if (rockInARowCount == 1 && previousChoice != 'rock' && previousChoice != undefined && previousChoice != '') {
            rockInARowCount = 0
            
        }
    
        }
    
    
    function checkPaperClicked() {
        isRockClicked = false
        isScissorsClicked = false
        isPaperClicked = true
        previousChoice = 'paper'
        rockInARowCount = 0
        switchToResultScreen()
        calculateResult()
    }
    
    function checkScissorsClicked() {
        isRockClicked = false
        isPaperClicked = false
        isScissorsClicked = true
        previousChoice = 'scissors'
        rockInARowCount = 0
        switchToResultScreen()
        calculateResult()
    }

    function checkPlayerChoice() {
        if (isRockClicked == true) {
            playerChoice = 'rock'
        }
        else if (isPaperClicked == true) {
            playerChoice = 'paper'
        }
        else if (isScissorsClicked == true) {
            playerChoice = 'scissors'
        }
    }



    return {
        makeMachineChoice,
        calculateResult,
        switchToResultScreen,
        checkPaperClicked,
        checkRockClicked,
        checkScissorsClicked,
        checkPlayerChoice
    }
 }