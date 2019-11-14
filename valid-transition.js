function isValidTransition(playerSymbol, initialBoard, endBoard) {
  const flatInitialBoard = initialBoard.flat()
  const flatEndBoard = endBoard.flat()
  const numberOfX = countOccurrences('x', flatInitialBoard)
  const numberOfO = countOccurrences('o', flatInitialBoard)
  switch (numberOfX - numberOfO) {
    case 0:
      if (playerSymbol !== 'x') {return false}
      break
    case -1:
      return false
    case 1:
      if (playerSymbol !== 'o') {return false}
      break
    default:
      break
  }
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
  console.log(differenceFlatArray)
  const indexOfChange = differenceFlatArray.indexOf(1)
  if ((flatInitialBoard[indexOfChange] === null) && (flatEndBoard[indexOfChange] === playerSymbol)) {
    return true
  }
  return false
}

function countOccurrences(item, array) {
  return array.reduce((a,b) => {
    if (b === item) {
      b = 1
    } else {
      b = 0
    }
    return a+b
  }, 0)
}
module.exports = {isValidTransition}