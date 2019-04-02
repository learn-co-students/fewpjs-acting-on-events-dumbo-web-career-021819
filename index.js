// Your code here

 
console.log("loaded") 
let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers);
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace("px", "");
  var left = parseInt(leftNumbers);
 
  if (left > 0) {
    dodger.style.left = `${left + 1}px`;
  }
}





// document.addEventListener("keydown", function(e) {
//   if (e.key === "ArrowLeft") {
//     let leftNumbers = dodger.style.left.replace("px", "");
//     let left = parseInt(leftNumbers, 10);
//     dodger.style.left = `${left - 10}px`;
//     console.log("left")
//   }
//   else if (e.key === "ArrowRight") {
//   	let rightNumbers = dodger.style.left.replace("px", "");
//     let right = parseInt(rightNumbers, 10);
//     dodger.style.left = `${right + 10}px`;
//     console.log("right")

//   }
// });

// })
