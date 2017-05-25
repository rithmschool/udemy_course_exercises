// arrow functions
describe("#tripleAndFilter", function(){
  it("triples an array of numbers and returns an array of all those numbers divisible by 5", function(){
    expect(tripleAndFilter([1,2,3,4,5])).toEqual([15])
  });
});

describe("#doubleOddNumbers", function(){
  it("returns a new array of all odd numbers doubled", function(){
    expect(doubleOddNumbers([1,2,3,4,5])).toEqual([2,6,10])
  });
});

describe("#mapFilterAndReduce", function(){
  it("maps over an array and filters for a length less than 5 and reduces into an object with the key as the name and value as the length", function(){
    var arr = mapFilterAndReduce([{firstName: 'Elie'}, {firstName: 'Rusty'}, {firstName: 'Matthew'}, {firstName: 'Tim'}])
    expect(arr).toEqual({Elie: 4, Tim: 3})
  });
});

describe("#createStudent", function(){
  it("returns an object with the keys and values of firstName and lastName", function(){
    expect(createStudentObj('Elie', 'Schoppik')).toEqual({firstName: 'Elie', lastName: 'Schoppik'})
  });
});

// destructuring

describe("#displayStudentInfo", function(){
  it("returns a string with the first value and last value of an object", function(){
    var obj = {first: 'Elie', last:'Schoppik'}
    expect(printFullName(obj)).toEqual('Your full name is Elie Schoppik')
  });
});

describe("#printFullName", function(){
  it("returns a string with the first value and last value of an object with a destructured parameter", function(){
    var obj = {first: 'Elie', last:'Schoppik'}
    expect(printFullName(obj)).toEqual('Your full name is Elie Schoppik')
  });
});

describe("#createStudent", function(){
  it("returns a string with the first value and last value of an object with a destructured parameter", function(){
    expect(createStudent()).toEqual('The student likes JavaScript and ES2015!')
    expect(createStudent({likesES2015:false})).toEqual('The student likes JavaScript!')
    expect(createStudent({likesJavaScript:false})).toEqual('The student likes ES2015!')
    expect(createStudent({likesJavaScript:false,likesES2015:false})).toEqual('The student does not like much...')
  });
});

describe("#reverseArray", function(){
  it("reverses values in an array", function(){
    var arr = [1,2,3,4,5]
    var arr2 = [1,2]
    var arr3 = []
    var arr4 = [1,2,3,4,5,6,7,8,9,10]
    expect(reverseArray(arr)).toEqual([5,4,3,2,1])
    expect(reverseArray(arr2)).toEqual([2,1])
    expect(reverseArray(arr3)).toEqual([])
    expect(reverseArray(arr4)).toEqual([10,9,8,7,6,5,4,3,2,1])
  });
});


// rest-spread

describe("#smallestValue", function(){
  it("returns the smallest value for a variable number of arguments", function(){
    expect(smallestValue(4,1,12,0)).toEqual(0)
    expect(smallestValue(5,4,1,121)).toEqual(1)
    expect(smallestValue(4,2)).toEqual(2)
    expect(smallestValue(99,12321,12.2)).toEqual(12.2)
  });
});

describe("#placeInMiddle", function(){
  it("places a list of values in the middle of an array", function(){
    expect(placeInMiddle([1,2,6,7],[3,4,5])).toEqual([1,2,3,4,5,6,7])
    expect(placeInMiddle([1],[3,4,5])).toEqual([3,4,5,1])
    expect(placeInMiddle([1,6],[2,3,4,5])).toEqual([1,2,3,4,5,6])
    expect(placeInMiddle([],[2,3,4,5])).toEqual([2,3,4,5])
  });
});

describe("#joinArrays", function(){
  it("returns a single array of all the parameters concatenated together", function(){
    expect(joinArrays([1],[2],[3])).toEqual([1,2,3])
    expect(joinArrays([1],[2],[3],[1],[2],[3])).toEqual([1,2,3,1,2,3])
    expect(joinArrays([1,2,3],[4,5,6],[7,8,9])).toEqual([1,2,3,4,5,6,7,8,9])
    expect(joinArrays([1],[3],[0],[7])).toEqual([1,3,0,7])
  });
});

describe("#sumEvenArgs", function(){
  it("returns the sum of even arguments passed to the function", function(){
    expect(sumEvenArgs(1,2,3,4,5)).toEqual(6)
    expect(sumEvenArgs(1,2,3,4,5,6)).toEqual(12)
    expect(sumEvenArgs(1,3,5,7,9)).toEqual(0)
  });
});

describe("#bind", function(){
  function addFourNumbers(a,b,c,d){
    return a+b+c+d;
  }
  function firstNameFavoriteColor(favoriteColor){
    return this.firstName + "'s favorite color is " + favoriteColor
  }
  var person = {
    firstName: 'Elie'
  }
  it("returns a function", function(){
    expect(bind()).toEqual(jasmine.any(Function))
  });
  it("is invoked with the value of the keyword this passed to the function", function(){
    var bindFn = bind(firstNameFavoriteColor, person);
    expect(bindFn('green')).toEqual("Elie's favorite color is green")
    var bindFn = bind(firstNameFavoriteColor, person, 'blue');
    expect(bindFn('green')).toEqual("Elie's favorite color is blue")
  });
  it("is invoked with the remaining arguments from the outer function and inner function", function(){
    expect(bind(addFourNumbers,this,1)(2,3,4)).toEqual(10)
    expect(bind(addFourNumbers,this,1,2)(3,4)).toEqual(10)
    expect(bind(addFourNumbers,this,1,2,3)(4)).toEqual(10)
    expect(bind(addFourNumbers,this,1,2,3,4)()).toEqual(10)
    expect(bind(addFourNumbers,this)(1,2,3,4)).toEqual(10)
    expect(bind(addFourNumbers,this)(1,2,3,4,5,6,7,8,9,10)).toEqual(10)
  });
});

describe("#flip", function(){
  function subtractFourNumbers(a,b,c,d){
    return a-b-c-d;
  }
  function personSubtract(a,b,c){
    return this.firstName + " subtracts " + (a-b-c);
  }
  var person = {
    firstName: 'Elie'
  }
  it("returns a function", function(){
    expect(flip()).toEqual(jasmine.any(Function))
  });
  it("is invoked with the value of the keyword this passed to the function", function(){
    var flipFn = flip(personSubtract, person);
    expect(flipFn(3,2,1)).toEqual("Elie subtracts -4")
    var flipFn = flip(personSubtract, person, 5,6);
    expect(flipFn(7,8)).toEqual("Elie subtracts -4")
  });
  it("is invoked with the remaining arguments from the outer function and inner function", function(){
    expect(flip(subtractFourNumbers,this,1)(2,3,4)).toEqual(-2)
    expect(flip(subtractFourNumbers,this,1,2)(3,4)).toEqual(-2)
    expect(flip(subtractFourNumbers,this,1,2,3)(4)).toEqual(-2)
    expect(flip(subtractFourNumbers,this,1,2,3,4)()).toEqual(-2)
    expect(flip(subtractFourNumbers,this)(1,2,3,4)).toEqual(-2)
    expect(flip(subtractFourNumbers,this,1,2,3)(4,5,6,7)).toEqual(-2)
    expect(flip(subtractFourNumbers,this)(1,2,3,4,5,6,7,8,9,10)).toEqual(-2)
    expect(flip(subtractFourNumbers,this,11,12,13,14,15)(1,2,3,4,5,6,7,8,9,10)).toEqual(-22)
  });
});
