
function addUp (num) {
  if (num === 0) {
    return 0;
  } else {
    return(num + addUp(num - 1));
  }
}
console.log(addUp(4)); //Returns '10'