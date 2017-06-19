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