// spread
function smallestValue(...args){
  return Math.min(...args)
}

// placeInMiddle([1,2,6,7],[3,4,5])
function placeInMiddle(arr, vals){
  let mid = Math.floor(arr.length/2)
  arr.splice(mid,0,...vals)
  return arr;
}

// rest
function joinArrays(...args){
  return args.reduce((acc, next) => acc.concat(next), [])
}

// rest
function sumEvenArgs(...args){
  return args.reduce((acc, next) => next % 2 === 0 ? acc += next : acc, 0)
}

// rest
function flip(fn, thisArg, ...outerArgs){
  return function(...innerArgs){
    let allArgs = outerArgs.concat(innerArgs).slice(0, fn.length)
    return fn.apply(thisArg, allArgs.reverse());
  }
}

// rest + spread
function bind(fn, thisArg, ...outerArgs){
  return function(...innerArgs){
    return fn.apply(thisArg, [...outerArgs, ...innerArgs])
  }
}