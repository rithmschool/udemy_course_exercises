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

// reduce exercises

describe("#extractValue", function(){
  it("returns a new array with the value of each key in an array objects", function(){
    var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    expect(extractValue(arr,'name')).toEqual(['Elie', 'Tim', 'Matt', 'Colt'])
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

describe("#addKeyAndValue", function(){
  var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
  var updated = [{title: 'Instructor', name: 'Elie'}, {title: 'Instructor', name: 'Tim'}, {title: 'Instructor', name: 'Matt'}, {title: 'Instructor', name: 'Colt'}];
  it("adds a key and value to each object in an array of objects", function(){
    expect(addKeyAndValue(arr, 'title', 'Instructor')).toEqual(updated)
  });
});

describe("#partition", function(){
  function isEven(val){
    return val % 2 === 0;
  }
  function isLongerThanThreeCharacters(val){
    return val.length > 3;
  }
  var arr = [1,2,3,4,5,6,7,8];
  var names = ['Elie', 'Colt', 'Tim', 'Matt'];
  it("returns an array of arrays with the first subarray as values returning true from the callback", function(){
    expect(partition(arr, isEven)).toEqual([[2,4,6,8],[1,3,5,7]]);
    expect(partition(names, isLongerThanThreeCharacters)).toEqual([['Elie', 'Colt', 'Matt'],['Tim']]);
  });
});














































