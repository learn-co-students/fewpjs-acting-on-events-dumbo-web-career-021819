document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft()
    }
    else if (e.key === 'ArrowRight') {
        moveDodgerRight()
    }
})

function moveDodgerLeft() {
    const dodger = document.getElementById('dodger')
    const styleLeft = dodger.style.left
    const stringNumber = styleLeft.replace("px","")
    const left = parseInt(stringNumber, 10)
    dodger.style.left = `${left - 1}px`
}

function moveDodgerRight() {
    const dodger = document.getElementById('dodger')
    const styleLeft = dodger.style.left
    const stringNumber = styleLeft.replace("px","")
    const left = parseInt(stringNumber, 10)
    dodger.style.left = `${left + 1}px`
}