let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

// checks for arrow movement
window.addEventListener('keydown', (e) => {
  switch (e.keyCode) {
    case 38:
      if (lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y: -1 }
      break
    case 40:
      if (lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y: 1 }
      break
    case 37:
      if (lastInputDirection.x !== 0) break
      inputDirection = { x: -1, y: 0 }
      break
    case 39:
      if (lastInputDirection.x !== 0) break
      inputDirection = { x: 1, y: 0 }
      break
  }
})

// Updates the snakes direction of movement
export function getInputDirection () {
  lastInputDirection = inputDirection
  return inputDirection
}
