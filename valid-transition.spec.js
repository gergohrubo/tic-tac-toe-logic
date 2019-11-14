const {isValidTransition} = require('./valid-transition')

test('This is a valid move', () => {
  const initialBoard = [
    [null, 'x', 'x'],
    [null, 'o', 'o'],
    ['x', 'o', null]
  ]
  const endBoard = [
    [null, 'x', 'x'],
    [null, 'o', 'o'],
    ['x', 'o', 'x']
  ]
  expect(isValidTransition('x',initialBoard,endBoard)).toBe(true)
})

test('Not a valid move because it happened from a non-null initial position', () => {
  const initialBoard = [
    [null, 'x', 'x'],
    [null, null, 'o'],
    ['x', 'o', 'o']
  ]
  const endBoard = [
    [null, 'x', 'x'],
    [null, null, 'o'],
    ['x', 'o', 'x']
  ]
  expect(isValidTransition('x',initialBoard,endBoard)).toBe(false)
})

test('Not a valid move because it was the other player\'s turn', () => {
  const initialBoard = [
    [null, 'x', 'x'],
    [null, null, 'o'],
    ['x', 'o', 'o']
  ]
  const endBoard = [
    [null, 'x', 'x'],
    [null, 'o', 'o'],
    ['x', 'o', 'o']
  ]
  expect(isValidTransition('o',initialBoard,endBoard)).toBe(false)
})

test('Not a valid move because it was the other player\'s turn', () => {
  const initialBoard = [
    [null, 'x', 'x'],
    ['x', null, 'o'],
    ['x', 'o', 'o']
  ]
  const endBoard = [
    [null, 'x', 'x'],
    ['x', 'x', 'o'],
    ['x', 'o', 'o']
  ]
  expect(isValidTransition('x',initialBoard,endBoard)).toBe(false)
})

test('Not a valid move because the passed in symbol is not the same as the changed symbol', () => {
  const initialBoard = [
    [null, 'x', 'x'],
    ['x', null, 'o'],
    ['x', 'o', 'o']
  ]
  const endBoard = [
    [null, 'x', 'x'],
    ['x', 'o', 'o'],
    ['x', 'o', 'o']
  ]
  expect(isValidTransition('x',initialBoard,endBoard)).toBe(false)
})