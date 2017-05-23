// Make the tests pass for the following tasks:

// Create a constructor function for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber and favoriteFoods (which should be an array).

// Add a function on the Person.prototype called fullName that returns the firstName and lastName property of an object created by the Person constructor concatenated together.

var p = new Person("Shana", "Malarkin", "Green", 38);
p.fullName(); // Shana Malarkin

// Overwrite the toString method from the Object prototype by creating a toString method for Person. The toString method should return a string in the following format:
var p = new Person("Shana", "Malarkin", "Green", 38);
p.toString(); // Shana Malarkin, Favorite Color: Green, Favorite Number: 38
// Add a property on the Person object called family which is an empty array.

// Add a function on the Person.prototype called addToFamily which adds an object constructed from the Person constructor to the family array. To make sure that the object you are adding is an object construced from the Person constructor - take a look at the instanceofoperator. Make sure that your family array does not include duplicates! This method should return the length of the family array.

var p = new Person("Shana", "Malarkin", "Green", 38)
p.family; // []
p.addToFamily(p); // 1
p.family.length; // 1
p.addToFamily(p); // 1 - No duplicates!
p.family.length; // Length should still be 1
// Part II:

// Make the tests pass for the following tasks:

// Implement your own version of Array.prototype.map

// Implement a function that reverses a string and place it on the String.prototype
