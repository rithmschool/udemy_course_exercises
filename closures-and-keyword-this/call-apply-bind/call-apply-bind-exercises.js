// https://github.com/rithmschool/intermediate_javascript_exercises/blob/master/call_apply_bind_exercise/callApplyBindSpec.js

function arrayFrom(arrayLikeObject) {
  var divs = document.getElementsByTagName('divs');
  return [].slice.call(divs);
}

function sumEvenArguments() {
  let args = Array.from(arguments);
  
  return args.reduce(function (acc, val) {
    if (val % 2 === 0) {
      return acc += val
    }
    return acc;
  }, 0)
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

function invokeMax(fn, num) {
  let counter = 0;

  return function () {
    if (counter >= num) {
      return "Maxed Out!"
    }
    counter++;
    fn.apply(this, arguments)
  }
}

function once(fn, thisArg) {
  let called = 0;

  return function () {
    if (called < 1) {
      called++;
      console.log(arguments)
      return fn.apply(thisArg, arguments);
    }

  }
}

function bind(fn, thisArg) {}

// BONUS!
function flip(fn, thisArg) {}
