// Your code here

const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
    var leftNumbers = dodger.style.left.replace("px", ""); // turning the return into a string with just the number
    var left = parseInt(leftNumbers, 10); // turning the string into an integer
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`; // as long as the position is greater than zero, set the new position equal to one spot over
    }
  }

  function moveDodgerRight() {
      var rightNumbers = dodger.style.left.replace("px", "")
      var right = parseInt(rightNumbers, 10)

      if (right > 0) {
          dodger.style.left = `${right + 1}px`;
      }
  }

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }

    // if (e.key === "ArrowRight") {
    //     moveDodgerRight
    // }
  });

  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });