// Array.from
// Object.assign
// Number.isFinite

function copyObject(obj){
  return Object.assign({}, obj)
}

function checkIfFinite(num){
  return Number.isFinite(num)
}

function areAllNumbersFinite(arr){
  return arr.every(Number.isFinite)
}

function convertArrayLikeObject(obj){
  return Array.from(obj)
}

function displayEvenArguments(){
  return Array.from(arguments).filter(val => val % 2 === 0);
}