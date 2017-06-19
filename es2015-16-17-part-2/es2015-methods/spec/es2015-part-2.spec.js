// ES2015 methods exercises

describe("#copyObject", function(){
  var o = {name: 'Elie'}
  it("makes a copy of an object and removes the reference", function(){
    var o2 = copyObject({}, o)
    o2.name = "Tim"
    expect(o2.name).toEqual('Tim')
    expect(o.name).toEqual('Elie')
  });
});

describe("#checkIfFinite", function(){
  it("accepts a number and checks if it is finite", function(){
    expect(checkIfFinite(4)).toEqual(true)
    expect(checkIfFinite(-3)).toEqual(true)
    expect(checkIfFinite(4.3)).toEqual(true)
    expect(checkIfFinite(NaN)).toEqual(false)
    expect(checkIfFinite(Infinity)).toEqual(false)
  });
});

describe("#areAllNumbersFinite", function(){
  var finiteNums = [4,-3,2.2]
  var finiteNumsExceptOne = [4,-3,2.2,NaN]
  it("accepts an array and returns true if every number is finite", function(){
    expect(areAllNumbersFinite(finiteNums)).toEqual(true)
    expect(areAllNumbersFinite(finiteNumsExceptOne)).toEqual(false)
  });
});

describe("#convertArrayLikeObject", function(){
  it("coverts an array like object into an array", function(){
    var divs = document.getElementsByTagName('div')
    expect(divs.reduce).toEqual(undefined)
    var converted = convertArrayLikeObject(divs)
    expect(converted.reduce).toEqual(jasmine.any(Function))
  });
});

describe("#displayEvenArguments", function(){
  it("returns a new array of all the even arguments passed to a function", function(){
    expect(displayEvenArguments(1,2,3,4,5,6)).toEqual([2,4,6])
    expect(displayEvenArguments(7,8,9)).toEqual([8])
    expect(displayEvenArguments(1,3,7)).toEqual([])
  });
});