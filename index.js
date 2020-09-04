import {
  snakeSpeed,
  update as updateSnake,
  draw as drawSnake,
  getSnakehead,
  snakeIntersection
} from './snake.js'

import { outsideGrid } from './grid.js'
import { update as updateFood, draw as drawFood } from './food.js'

let gameOver = false
let lastRenderTime = 0
const gameBoard = document.getElementById('board')
const popUpWindow = document.querySelector('[data-pop-up-window]')
const userNameForm = document.querySelector('[data-user-input-form]')
const userNameInput = document.querySelector('[data-user-name-input]')
const gameMessage = document.querySelector('[data-message]')
const warning = document.querySelector('[data-warning]')

// Asks for user name at the start of the Game
userNameForm.addEventListener('submit', e => {
  e.preventDefault()
  const userName = userNameInput.value
  if (userName == null || userName === '') {
    warning.classList.add('show')
    return
  }
  warning.classList.remove('show')
  popUpWindow.classList.remove('show')
  gameMessage.innerText = `Hello ${userName} let's see what you're made of!!`
})

function update () {
  // Happens every .2 seconds
  updateFood()
  updateSnake()
  checkDeath()
}

function draw () {
  // Happens every .2 seconds
  gameBoard.innerHTML = ''
  drawFood(gameBoard)
  drawSnake(gameBoard)
}

function main (currentTime) {
  if (gameOver) {
    if (confirm('You died, wanna play again?')) {
      window.location = '/'
    }
    return
  }

  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / snakeSpeed) return
  lastRenderTime = currentTime
  update()
  draw()
}

function checkDeath () {
  // Game's over if the snake run's into a wall or itself
  gameOver = outsideGrid(getSnakehead()) || snakeIntersection()
}
// repaint the window
window.requestAnimationFrame(main)
