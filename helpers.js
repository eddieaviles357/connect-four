
const restartHandler = ele => { 
    togglePlayer();
    resetGame();
}

const clearBoardPieces = () => {
    for(rows of [...columns]) {
        for(children of [...rows.children]) {
            children.classList.remove('choosen-player2', 'choosen-player1');
        }
    }
};

const displayPlayerColor = (parent, length) => {
    if(parent.children[0 + length] !== undefined) {
        if(currentPlayer === 'red') {
            parent.children[0 + length].classList.add('choosen-player1');
        } else {
            parent.children[0 + length].classList.add('choosen-player2');
        }
    }
}

// check
const togglePlayer = () => {
    currentPlayer = currentPlayer === 'red' ? 'yellow' : 'red';
    if(currentPlayer === 'red') {
        playerDisplay.classList.remove('choosen-player2');
        playerDisplay.classList.add('choosen-player1');
    } else {
        playerDisplay.classList.remove('choosen-player1');
        playerDisplay.classList.add('choosen-player2');
    }
}

const resetGame = () => {
    columnsBoard = [[],[],[],[],[],[],[]];
    rowsBoard = [
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0],
        ]
    playerText.style.display = 'block';
    restartBtn.style.visibility = 'hidden';
    currentPlayer = 'red';
    playerDisplay.classList.remove('choosen-player2');
    playerDisplay.classList.add('choosen-player1');
    clearBoardPieces();
    board.addEventListener('click', connectGameHandler);
}

// checks if player red or yellow won
const check = arr => {
    let redCounter = 0;
    let yellowCounter = 0;
    if(arr.length >= 4) {
        arr.forEach(num => {
            if(num === 1) {
                yellowCounter = 0;
                redCounter++;
                if(redCounter === 4) {
                    playerText.style.display = 'none';
                    restartBtn.style.visibility = 'visible';
                    currentPlayer = 'red';
            
                    setTimeout(alert, 50, 'red wins!');
                    board.removeEventListener('click', connectGameHandler);
                };
            } else if(num === 2) {
                redCounter = 0;
                yellowCounter++;
                if(yellowCounter === 4) {
                    playerText.style.display = 'none';
                    restartBtn.style.visibility = 'visible';
                    currentPlayer = 'red';
            
                    setTimeout(alert, 50, 'yellow wins!');
                    board.removeEventListener('click', connectGameHandler);
                };
            }
            else { // for rows that have undefined in array
                redCounter = 0;
                yellowCounter = 0;
            }
        })
    }
}

const insertRow = (rowsBoardArr, idx) => {
    rowsBoardArr.splice(idx, 1, currentPlayer === 'red' ? 1 : 2, );
}

// check columns if player red or yellow won
const checkCol = (col, num) => {
    if(col.length < 6 && rowsBoard.length < 7) {
        // inserts to rows
        insertRow(rowsBoard[col.length], num -1);
        // inserts to columns
        col.push(currentPlayer === 'red' ? 1 : 2);
        togglePlayer();
        check(col);
    }
}