function horizontalWinner(board) {
  const isThereWinner = board.reduce((subBoardPrev,subBoardNext) => {
    const subBoardResult = subBoardNext.reduce((elementA,elementB) =>{
      if (elementA === elementB) {
        return elementA
      }
      else {
        return false
      }
    })
    return (subBoardResult || subBoardPrev)
  }, false)
  if (!isThereWinner) {
    return null
  }
  return isThereWinner
}

function checkDiagonalResult(row) {
  return row.reduce((a,b) => {
    if(a === b) {
      return a
    } else {
      return null
    }
  })
}

function calculateWinner(board) {
  if (horizontalWinner(board) === null) {
    const onTheSide = [0, 1, 2].map(n => board.map(row => row[n]))
    if (horizontalWinner(onTheSide) === null) {
      const firstDiagonal = [0,1,2].map(n=> board[n][n]) 
      if (checkDiagonalResult(firstDiagonal) === null) {
        const secondDiagonal = [0,1,2].map(n=> board[n][2-n])
        return checkDiagonalResult(secondDiagonal)
      }
      return checkDiagonalResult(firstDiagonal)
    }
    return horizontalWinner(onTheSide)
  }
  return horizontalWinner(board)
}

module.exports = {calculateWinner}