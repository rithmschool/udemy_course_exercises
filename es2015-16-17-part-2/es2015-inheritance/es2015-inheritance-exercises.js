class Vehicle {
  constructor(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;
  }
  start(){
    return "VROOM!"
  }
  toString(){
    return `The make, model, and year are ${this.make} ${this.model} ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(){
    super(...arguments)
    this.numWheels = 4;
  }
}

class Motorcycle extends Vehicle {
  constructor(){
    super(...arguments)
    this.numWheels = 2;
  }
}
