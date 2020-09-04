import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

// get initial random food position
let foodPosition = getRandomFoodPosition()

// Expands snake with that amount every time it grab's a bite
const expansionRate = 1

// Updates the food position as the food is positioned correctly
export function update () {
  if (onSnake(foodPosition)) {
    // Expands the snake when it eats the food
    expandSnake(expansionRate)

    // again generate new food position
    foodPosition = getRandomFoodPosition()
  }
}

export function draw (gameBoard) {
  // Randomly draw a food element on game-board
  const foodElement = document.createElement('div')
  foodElement.style.gridColumnStart = foodPosition.x
  foodElement.style.gridRowStart = foodPosition.y
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)
}

// get initial random food position
function getRandomFoodPosition () {
  let newFoodPosition

  // checks whether the food position is null or on a current snake position
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition()
  }
  return newFoodPosition
}
