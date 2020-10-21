
let newTot = 0;
function addUp (num) {
  if (num === 0) {
    return newTot;
  } else {
    newTot += num;
    return(addUp (num - 1));
  }
}
console.log(addUp(4)); //Returns '10'