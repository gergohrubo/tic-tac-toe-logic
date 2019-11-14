const {isValidTransition} = require('./valid-transition')
const {gameIsTie} = require('./game-is-tie')
const {isValidBoard} = require('./is-valid')
const {calculateWinner} = require('./calculate-winner')

class Game {
  constructor() {
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ],
    this.isValidBoard = isValidBoard
  }
}

const validBoard = [
  ['x', null, null],
  [null, 'o', null],
  [null, null, null]
]

const newGame = new Game()
console.log(newGame.isValidBoard(validBoard))