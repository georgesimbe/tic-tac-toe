
let board = document.querySelectorAll('.box')
let turn = true;
function game(board) {
  for (let i = 0; i < board.length; i++) {
    board[i].addEventListener('click', (event) => {
      if (!board[i].getAttribute("style") == null || board[i].getAttribute("style") == "") {
        console.log('Square is already taken')
      } else if (board[i].getAttribute("style") == null || board[i].getAttribute("style") == "") {
        if (turn) {
          event.target.classList.add('player1')
          event.target.style.backgroundColor = 'red'
          turn = false
        } else {
          event.target.classList.add('player2')
          event.target.style.backgroundColor = 'green'
          turn = true
        }
        if (winner(board, turn ? 'player1' : 'player2')) {
          i = board.length
        }
        // // if (counter == 9) {
        // //   return 'Draw'
        // // }

      }
    })
    
  }
    let counter = 0
    // // draw
        let draw = false;
        for (let i = 0; i < board.length; i++) {
          if (board[i].classList.contains(turn ? 'player1' : 'player2')) {
            draw = null
          } else if (!board[i].classList.contains(turn ? 'player1' : 'player2')) {
            draw = false
          }
        }
        // console.log(draw)

}
function winner(board, player) {
  // row 1
  if (board[0].classList.contains(player) && board[1].classList.contains(player) && board[2].classList.contains(player)) {
    console.log(player + ' Wins')
    return true
  }
  //row 2
  else if (board[3].classList.contains(player) && board[4].classList.contains(player) && board[5].classList.contains(player)) {
    console.log(player + ' Wins')
    return true
  }
  //row 3
  else if (board[6].classList.contains(player) && board[7].classList.contains(player) && board[8].classList.contains(player)) {
    console.log(player + ' Wins')
    return true
  }
  //column 1
  else if (board[0].classList.contains(player) && board[3].classList.contains(player) && board[6].classList.contains(player)) {
    console.log(player + ' Wins')
    return true
  }
  //column 2
  else if (board[1].classList.contains(player) && board[4].classList.contains(player) && board[7].classList.contains(player)) {
    console.log(player + ' Wins')
    return true
  }
  //column 3
  else if (board[2].classList.contains(player) && board[5].classList.contains(player) && board[8].classList.contains(player)) {
    console.log(player + ' Wins')
    return true
  }
  //diagonal right to left 
  else if (board[0].classList.contains(player) && board[4].classList.contains(player) && board[8].classList.contains(player)) {
    console.log(player + ' Wins')
    return true
  }
  // left to right
  else if (board[2].classList.contains(player) && board[4].classList.contains(player) && board[6].classList.contains(player)) {
    console.log(player + ' Wins')
    return true
  }
}

game(board)


