// function tripleAndFilter(arr){
//   return arr.map(function(value){
//     return value * 3;
//   }).filter(function(value){
//     return value % 5;
//   })
// }
// 1
var tripleAndFilter = arr => arr.map(value => value * 3).filter(num => num % 5 === 0)

// function doubleOddNumbers(arr){
//     return arr.filter(function(val){
//         return val % 2 !== 0;
//     }).map(function(val){
//         return val *2;
//     })
// }
// 2
var doubleOddNumbers = arr => arr.filter(val => val % 2 !== 0).map(val => val * 2)

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
//3
var mapFilterAndReduce = arr => arr.map(val => val.firstName).filter(val => val.length < 5).reduce((acc, next) => {
  acc[next] = next.length
  return acc
}, {});

// 4
var createStudentObj = (firstName, lastName) => ({ 'firstName': firstName, 'lastName': lastName })

// 5
// var instructor = {
//   firstName: "Colt",
//   sayHi: function() {
//     setTimeout(function() {
//       console.log("Hello " + this.firstName);
//     }, 1000);
//   }
// };

var instructor = {
  firstName: 'Colt',
  sayHi: function () {
    setTimeout(() => {
      console.log('Hello ' + this.firstName)
    }, 1000)
  }
}