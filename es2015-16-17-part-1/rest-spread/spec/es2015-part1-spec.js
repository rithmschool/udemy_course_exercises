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
