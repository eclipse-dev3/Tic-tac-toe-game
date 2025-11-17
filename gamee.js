let buttons = document.querySelectorAll("button")
let reset = document.querySelector(".reset")
let msg = document.querySelector(".msg")

let turnX = true

let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6]
]

const showWinner = (winner) => {
    msg.classList.remove("hide")
    msg.innerHTML = `Winner is ${winner}`
    disablebuttons()
}

const resetGame = () => {
    reset.addEventListener("click", () => {
        enablebuttons()
        turnX = true
        msg.classList.add("hide")
    })
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (turnX) {
            button.innerText = "X"
            turnX = false;
        }
        else {
            button.innerText = "O"
            turnX = true;
        }
        button.disabled = true
        checkWinner()
    })
})

const disablebuttons = () => {
    for (const button of buttons) {
        button.disabled = true
    }
}

const enablebuttons = () => {
    for (const button of buttons) {
        button.disabled = false
        button.innerText = ""
    }
}
const checkWinner = () => {
    for (const pattern of winPattern) {
        let pos1val = buttons[pattern[0]].innerText
        let pos2val = buttons[pattern[1]].innerText
        let pos3val = buttons[pattern[2]].innerText

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val)
            }
        }
    }
}
resetGame()