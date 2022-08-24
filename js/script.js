//Cops and jail bird 

let board = document.querySelectorAll('.box')

class player {
    constructor(player, playerChar) {
        this.player = player;
        this.playerChar = playerChar;
    }
}
function playerMoves(symbol) {
    if (symbol === 'X') {
        console.log('Player 1 please make a turn')
        return board.addEventListener('click', (event) => event.target.style.backgroundColor = 'red')

    } else if (symbol === 'O') {
        console.log('Player 2 please make a turn')
        return board.addEventListener('click', (event) => event.target.style.backgroundColor = 'green')
    }
}

let player1 = new player('John', 'X')
let player2 = new player('Sam', 'O')
let counter = 9
let turn = true;

function game(player, turn) {

    for (let i = 0; counter > i; i++) {
        board[i].addEventListener('click', function (event) {
            let box = event.target
            if (i % 2 === 0) {
                console.log('Player 1' + box)
                // console.log(playerMoves(player1))
            }
            else {
                console.log('Player 2' + box)
                // console.log(playerMoves(player2))
            }
        })
    }
}

// // while (counter < 9) {
// if (counter % 2 === 0) {
//     playerMoves(player1)
//     console.log('Player1')
// }
// else {
//     playerMoves(player1)
//     console.log('Player2')
// }
// counter++;
// // }
// }
// function run(counter) {

// }


game(player1, board)

