describe("helper functions", function() {
    beforeEach(() => {
        let playerDisplay = document.querySelector('.currentPlayerDisplay');
        playerDisplay.classList.add('choosen-player1');
        let restartBtn = document.getElementById('restartBtn');
        let board = document.querySelector('.connect-four-container');
        let playerText = document.querySelector('.span-player');
        let columns = document.querySelectorAll('.column');
        let currentPlayer = 'red';

        let columnsBoard = [
            [0,0,0,0,0,0], // row1
            [0,0,0,0,0,0], // row2
            [0,0,0,0,0,0], // row3
            [0,0,0,0,0,0], // row4
            [0,0,0,0,0,0], // row5
            [0,0,0,0,0,0], // row6
            [0,0,0,0,0,0], // row7
        ];

        let rowsBoard = [
            [1,2,1,2,1,2,1],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
        ]
    })

    it('should toggle player from red to yellow and vice versa', () => {
        togglePlayer();
        expect(currentPlayer).toEqual('yellow');
    })
    it('insert rowsBoard Array', () => {
        insertRow(rowsBoard[1], 0);
        console.log(rowsBoard)
        expect(rowsBoard[1][0]).toEqual(1);
    })

    afterEach(() => {
        playerDisplay = null;
        restartBtn = null;
        board = null
        playerText = null
        columns = null
        currentPlayer = 'red';

        columnsBoard = [
            [], // row1
            [], // row2
            [], // row3
            [], // row4
            [], // row5
            [], // row6
            [], // row7
        ];

        rowsBoard = [
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
        ]
    })
})