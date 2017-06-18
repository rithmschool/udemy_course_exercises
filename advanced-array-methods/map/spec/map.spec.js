// map Exercises

describe("#doubleValues", function(){
  it("doubles values in an array", function(){
    expect(doubleValues([1,2,3])).toEqual([2,4,6])
  });
  it("works for negative numbers", function(){
    expect(doubleValues([1,-2,-3])).toEqual([2,-4,-6])
  });
});

describe("#valTimesIndex", function(){
  it("returns a new array with each value multiplied by the index", function(){
    expect(valTimesIndex([1,2,3])).toEqual([0,2,6])
  });
  it("works for negative numbers", function(){
    expect(valTimesIndex([1,-2,-3])).toEqual([0,-2,-6])
  });
});

describe("#extractValue", function(){
  it("returns a new array with the value of each key in an array objects", function(){
    var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    expect(extractValue(arr,'name')).toEqual(['Elie', 'Tim', 'Matt', 'Colt'])
  });
});

describe("#extractFulName", function(){
    var arr = [{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]
  it("returns a new array with the value of each key in an array objects", function(){
    expect(extractFullName(arr,'name')).toEqual(['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele'])
  });
});