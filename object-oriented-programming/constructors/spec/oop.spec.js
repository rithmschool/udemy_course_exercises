// constructors

describe("Person", function(){
  var person = new Person("Elie", "Schoppik", "purple", 34)
  it("has a firstName", function(){
    expect(person.hasOwnProperty('firstName')).toEqual(true);
  });
  it("has a lastName", function(){
    expect(person.hasOwnProperty('lastName')).toEqual(true);
  });
  it("has a favoriteColor", function(){
    expect(person.hasOwnProperty('favoriteColor')).toEqual(true);
  });
  it("has a favoriteNumber", function(){
    expect(person.hasOwnProperty('favoriteNumber')).toEqual(true);
  });
});

describe("#multiplyFavoriteNumber", function(){
  var person = new Person("Elie", "Schoppik", "purple", 34)
  it("takes in a number and returns the product of the number and the Person's favorite number", function(){
    expect(person.multiplyFavoriteNumber(10)).toEqual(340)
  });
});
