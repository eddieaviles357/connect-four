let playerDisplay = document.querySelector('.currentPlayerDisplay');
playerDisplay.classList.add('choosen-player1');
let restartBtn = document.getElementById('restartBtn');
let board = document.querySelector('.connect-four-container');
let playerText = document.querySelector('.span-player');
let columns = document.querySelectorAll('.column');
let currentPlayer = 'red';

let columnsBoard = [
    [], // row1
    [], // row2
    [], // row3
    [], // row4
    [], // row5
    [], // row6
    [], // row7
];

let rowsBoard = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
]

const connectGameHandler = (e) => {
    let target = e.target;
    let parent = target.parentElement;

    if(restartBtn.style.visibility === '' || restartBtn.style.visibility === 'hidden') {
        restartBtn.style.visibility = 'visible';
    }
    
    // check columns 1
    if(parent.classList[0] === 'column-1') {
        let col1 = columnsBoard[0];
        displayPlayerColor(parent, col1.length);
        checkCol(col1, 1);
    }
    // check columns 2
    if(parent.classList[0] === 'column-2') {
        let col2 = columnsBoard[1];
        displayPlayerColor(parent, col2.length);
        checkCol(col2, 2);
    }
    // check columns 3
    if(parent.classList[0] === 'column-3') {
        let col3 = columnsBoard[2];
        displayPlayerColor(parent, col3.length);
        checkCol(col3, 3);
    }
    // check columns 4
    if(parent.classList[0] === 'column-4') {
        let col4 = columnsBoard[3];
        displayPlayerColor(parent, col4.length);
        checkCol(col4, 4);
    }
    // check columns 5
    if(parent.classList[0] === 'column-5') {
        let col5 = columnsBoard[4];
        displayPlayerColor(parent, col5.length);
        checkCol(col5, 5);
    }
    // check columns 6
    if(parent.classList[0] === 'column-6') {
        let col6 = columnsBoard[5];
        displayPlayerColor(parent, col6.length);
        checkCol(col6, 6);
    }
    // check columns 7
    if(parent.classList[0] === 'column-7') {
        let col7 = columnsBoard[6];
        displayPlayerColor(parent, col7.length);
        checkCol(col7, 7);
    }
    // diagonal right
    if( columnsBoard[0].length >=3 &&
        columnsBoard[1].length >=4 &&
        columnsBoard[2].length >=5 &&
        columnsBoard[3].length >=6) {
        let diagonalRight = [
            columnsBoard[0][2],
            columnsBoard[1][3],
            columnsBoard[2][4],
            columnsBoard[3][5]
        ]
        check(diagonalRight);
    }

    if( columnsBoard[0].length >=2 &&
        columnsBoard[1].length >=3 &&
        columnsBoard[2].length >=4 &&
        columnsBoard[3].length >=5) {
        let diagonalRight = [
            columnsBoard[0][1],
            columnsBoard[1][2],
            columnsBoard[2][3],
            columnsBoard[3][4],
            columnsBoard[4][5],
        ]
        check(diagonalRight);
    }

    // middle
    if( columnsBoard[0].length >=1 &&
        columnsBoard[1].length >=2 &&
        columnsBoard[2].length >=3 &&
        columnsBoard[3].length >=4) {
        let diagonalRight = [
            columnsBoard[0][0],
            columnsBoard[1][1],
            columnsBoard[2][2],
            columnsBoard[3][3],
            columnsBoard[4][4],
            columnsBoard[5][5]
        ]
        check(diagonalRight);
    }
    if( columnsBoard[1].length >=1 &&
        columnsBoard[2].length >=2 &&
        columnsBoard[3].length >=3 &&
        columnsBoard[4].length >=4) {
        let diagonalRight = [
            columnsBoard[1][0],
            columnsBoard[2][1],
            columnsBoard[3][2],
            columnsBoard[4][3],
            columnsBoard[5][4],
            columnsBoard[6][5]
        ]
        check(diagonalRight);
    }
    if( columnsBoard[2].length >=1 &&
        columnsBoard[3].length >=2 &&
        columnsBoard[4].length >=3 &&
        columnsBoard[5].length >=4) {
        let diagonalRight = [
            columnsBoard[2][0],
            columnsBoard[3][1],
            columnsBoard[4][2],
            columnsBoard[5][3],
            columnsBoard[6][4],
        ]
        check(diagonalRight);
    }
    if( columnsBoard[3].length >=1 &&
        columnsBoard[4].length >=2 &&
        columnsBoard[5].length >=3 &&
        columnsBoard[6].length >=4) {
        let diagonalRight = [
            columnsBoard[3][0],
            columnsBoard[4][1],
            columnsBoard[5][2],
            columnsBoard[6][3],
        ]
        check(diagonalRight);
    }
    /******************************************** */
    // diagonal left
    if( columnsBoard[3].length >=1 &&
        columnsBoard[2].length >=2 &&
        columnsBoard[1].length >=3 &&
        columnsBoard[0].length >=4) {
        let diagonalLeft = [
            columnsBoard[3][0],
            columnsBoard[2][1],
            columnsBoard[1][2],
            columnsBoard[0][3],
        ]
        check(diagonalLeft);
    }
    if( columnsBoard[4].length >=1 &&
        columnsBoard[3].length >=2 &&
        columnsBoard[2].length >=3 &&
        columnsBoard[1].length >=4) {
        let diagonalLeft = [
            columnsBoard[4][0],
            columnsBoard[3][1],
            columnsBoard[2][2],
            columnsBoard[1][3],
            columnsBoard[0][4],
        ]
        check(diagonalLeft);
    }
    if( columnsBoard[5].length >=1 &&
        columnsBoard[4].length >=2 &&
        columnsBoard[3].length >=3 &&
        columnsBoard[2].length >=4) {
        let diagonalLeft = [
            columnsBoard[5][0],
            columnsBoard[4][1],
            columnsBoard[3][2],
            columnsBoard[2][3],
            columnsBoard[1][4],
            columnsBoard[0][5],
        ]
        check(diagonalLeft);
    }
    //middle
    if( columnsBoard[6].length >=1 &&
        columnsBoard[5].length >=2 &&
        columnsBoard[4].length >=3 &&
        columnsBoard[3].length >=4) {
        let diagonalLeft = [
            columnsBoard[6][0],
            columnsBoard[5][1],
            columnsBoard[4][2],
            columnsBoard[3][3],
            columnsBoard[2][4],
            columnsBoard[1][5],
        ]
        check(diagonalLeft);
    }
    if( columnsBoard[6].length >=1 &&
        columnsBoard[5].length >=2 &&
        columnsBoard[4].length >=3 &&
        columnsBoard[3].length >=4) {
        let diagonalLeft = [
            columnsBoard[6][1],
            columnsBoard[5][2],
            columnsBoard[4][3],
            columnsBoard[3][4],
            columnsBoard[2][5],
        ]
        check(diagonalLeft);
    }
    if( columnsBoard[6].length >= 2 &&
        columnsBoard[5].length >= 3 &&
        columnsBoard[4].length >= 4 &&
        columnsBoard[3].length >= 5) {
        let diagonalLeft = [
            columnsBoard[6][1],
            columnsBoard[5][2],
            columnsBoard[4][3],
            columnsBoard[3][4],
            columnsBoard[2][5],
        ]
        check(diagonalLeft);
    }
    if( columnsBoard[6].length >= 3 &&
        columnsBoard[5].length >= 4 &&
        columnsBoard[4].length >= 5 &&
        columnsBoard[3].length >= 6) {
        let diagonalLeft = [
            columnsBoard[6][2],
            columnsBoard[5][3],
            columnsBoard[4][4],
            columnsBoard[3][5],
        ]
        check(diagonalLeft);
    }

    // check rows
    rowsBoard.forEach(rowsArr => check(rowsArr))
}
//events
board.addEventListener('click', connectGameHandler);
restartBtn.addEventListener('click', restartHandler);