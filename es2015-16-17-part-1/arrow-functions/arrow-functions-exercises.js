// function tripleAndFilter(arr){
//   return arr.map(function(value){
//     return value * 3;
//   }).filter(function(value){
//     return value % 5;
//   })
// }

// 1

// function doubleOddNumbers(arr){
//     return arr.filter(function(val){
//         return val % 2 !== 0;
//     }).map(function(val){
//         return val *2;
//     })
// }

// 2

// function mapFilterAndReduce(arr){
//   return arr.map(function(val){
//     return val.firstName
//   }).filter(function(val){
//     return val.length < 5;
//   }).reduce(function(acc,next){
//     acc[next] = next.length
//     return acc;
//   }, {})
// }

// 3

// 4

// 5
var instructor = {
  firstName: "Colt",
  sayHi: function() {
    setTimeout(function() {
      console.log("Hello " + this.firstName);
    }, 1000);
  }
};
