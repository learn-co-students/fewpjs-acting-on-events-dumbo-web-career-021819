// Your code here

let dodger = document.querySelector('#dodger');

function moveDodgerLeft() {
  let left = dodger.style.left;
  let left_int = parseInt(left);
  left_int -= 10;
  dodger.style.left = `${left_int}px`;
};

function moveDodgerRight() {
  let left = dodger.style.left;
  let left_int = parseInt(left);
  left_int += 10;
  dodger.style.left = `${left_int}px`;
};
