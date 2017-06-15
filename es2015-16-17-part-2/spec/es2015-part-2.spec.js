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

// prototypes

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

describe("#fullName", function(){
  var person = new Person("Elie", "Schoppik", "purple", 34)
  it("returns the firstName concatenated with the lastName", function(){
    expect(person.fullName()).toEqual("Elie Schoppik")
  });
});

describe("family", function(){;
  it("is initialized as an empty array on the Person object", function(){
    var p1 = new Person()
    var p2 = new Person()
    expect(p1.family).toBeDefined();
    expect(Array.isArray(p1.family)).toEqual(true)
    expect(p1.family.length).toEqual(0)
  });
});

describe("#addToFamily", function(){
  it("is not shared amongst all objects created from the Person constructor", function(){
    var p1 = new Person()
    var p2 = new Person()
    p1.addToFamily(p1);
    expect(p2.family.length).toEqual(0)
  });
  it("adds a new person to the family array ONCE", function(){
    var person = new Person("Elie", "Schoppik", "purple", 34)
    var p1 = new Person()
    var p2 = new Person()
    person.addToFamily(p1);
    person.addToFamily(p1);
    person.addToFamily(p1);
    expect(person.family.length).toEqual(1)
  });
  it("only adds objects created from the Person constructor to the array", function(){
    var person = new Person("Elie", "Schoppik", "purple", 34)
    var p1 = new Person()
    var p2 = new Person()
    person.addToFamily(p1);
    person.addToFamily("test");
    person.addToFamily({});
    person.addToFamily([]);
    person.addToFamily(false);
    expect(person.family.length).toEqual(1)
  });
});


// PART II

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

// Inheritance

describe("Vehicle", function(){
  var vehicle = new Vehicle("Tractor", "John Deere", 1999)
  it("has a firstName", function(){
    expect(vehicle.hasOwnProperty('make')).toEqual(true);
  });
  it("has a lastName", function(){
    expect(vehicle.hasOwnProperty('model')).toEqual(true);
  });
  it("has a favoriteColor", function(){
    expect(vehicle.hasOwnProperty('year')).toEqual(true);
  });
});

describe("#start", function(){
  var vehicle = new Vehicle("Tractor", "John Deere", 1999)
  it("returns the string VROOM!", function(){
    expect(vehicle.start()).toEqual('VROOM!')
  });
});

describe("#toString", function(){
  var vehicle = new Vehicle("Tractor", "John Deere", 1999)
  it("returns a string with the make, model and year", function(){
    expect(vehicle.toString()).toEqual('The make, model, and year are Tractor John Deere 1999')
  });
});

describe("Car", function(){
  var car = new Car("Toyota", "Corolla", 2005)
  it("has a firstName", function(){
    expect(car.hasOwnProperty('make')).toEqual(true);
  });
  it("has a lastName", function(){
    expect(car.hasOwnProperty('model')).toEqual(true);
  });
  it("has a favoriteColor", function(){
    expect(car.hasOwnProperty('year')).toEqual(true);
  });
  it("has a numWheels", function(){
    expect(car.hasOwnProperty('numWheels')).toEqual(true);
    expect(car.numWheels).toEqual(4);
  });
  it("has the correct constructor", function(){
    expect(car.constructor).toEqual(Car);
  });
});

describe("#Car Methods", function(){
  var car = new Car("Toyota", "Corolla", 2005)
  it("has a start method", function(){
    expect(car.start()).toEqual('VROOM!')
  });
  it("has a toString method", function(){
    expect(car.toString()).toEqual('The make, model, and year are Toyota Corolla 2005')
  });
});

describe("Motorcycle", function(){
  var motorcycle = new Motorcycle("Kawasaki", "Ninja500", 2005)
  it("has a firstName", function(){
    expect(motorcycle.hasOwnProperty('make')).toEqual(true);
  });
  it("has a lastName", function(){
    expect(motorcycle.hasOwnProperty('model')).toEqual(true);
  });
  it("has a favoriteColor", function(){
    expect(motorcycle.hasOwnProperty('year')).toEqual(true);
  });
  it("has a numWheels", function(){
    expect(motorcycle.hasOwnProperty('numWheels')).toEqual(true);
    expect(motorcycle.numWheels).toEqual(2);
  });
  it("has the correct constructor", function(){
    expect(motorcycle.constructor).toEqual(Motorcycle);
  });
});

describe("#Motorcycle Methods", function(){
  var motorcycle = new Motorcycle("Kawasaki", "Ninja500", 2005)
  it("has a start method", function(){
    expect(motorcycle.start()).toEqual('VROOM!')
  });
  it("has a toString method", function(){
    expect(motorcycle.toString()).toEqual('The make, model, and year are Kawasaki Ninja500 2005')
  });
});

// maps + sets

describe("#MessageBoard", function(){
  var m = new MessageBoard
  it("has a messages property which is initialized to an empty map", function(){
    expect(m.messages.constructor).toEqual(Map);
  });
  it("has an id property which is initialized to at 1", function(){
    expect(m.hasOwnProperty('id')).toEqual(true);
    expect(m.id).toEqual(1);
  });
});

describe("#addMessage", function(){
  var m = new MessageBoard
  it("adds a message successfully", function(){
    m.addMessage('hello');
    expect(m.messages.size).toEqual(1)
  });
  it("returns the messageBoard object after adding so that the method can be chained", function(){
    expect(m.addMessage('awesome!')).toEqual(m)
    expect(m.addMessage('awesome!').addMessage('nice!').addMessage('cool!')).toEqual(m)
  });
});

