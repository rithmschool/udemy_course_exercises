// https://github.com/rithmschool/intermediate_javascript_exercises/blob/master/call_apply_bind_exercise/callApplyBindSpec.js

function arrayFrom(arrayLikeObject){
    return [].splice.call(arrayLikeObject)
}


function sumEvenArguments(){
    var sum = 0
    for(var i=0; i<arguments.length; i++){
        if(arguments[i] % 2===0){
            sum += arguments[i]
        }
    }
    return sum
}

// Write a function called sumEvenArguments which takes all of the arguments passed to a function and returns the sum of the even ones.

// sumEvenArguments(1,2,3,4) // 6
// sumEvenArguments(1,2,6) // 8
// sumEvenArguments(1,2) // 2

// // Write a function called invokeMax which accepts a function and a maximum amount. invokeMax should return a function that when called increments a counter. If the counter is greater than the maximum amount, the inner function should return "Maxed Out"

// var addOnlyThreeTimes = invokeMax(add,3);
// addOnlyThreeTimes(1,2) // 3
// addOnlyThreeTimes(2,2) // 4
// addOnlyThreeTimes(1,2) // 3
// addOnlyThreeTimes(1,2) // "Maxed Out!"

function add(a, b) {
    return a + b;
}

function invokeMax(fn, num){
    var counter = 0
    return function(a,b){
        counter += 1
        if(counter > num){
            return "Maxed Out!"
        }
        return fn(a,b)
    }
}

function once(fn, thisArg){
    var notInvoked = true
    return function(){
        if(notInvoked){
            notInvoked = false
            return fn.apply(thisArg, arguments)
        } 
    }
}

function flip(fn, thisArg, ...outerArgs){
    return function(...innerArgs){
        var combined = outerArgs.concat(innerArgs).slice(0, fn.length)
        return fn.apply(thisArg, combined.reverse())
    }
}

// BONUS!
function flip(fn, thisArg) {}
