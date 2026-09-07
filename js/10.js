/**
 * Question 10:
 * Define a Car class in JavaScript:
 * - Set properties such as model and manufacturing year.
 * - Display these properties.
 * - Use inheritance to calculate the car's age based on the current year.
 */

// Base Car class
class Car {
  constructor(model, manufacturingYear) {
    this.model = model;
    this.manufacturingYear = Number(manufacturingYear);
  }

  // Method to display base car properties
  displayProperties() {
    return `Model: ${this.model}, Manufacturing Year: ${this.manufacturingYear}`;
  }
}

// Derived class using inheritance to add age calculation functionality
class DetailedCar extends Car {
  constructor(model, manufacturingYear) {
    // Call parent class constructor
    super(model, manufacturingYear);
  }

  // Method to calculate car's age based on current year
  calculateAge(currentYear = new Date().getFullYear()) {
    return currentYear - this.manufacturingYear;
  }

  // Method to display complete car information including age
  displayFullDetails() {
    const baseInfo = this.displayProperties();
    const age = this.calculateAge();
    return `${baseInfo}\nCalculated Age: ${age} year(s) old (as of ${new Date().getFullYear()})`;
  }
}

// Function to demonstrate Car class and inheritance
function demonstrateCarClass(model, manufacturingYear) {
  const carModel = model || "Tesla Model 3";
  const year = manufacturingYear || 2018;

  const carInstance = new DetailedCar(carModel, year);
  const details = carInstance.displayFullDetails();

  console.log(details);

  return {
    car: carInstance,
    details: details,
  };
}
