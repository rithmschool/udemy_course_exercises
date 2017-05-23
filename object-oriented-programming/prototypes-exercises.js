// Create a constructor function for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber)

// Add a function on the Person.prototype called fullName that returns the firstName and lastName property of an object created by the Person constructor concatenated together.

// Add a property on the Person object called family which is an empty array.

// Add a function on the Person.prototype called addToFamily which adds an object constructed from the Person constructor to the family array. To make sure that the object you are adding is an object construced from the Person constructor - take a look at the instanceofoperator. Make sure that your family array does not include duplicates! This method should the length of the family array.

function Person(firstName, lastName, favoriteColor, favoriteNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.family = [];
}

Person.prototype.fullName = function(){
    return this.firstName + " " + this.lastName;
}

Person.prototype.addToFamily = function(person){
    if(this.family.indexOf(person) === -1 && person instanceof Person){
        this.family.push(person)
    }
    return this.family.length;
}

// Part II:

// Make the tests pass for the following tasks:

// Implement your own version of Array.prototype.map

Array.prototype.map = function(callback){
  var newArr = [];
  for(var i = 0; i < this.length; i++){
    newArr.push(callback(arr[i], i, this))
  }
  return newArr;
}

// Implement a function that reverses a string and place it on the String.prototype

String.prototype.reverse = function(){
  var newStr = '';
  for(var i = this.length -1; i >= 0; i--){
    newStr += this[i]
  }
  return newStr;
}

