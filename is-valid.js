function isValidBoard(board) {
  const symbols = [ 'x', 'o', null ]
  if ((board.length === 3) && board.every(subBoard => subBoard.length === 3)) {
    return board.reduce((subBoardPrev,subBoardNext) => {
      return subBoardNext.reduce((elementA, elementB) => {
        return ((symbols.includes(elementA) || true) && symbols.includes(elementB))
      })
    },'o')
  }
  return false
}
module.exports = {isValidBoard}