describe("#findMessageById", function(){
  var m = new MessageBoard
  m.addMessage('hello!')
  m.addMessage('hi!')
  m.addMessage('whats up?')
  it("finds a message by its value", function(){
    expect(m.findMessageById(1)).toEqual('hello!')
    expect(m.findMessageById(2)).toEqual('hi!')
    expect(m.findMessageById(3)).toEqual('whats up?')
    expect(m.findMessageById(4)).toEqual(undefined)
    expect(m.findMessageById()).toEqual(undefined)
  });
});

describe("#findMessageByValue", function(){
  var m = new MessageBoard
  m.addMessage('hello!')
  m.addMessage('hi!')
  m.addMessage('whats up?')
  it("finds a message by its value", function(){
    expect(m.findMessageByValue('hello!')).toEqual('hello!')
    expect(m.findMessageByValue('hi!')).toEqual('hi!')
    expect(m.findMessageByValue('whats up?')).toEqual('whats up?')
    expect(m.findMessageByValue('nothing here')).toEqual(undefined)
    expect(m.findMessageByValue()).toEqual(undefined)
  });
});

describe("#removeMessage", function(){
  var m = new MessageBoard
  m.addMessage('hello!')
  m.addMessage('hi!')
  m.addMessage('whats up?')
  it("removes a message by id", function(){
    m.removeMessage(1)
    m.removeMessage(2)
    expect(m.messages.size).toEqual(1)
  });
  it("returns the message board object so the method can be chained", function(){
    expect(m.removeMessage()).toEqual(m)
  });
});

describe("#numberOfMessages", function(){
  var m = new MessageBoard
  m.addMessage('hello!')
  m.addMessage('hi!')
  m.addMessage('whats up?')
  it("returns the numer of messages in the message board", function(){
    expect(m.numberOfMessages()).toEqual(3)
  });
});

describe("#messagesToArray", function(){
  var m = new MessageBoard
  m.addMessage('hello!')
  m.addMessage('hi!')
  m.addMessage('whats up?')
  it("converts all the values in the messages map to an array", function(){
    expect(m.messagesToArray()).toEqual(['hello!', 'hi!', 'whats up?'])
  });
});

describe("#uniqueValues", function(){
  it("returns the number of unique values in an array", function(){
    expect(uniqueValues([1,1,2,2,2,3,3,3,3,4,4,4,5,5,6])).toEqual(6)
  });
});

describe("#countPairs", function(){
  it("returns the number of pairs that sum to the second_parameter", function(){
    expect(countPairs([8,2,6,4,10,0],10)).toBe(3);
    expect(countPairs([8,2],10)).toBe(1);
    expect(countPairs([1,2],10)).toBe(0);
    expect(countPairs([1,2,3,4,5],10)).toBe(0);
    expect(countPairs([],10)).toBe(0);
  });
  it("handles negative numbers", function(){
    expect(countPairs([5,4,-10,6,-20,16],-4)).toBe(2);
    expect(countPairs([0,-4],-4)).toBe(1);
  });
});

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


// Promises Spec

// describe("#getMostFollowers", function(){
//   it("returns a string with the most followers", function(done){
//     getMostFollowers('elie','tim','defunkt').then(function(result){
//       expect(result).toEqual('Chris Wanstrath has the most followers with 16213')
//       done();
//     })
//   });
// });

// describe("#starWarsString", function(){
//   it("returns a string with the most followers", function(done){
//     starWarsString(1).then(function(result){
//       expect(result).toEqual('Luke Skywalker is featured in The Empire Strikes Back, directed by Irvin Kershner and it takes place on Hoth')
//       done();
//     })
//     starWarsString(5).then(function(result){
//       expect(result).toEqual('Leia Organa is featured in The Empire Strikes Back, directed by Irvin Kershner and it takes place on Hoth')
//       done();
//     })
//   });
// });

// describe("#getTracksForFirstAlbum", function(){
//   it("returns a string with the most followers", function(done){
//     getTracksForFirstAlbum('the beatles').then(function(result){
//       expect(result[0]).toEqual('Back In The U.S.S.R. - Remastered')
//       expect(result[1]).toEqual('Dear Prudence - Remastered')
//       done();
//     })
//   });
// });

// Async Spec

// describe("#getMostFollowers", function(){
//   it("returns a string with the most followers", function(done){
//     getMostFollowers('elie','tim','defunkt').then(function(result){
//       expect(result).toEqual('Chris Wanstrath has the most followers with 16213')
//       done();
//     })
//   });
// });

// describe("#starWarsString", function(){
//   it("returns a string with the most followers", function(done){
//     starWarsString(1).then(function(result){
//       expect(result).toEqual('Luke Skywalker is featured in The Empire Strikes Back, directed by Irvin Kershner and it takes place on Hoth')
//       done();
//     })
//     starWarsString(5).then(function(result){
//       expect(result).toEqual('Leia Organa is featured in The Empire Strikes Back, directed by Irvin Kershner and it takes place on Hoth')
//       done();
//     })
//   });
// });

// describe("#getTracksForFirstAlbum", function(){
//   it("returns a string with the most followers", function(done){
//     getTracksForFirstAlbum('the beatles').then(function(result){
//       expect(result[0]).toEqual('Back In The U.S.S.R. - Remastered')
//       expect(result[1]).toEqual('Dear Prudence - Remastered')
//       done();
//     })
//   });
// });






































