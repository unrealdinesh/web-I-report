/**
 * Question 7:
 * Write a JavaScript program using an object constructor to set a person's first name and last name.
 * Add a method to change the last name. Display the name before and after calling the method.
 */

// Object constructor for Person
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  // Method to return full name
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };

  // Method to change the last name
  this.changeLastName = function (newLastName) {
    this.lastName = newLastName;
  };
}

// Function to test and demonstrate Person constructor logic
function demonstratePersonConstructor(firstName, lastName, newLastName) {
  const fName = firstName || "John";
  const lName = lastName || "Doe";
  const updatedLName = newLastName || "Smith";

  // Create person object using constructor
  const person = new Person(fName, lName);

  // Display name before calling method
  const nameBefore = person.getFullName();

  // Call method to change last name
  person.changeLastName(updatedLName);

  // Display name after calling method
  const nameAfter = person.getFullName();

  const message = `Before change: ${nameBefore}\nAfter change:  ${nameAfter}`;

  return {
    person,
    nameBefore,
    nameAfter,
    message,
  };
}
