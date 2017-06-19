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














































