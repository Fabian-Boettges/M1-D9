
window.onload = function() {
    createCells()
}

// create 76 board cells programmatically 
let bingoData = { }

const createCells = function() {

    let bingoBoardNode = document.getElementById("bingo-board")

    let cellsInTheBoard = 76

    for (let cellNumber = 1; cellNumber <= cellsInTheBoard; cellNumber ++) {

        let newCellNode = document.createElement("div")
        newCellNode.innerText = cellNumber
        newCellNode.classList.add("cell")

        newCellNode.onclick = selectCell

        bingoBoardNode.appendChild(newCellNode)
    }
}

// this function randomizes a number between 1 and 76

const generateRandomNumber = function(min, max) {
    
    let randomNumber = Math.floor(Math.random() * (max - min +1) + min)
    return randomNumber;
}

const generator = generateRandomNumber(1,76)

console.log(generator)