/**
 * Question 4:
 * Write a JavaScript program that:
 * - Adds two numbers if both are even
 * - Otherwise, finds their difference
 * (Use user-defined functions for the checks.)
 */

// User-defined function to check if a number is even
function isEven(num) {
  num = Number(num);
  return Number.isInteger(num) && num % 2 === 0;
}

// compute sum
function addNumbers(a, b) {
  return a + b;
}

// compute difference (absolute difference)
function subtractNumbers(a, b) {
  return Math.abs(a - b);
}

// Main logic function
function processNumbers(num1, num2) {
  const n1 = Number(num1);
  const n2 = Number(num2);

  if (isNaN(n1) || isNaN(n2)) {
    console.log("Invalid inputs provided.");
    return null;
  }

  if (isEven(n1) && isEven(n2)) {
    const sum = addNumbers(n1, n2);
    const message = `Both ${n1} and ${n2} are EVEN. Addition Result = ${sum}`;
    return { operation: "addition", result: sum, message };
  } else {
    const diff = subtractNumbers(n1, n2);
    const message = `Numbers are NOT both even (${n1}, ${n2}). Difference Result = |${n1} - ${n2}| = ${diff}`;
    return { operation: "difference", result: diff, message };
  }
}
