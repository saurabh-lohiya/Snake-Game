const gridSize = 21

export function randomGridPosition () {
  return {
    x: Math.ceil(Math.random() * gridSize),
    y: Math.ceil(Math.random() * gridSize)
  }
}

export function outsideGrid (position) {
  return (
    position.x < 1 ||
    position.x > gridSize ||
    position.y < 1 ||
    position.y > gridSize
  )
}
