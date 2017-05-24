function tripleAndFilter(arr){
  return arr.map(function(value){
    return value * 3;
  }).filter(function(value){
    return value % 5;
  })
}

let tripleAndFilter = (arr) => arr.map(val => val * 3).filter(val => val % 5 === 0);

function doubleOddNumbers(arr){
    return arr.filter(function(val){
        return val % 2 !== 0;
    }).map(function(val){
        return val *2;
    })
}

let doubleOddNumbers = (arr) => arr.filter(val => val % 2 !== 0).map(val => val * 2 );

function mapFilterAndReduce(arr){
  return arr.map(function(val){
    return val.firstName
  }).filter(function(val){
    return val.length < 5;
  }).reduce(function(acc,next){
    acc[next] = next.length
    return acc;
  }, {})
}

let mapFilterAndReduce = (arr) => {
  return arr.map(val => {
    return val.firstName
  }).filter(val => {
    return val.length < 5;
  }).reduce((acc,next) => {
    acc[next] = next.length
    return acc;
  }, {})
}

let createStudent = (firstName, lastName) => ({firstName:firstName, lastName,lastName})

var instructor = {
  firstName: "Colt",
  sayHi: function(){
    setTimeout(function(){
      console.log('Hello ' + this.firstName)
    },1000)
  }
}

instructor.sayHi();