// some + every

describe("#hasOddNumber", function(){
  it("returns true if there is at least one odd number in the array", function(){
    expect(hasOddNumber([1,2,2,2,2,2,4])).toEqual(true)
  });
  it("returns false if there are no odd numbers in the array", function(){
    expect(hasOddNumber([2,2,2,2,2,4])).toEqual(false)
  });
});

describe("#hasAZero", function(){
  it("returns true if the number contains at least one 0", function(){
    expect(hasAZero(3332123213101232321)).toEqual(true)
  });
  it("returns false if the number does not have any zeros", function(){
    expect(hasAZero(1212121)).toEqual(false)
  });
});

describe("#hasOnlyOddNumbers", function(){
  it("returns true if every number in the array is odd", function(){
    expect(hasOnlyOddNumbers([1,3,5,7])).toEqual(true)
  });
  it("returns false if there is one or more even numbers ", function(){
    expect(hasOnlyOddNumbers([1,2,3,5,7])).toEqual(false)
  });
});

describe("#hasNoDuplicates", function(){
  it("returns true if there are no duplicates in the array", function(){
    expect(hasNoDuplicates([1,2,3,1])).toEqual(false)
  });
  it("returns false if there are duplicates in the array", function(){
    expect(hasNoDuplicates([1,2,3])).toEqual(true)
  });
});

describe("#hasCertainKey", function(){
  var arr = [{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}]
  it("returns true if every object in the array contains a certain key", function(){
    expect(hasCertainKey(arr,'first')).toEqual(true)
  });
  it("returns false if every object in the array does not contain a certain key", function(){
    expect(hasCertainKey(arr,'isCatOwner')).toEqual(false)
  });
});

describe("#hasCertainValue", function(){
  var arr = [{title: "Instructor", first: 'Elie', last:"Schoppik"}, {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, {title: "Instructor", first: 'Matt', last:"Lane"}, {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}]
  it("returns true if every object in an array has the same value for some key", function(){
    expect(hasCertainValue(arr,'title','Instructor')).toEqual(true)
  });
  it("returns false if every object in an array does not have the same value for some key", function(){
    expect(hasCertainValue(arr,'first','Elie')).toEqual(false)
  });
});