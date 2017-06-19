// closures

describe("#specialMultiply", function(){
  it("returns a function if only one parameter is passed", function(){
    expect(specialMultiply(1)).toEqual(jasmine.any(Function))
  });
  it("returns a function if only one parameter is passed that can be invoked with a second parameter", function(){
    var m = specialMultiply(1)
    expect(specialMultiply(1)).toEqual(jasmine.any(Function))
    expect(m(3)).toEqual(3)
  });
  it("returns a the product of two numbers if two parameters are passed", function(){
    expect(specialMultiply(1)(3)).toEqual(3)
  });
});

describe("#guessingGame", function(){
  it("returns a function", function(){
    expect(guessingGame(1)).toEqual(jasmine.any(Function))
  });
  it("stops you from guessing once you have gotten the answer", function(){
    var g = guessingGame(10)
    g(0), g(1), g(2), g(3), g(4), g(5), g(6), g(7), g(8), g(9), g(10)
    expect(g(10)).toEqual("All done playing!")
  });
});