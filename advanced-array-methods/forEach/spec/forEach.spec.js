// forEach Exercises

describe("#doubleValues", function(){
  it("doubles values in an array", function(){
    expect(doubleValues([1,2,3])).toEqual([2,4,6])
  });
  it("works for negative numbers", function(){
    expect(doubleValues([1,-2,-3])).toEqual([2,-4,-6])
  });
});

describe("#onlyEvenValues", function(){
  it("returns a new array of only even values", function(){
    expect(onlyEvenValues([1,2,3,4,5,6])).toEqual([2,4,6])
  });
});

describe("#showFirstAndLast", function(){
  it("returns an array of only the first and last characters in an array", function(){
    expect(showFirstAndLast(['elie','colt','matt','tim'])).toEqual(['ee','ct','mt','tm'])
  });
});

describe("#addKeyAndValue", function(){
  it("adds a key and value to an array of objects", function(){
    var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    var updatedArr = [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
    expect(addKeyAndValue(arr,'title','instructor')).toEqual(updatedArr)
  });
});

describe("#vowelCount", function(){
  it("returns an object with the keys as vowels and the values as the count", function(){
    expect(vowelCount('elie')).toEqual({e:2,i:1});
    expect(vowelCount('tim')).toEqual({i:1});
    expect(vowelCount('matt')).toEqual({a:1});
    expect(vowelCount('hmmm')).toEqual({});
    expect(vowelCount('i am awesome and so are you')).toEqual({i: 1, a: 4, e: 3, o: 3, u: 1});
  });
});
