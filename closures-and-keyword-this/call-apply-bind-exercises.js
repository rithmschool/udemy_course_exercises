// https://github.com/rithmschool/intermediate_javascript_exercises/blob/master/call_apply_bind_exercise/callApplyBindSpec.js

// FIX DIS

var obj = {
    fullName: "Harry Potter",
    person: {
        sayHi: function(){
            return "This person's name is " + this.fullName
        }
    }
}

// Write a function called sumEvenArguments which takes all of the arguments passed to a function and returns the sum of the even ones.

sumEvenArguments(1,2,3,4) // 6
sumEvenArguments(1,2,6) // 8
sumEvenArguments(1,2) // 2

// Write a function called arrayFrom which converts an array-like-object into an array.

function sample(){
    var arr = arrayFrom(arguments)
    if(!arr.reduce) throw "This is not an array!"
    return arr.reduce(function(acc,next){
        return acc+next;
    },0)
}

// Write a function called invokeMax which accepts a function and a maximum amount. invokeMax should return a function that when called increments a counter. If the counter is greater than the maximum amount, the inner function should return "Maxed Out"


function add(a,b){
    return a+b
}

var addOnlyThreeTimes = invokeMax(add,3);
addOnlyThreeTimes(1,2) // 3
addOnlyThreeTimes(2,2) // 4
addOnlyThreeTimes(1,2) // 3
addOnlyThreeTimes(1,2) // "Maxed Out!"






