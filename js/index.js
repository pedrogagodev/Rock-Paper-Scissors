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
    playerScore,
    machineScore,
    rockInARowCount,
    machineChoice,
    isPaperClicked,
    isRockClicked,
    isScissorsClicked,
    playerChoice,
    previousChoice
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

btnReset.addEventListener('click', button.resetScore);
btnTryAgain.addEventListener('click', button.handleTryAgainClick);
btnRules.addEventListener('click', button.handleRulesClick);
btnCloseModal.addEventListener('click', button.handleCloseModal);
window.addEventListener('keydown', button.handleKeydown)
btnRockChoice.addEventListener('click', choice.checkRockClicked);
btnPaperChoice.addEventListener('click', choice.checkPaperClicked);
btnScissorsChoice.addEventListener('click', choice.checkScissorsClicked);

