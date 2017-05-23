// rest
function flip(fn){
  return function(...args){
    return fn.apply(this, args.reverse());
  }
}

// spread
function smallestValue(...args){
  return Math.min(...args)
}

// rest + spread
function bind(fn, thisArg, ...outerArgs){
  return function(...innerArgs){
    return fn.apply(thisArg, [...outerArgs, ...innerArgs])
  }
}