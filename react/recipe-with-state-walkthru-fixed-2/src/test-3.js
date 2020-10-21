let i = 3;
function noReturn () {
  i--;
  if (i <= 0) {
    return 0;
  } else {
    noReturn();
  }

}

console.log(noReturn())