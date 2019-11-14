function isValidTransition(playerSymbol, initialBoard, endBoard) {
  const flatInitialBoard = initialBoard.flat()
  const flatEndBoard = endBoard.flat()
  const differenceFlatArray = flatInitialBoard.map((element, index) => {
    if (element === flatEndBoard[index]) {
      return 0
    }
    return 1
  })
  const totalChanges = differenceFlatArray.reduce((a,b) => a+b, 0)
  if (totalChanges > 1 || totalChanges === 0) {
    return false
  }
  const indexOfChange = totalChanges.indexOf(1)
  if ((flatInitialBoard[indexOfChange] === null) && (flatEndBoard[indexOfChange] === playerSymbol)) {
    return true
  }
  return false
}
module.exports = {isValidTransition}