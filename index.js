class Game {
  constructor() {
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  }
}

const board = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

const row = [1,2,3]

console.log(board.includes([1,2,3]))

// console.log([0, 1, 2].map(n => board.map(row => row[n])))
// console.log([0,1,2].map(n=> board[n][n]))
// console.log([0,1,2].map(n=> board[n][2-n]))

// console.log('a' === 'b' || 'a' ? 'true' : 'false')