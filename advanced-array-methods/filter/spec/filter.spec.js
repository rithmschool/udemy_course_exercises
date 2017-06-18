// filter exercises

describe("#filterByValue", function(){
  var arr = [{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}]
  it("returns a new array of objects that contain a key", function(){
    expect(filterByValue(arr, 'isCatOwner')).toEqual([{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}])
  });
});

describe("#find", function(){
  var arr = [1,2,3,4,5];
  it("returns the first value found in an array", function(){
    expect(find(arr,3)).toEqual(3)
  });
  it("returns undefined if the value is not found", function(){
    expect(find(arr,10)).toEqual(undefined)
  });
});

describe("#findInObj", function(){
  var arr = [{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}]
  it("returns the first value found in an array", function(){
    expect(findInObj(arr,'isCatOwner',true)).toEqual({first: 'Tim', last:"Garcia", isCatOwner: true})
  });
  it("returns undefined if the value is not found", function(){
    expect(findInObj(arr,'isCatOwner',false)).toEqual(undefined)
  });
});

describe("#removeVowels", function(){
  it("removes all vowels from a string", function(){
    expect(removeVowels('elie')).toEqual('l')
    expect(removeVowels('TIM')).toEqual('tm')
    expect(removeVowels('ZZZZZZ')).toEqual('zzzzzz')
  });
});

describe("#doubleOddNumbers", function(){
  it("returns an array of all odd numbers doubled", function(){
    expect(doubleOddNumbers([1,2,3,4,5])).toEqual([2,6,10])
    expect(doubleOddNumbers([4,4,4,4,4])).toEqual([])
  });
});