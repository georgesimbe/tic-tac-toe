
let board = document.querySelectorAll('.box')
let turn = true;
let counter = 0;
let name1;
let name2;
class players {
  constructor(id, name, playerStatus, color, wins, loss, draws) {
    this.id = id;
    this.name = name;
    this.playerStatus = playerStatus;
    this.color = color;
    this.wins = wins;
    this.loss = loss
    this.draw = draws;
  }
}
document.querySelector('.dashBoard').textContent = 'Hello Welcome'
// if (name1 === null || name2 === null) {
//   name1 = document.getElementById("player1")
//   name1.addEventListener('click', () =>
//     document.getElementById("player1").style.display = 'none')
//   name2 = document.getElementById("player2").
//     name2.addEventListener('click', () =>
//       document.getElementById("player2").style.display = 'none')
// }
let player1 = new players('X', name1, 'player1', 'red', 0, 0, 0)
let player2 = new players('O', name2, 'player2', 'green', 0, 0, 0)
game(board)
//restart button
document.querySelector(".restart").addEventListener('click', restart)
function restart() {
  counter = 0
  turn = true
  for (let i = 0; i < board.length; i++) {
    if (board[i].classList.contains('player1')) {
      board[i].classList.remove('player1')
      board[i].removeAttribute('style');
    }
    else if (board[i].classList.contains('player2')) {
      board[i].classList.remove('player2')
      board[i].removeAttribute('style');
    }
  }
  // counter = 0
}
document.querySelector(".endGame").addEventListener('click', endGame)
function endGame() {
  restart()
  document.querySelectorAll('td')[1].textContent = ""
  document.querySelectorAll('td')[2].textContent = 0
  document.querySelectorAll('td')[3].textContent = 0
  // document.querySelectorAll('td')[4].textContent = 0

  // document.querySelectorAll('td')[6].textContent = ""
  document.querySelectorAll('td')[5].textContent = 0
  document.querySelectorAll('td')[6].textContent = 0
  document.querySelectorAll('td')[7].textContent = 0
  player1 = {}
  player2 = {}


  // document.querySelectorAll('td')[1].textContent = player1.wins
  // document.querySelectorAll('td')[2].textContent = player1.loss
  // document.querySelectorAll('td')[3].textContent = player1.draw

  // // document.querySelectorAll('td')[6].textContent = player2.name
  // document.querySelectorAll('td')[5].textContent = player2.wins
  // document.querySelectorAll('td')[6].textContent = player2.loss
  // document.querySelectorAll('td')[7].textContent = player2.draw
}

function game(board) {
  for (let i = 0; i < board.length; i++) {
    board[i].addEventListener('click', (event) => {
      if (!board[i].getAttribute('style') == null || !board[i].getAttribute('style') == "") {
        document.querySelector('.dashBoard').textContent = 'Cannot Add to Square with a color!'
        if (counter == 9) {
          draw()
        }
      }
      else if (board[i].getAttribute('style') == null || board[i].getAttribute('style') == "") {
        if (turn) {
          event.target.classList.add(player1.playerStatus)
          event.target.style.backgroundImage = "url('icons8-x-100.png')";
          event.target.style.backgroundRepeat = "no-repeat";
          counter++
          if (winner(board, turn ? player1.playerStatus : player2.playerStatus)) {
          } else {
            turn = false
          }

        } else {
          event.target.classList.add(player2.playerStatus)
          event.target.style.backgroundImage = "url('icons8-o-100.png')";
          event.target.style.backgroundRepeat = "no-repeat";
          counter++
          // console.log(counter)
          if (winner(board, turn ? player1.playerStatus : player2.playerStatus)) {
          } else {
            turn = true
          }

        }
        if (counter == 9) {
          draw()
        }

      }
    })
  }
}
function score() {
  let winner = turn ? player1 : player2
  let loser = !turn ? player1 : player2
  document.querySelector('.dashBoard').textContent = winner.playerStatus + ' Wins'
  winner.wins++
  loser.loss++
  restart()
  // document.querySelectorAll('td')[1].textContent = player1.name
  document.querySelectorAll('td')[1].textContent = player1.wins
  document.querySelectorAll('td')[2].textContent = player1.loss
  document.querySelectorAll('td')[3].textContent = player1.draw

  // document.querySelectorAll('td')[6].textContent = player2.name
  document.querySelectorAll('td')[5].textContent = player2.wins
  document.querySelectorAll('td')[6].textContent = player2.loss
  document.querySelectorAll('td')[7].textContent = player2.draw

}
function draw() {
  if (counter === 9) {
    document.querySelector('.dashBoard').textContent = 'Draw, Well down both players!'
    player1.draw++
    player2.draw++
    document.querySelectorAll('td')[3].textContent = player1.draw
    document.querySelectorAll('td')[7].textContent = player2.draw
    // document.querySelectorAll('td')[9].textContent = player2.draw
    restart()
  }
  return false
}

function winner(board, playerStatus) {
  // row 1
  if (board[0].classList.contains(playerStatus) && board[1].classList.contains(playerStatus) && board[2].classList.contains(playerStatus)) {
    score()
    return true
  }
  //row 2
  else if (board[3].classList.contains(playerStatus) && board[4].classList.contains(playerStatus) && board[5].classList.contains(playerStatus)) {
    score()
    return true
  }
  //row 3
  else if (board[6].classList.contains(playerStatus) && board[7].classList.contains(playerStatus) && board[8].classList.contains(playerStatus)) {
    score()
    return true
  }
  //column 1
  else if (board[0].classList.contains(playerStatus) && board[3].classList.contains(playerStatus) && board[6].classList.contains(playerStatus)) {
    score()
    return true
  }
  //column 2
  else if (board[1].classList.contains(playerStatus) && board[4].classList.contains(playerStatus) && board[7].classList.contains(playerStatus)) {
    score()
    return true
  }
  //column 3
  else if (board[2].classList.contains(playerStatus) && board[5].classList.contains(playerStatus) && board[8].classList.contains(playerStatus)) {
    score()
    return true
  }
  //diagonal right to left 
  else if (board[0].classList.contains(playerStatus) && board[4].classList.contains(playerStatus) && board[8].classList.contains(playerStatus)) {
    score()
    return true
  }
  // left to right
  else if (board[2].classList.contains(playerStatus) && board[4].classList.contains(playerStatus) && board[6].classList.contains(playerStatus)) {
    score()
    return true
    // draw
  }
}

