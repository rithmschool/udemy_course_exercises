// inherit 1 thing from another

function Vehicle(make,model,year){
  this.make = make;
  this.model = model;
  this.year = year;
}

Vehicle.prototype.start = function(){
  return "VROOM!"
}

Vehicle.prototype.toString = function(){
  return "The make, model, and year are " + this.make + " " + this.model  + " " + this.year;
}

function Car(make,model,year){
  Vehicle.apply(this, arguments)
  this.numWheels = 4;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

function Motorcycle(make,model,year){
  Vehicle.apply(this, arguments)
  this.numWheels = 2;
}

Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;