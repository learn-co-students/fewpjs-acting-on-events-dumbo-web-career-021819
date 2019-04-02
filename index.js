let dodger = document.querySelector('#dodger')
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    moveDodgerLeft();
  }
  
  if (event.key === 'ArrowRight') {
    moveDodgerRight();
  }
})

function moveDodgerRight() {
  let position = parseInt(dodger.style.left)
  if (position <= 360) {
    position++
    dodger.style.left = `${position}px`
  }
}

function moveDodgerLeft() {
  let position = parseInt(dodger.style.left)
  if (position > 0) {
    position--
    dodger.style.left = `${position}px`
  }
}