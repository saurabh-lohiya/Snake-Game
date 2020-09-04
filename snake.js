// import { log } from "util";

import { getInputDirection } from './input.js'
export const snakeSpeed = 5
const snakeBody = [{ x: 11, y: 11 }]
let newSegment = 0

export function update () {
  // Adds a segment
  addSegments()
  const inputDirection = getInputDirection()
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] }
  }
  snakeBody[0].y += inputDirection.y
  snakeBody[0].x += inputDirection.x
}

export function draw (gameBoard) {
  snakeBody.forEach((segment, index) => {
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = segment.y
    snakeElement.style.gridColumnStart = segment.x
    snakeElement.classList.add('snake')
    gameBoard.appendChild(snakeElement)
    // Red headed snake
    if (index === 0) {
      snakeElement.style.background = 'red'
    }
  })
}

export function expandSnake (amount) {
  newSegment += amount
}

export function onSnake (position, { ignoreHead = false } = {}) {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false
    return equalPositions(position, segment)
  })
}

export function getSnakehead () {
  // Returns the position of snake's head
  return snakeBody[0]
}

export function snakeIntersection () {
  // Checks if the snake bite's itself
  return onSnake(snakeBody[0], { ignoreHead: true })
}

function equalPositions (pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments () {
  // Add a block to the snake's tail
  for (let i = 0; i < newSegment; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
  }
  //   Run the above block of code only once
  newSegment = 0
}
