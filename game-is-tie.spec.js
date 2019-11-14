const {gameIsTie} = require('./game-is-tie')

test('The game is a tie', () => {
  const board = [
    ['o', 'x', 'x'],
    ['x', 'x', 'o'],
    ['o', 'o', 'x']
  ]
  expect(gameIsTie(board)).toBe(true)
})

test('X wins', () => {
  const board = [
    ['o', 'x', 'x'],
    ['x', 'x', 'o'],
    ['x', 'o', 'x']
  ]
  expect(gameIsTie(board)).toBe(false)
})