export default function Button({
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
}) {
    function handleResetClick() {
        header.querySelector('#playerScore').innerText = `Player: 0`
        header.querySelector('#machineScore').innerText = `Machine: 0`
        resetScore()    
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

    function handleKeydown(event) {
        if (event.key === 'Escape') {
            handleCloseModal()
        }
    }

    function resetScore() {
        playerScore = 0
        machineScore = 0
        rockInARowCount = 0
    }


    return {
        handleResetClick,
        handleTryAgainClick,
        handleRulesClick,
        handleCloseModal,
        handleKeydown,
        resetScore,
    }
}