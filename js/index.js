import Button from "./buttons.js"
import Choice from "./choices.js"
import {
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
    previousChoice,
    modalCard
} from "./elements.js"

const button = Button({
    header,
    resultScreen,
    initialScreen,
    modalScreen,
    playerScore,
    machineScore,
    rockInARowCount,
    isRockClicked,
    isPaperClicked,
    isScissorsClicked,
    modalCard
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

btnReset.addEventListener('click', button.resetScore);
btnTryAgain.addEventListener('click', button.handleTryAgainClick);
btnRules.addEventListener('click', button.handleRulesClick);
btnCloseModal.addEventListener('click', button.handleCloseModal);
window.addEventListener('keydown', button.handleKeydown)
modalScreen.addEventListener('click', button.handleCloseModalOutCard)
btnRockChoice.addEventListener('click', choice.checkRockClicked);
btnPaperChoice.addEventListener('click', choice.checkPaperClicked);
btnScissorsChoice.addEventListener('click', choice.checkScissorsClicked);
buttons.addEventListener('mouseover', () => {subtitles.classList.add('show')})
buttons.addEventListener('mouseleave', () => {subtitles.classList.remove('show')})


