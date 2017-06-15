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

describe("Array.prototype.map", function(){
  var arr = [1,2,3,4]
  it("returns a new array of values with a callback run on each value", function(){
    expect(arr.map(v => v*2)).toEqual([2,4,6,8])
  });
  it("allows access to the index as a second parameter", function(){
    expect(arr.map((v,i) => i*2)).toEqual([0,2,4,6])
  });
  it("allows access to the array as the third parameter", function(){
    expect(arr.map((v,i,a) => a.length)).toEqual([4,4,4,4])
  });
});

describe("String.prototype.reverse", function(){
  it("returns a new reversed string", function(){
    expect("test".reverse()).toEqual("tset");
    expect("tacocat".reverse()).toEqual("tacocat");
  });
});

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














































