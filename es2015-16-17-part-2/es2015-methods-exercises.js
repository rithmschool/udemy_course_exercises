// Array.from
// Object.assign
// Number.isFinite

function copyObject(obj){
  return Object.assign({}, obj)
}

function checkIfNumber(num){
  return Number.isFinite(num)
}

function convertArrayLikeObject(obj){
  return Array.from(obj)
}

function displayEvenArguments(){
  return Array.from(arguments).filter(val => val % 2 === 0);
}