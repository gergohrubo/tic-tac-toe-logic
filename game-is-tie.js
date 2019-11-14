const {calculateWinner} = require('./calculate-winner')

function gameIsTie(board) {
  const filledWithX = fillUpWithX(board)
  const filledWithO = fillUpWithO(board)
  if ((calculateWinner(filledWithX) === null) || (calculateWinner(filledWithO) === null)) {
    return true
  }
  return false
}

function fillUpWithX(board) {
  return board.map(subBoard => {
    return subBoard.map(element => {
      if (element === null) {
        return 'x'
      }
      return element
    })
  })
}

function fillUpWithO(board) {
  return board.map(subBoard => {
    return subBoard.map(element => {
      if (element === null) {
        return 'o'
      }
      return element
    })
  })
}

module.exports = {gameIsTie}