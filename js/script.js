
let board = document.querySelectorAll('.box')


let turn = true;

function game(board) {
    for (let i = 0; i < board.length; i++) {
        board[i].addEventListener('click', (event) => {
            if (turn) {
                event.target.classList.add('player1')
                event.target.style.backgroundColor = 'red'
                turn = false
            } else {
                event.target.classList.add('player1')
                event.target.style.backgroundColor = 'green'
                turn = true
            }
        })
    }
}
game(board)

