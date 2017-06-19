describe("#arrayFrom", function(){
  function convert(){
      var arr = arrayFrom(arguments)
      return arr;
  }
  it("takes an array like object and converts it into an array", function(){
    var argsArr = convert();
      expect(argsArr.reduce).toEqual(jasmine.any(Function))
  });
});

describe("#sumEvenArguments", function(){
  it("takes all of the arguments passed to a function and returns the sum of the even ones", function(){
    expect(sumEvenArguments(1,2,3,4)).toEqual(6) // 6
    expect(sumEvenArguments(1,2,6)).toEqual(8) // 8
    expect(sumEvenArguments(1,2)).toEqual(2) // 2
  });
});

describe("#invokeMax", function(){
  function add(a,b){
      return a+b
  }
  it("returns a function that calls another function a certain amount of times", function(){
   var addOnlyThreeTimes = invokeMax(add,3);
   expect(addOnlyThreeTimes(1,2)).toEqual(3) // 3
   expect(addOnlyThreeTimes(2,2)).toEqual(4) // 4
   expect(addOnlyThreeTimes(1,2)).toEqual(3) // 3
   expect(addOnlyThreeTimes(1,2)).toEqual("Maxed Out!")
   expect(addOnlyThreeTimes(1,2)).toEqual("Maxed Out!")
  });
});

describe("#once", function(){
  function add(a,b){
    return a+b;
  }
  var addOnce = once(add)
  it("returns a function", function(){
    expect(addOnce).toEqual(jasmine.any(Function))
  });
  it("only allows for the function passed to it to be invoked once and returns undefined if the function has already been invoked", function(){
    expect(addOnce(2,2)).toEqual(4)
    expect(addOnce(2,2)).toEqual(undefined)
    expect(addOnce(2,2)).toEqual(undefined)
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















