// spread
function smallestValue(){
    return Math.min(...Array.from(arguments))
}

// placeInMiddle([1,2,6,7],[3,4,5])
function placeInMiddle(arr, vals){
    return arr.slice(0, Math.floor(arr.length/2)).concat(vals).concat(arr.slice(Math.floor(arr.length/2)))
}

// rest
function joinArrays(...args){
    return args.reduce((acc, next) => acc.concat(next), [])
}

// rest
function sumEvenArgs(...args){
    return args.reduce((acc, next)=>{
        if(next%2===0){
            return acc += next
        } else {
            return acc + 0
        }
    },0)
}

// rest
function flip(fn, thisArg, ...outer){
    return function(...inner){
        var combined = outer.concat(inner).slice(0, fn.length)
        return fn.apply(thisArg, combined.reverse())
    }
}

// rest + spread
function bind(fn, thisArg, ...outer){
    return function(...inner){
        return fn.call(thisArg, ...outer, ...inner)
    }
}
