/**
 * Question 3:
 * Write a JavaScript program to add two numbers only if both are prime.
 * Use a user-defined function to check for primality before performing the addition.
 */

// User-defined function to check if a number is prime
function isPrime(num) {
  num = Number(num);
  if (!Number.isInteger(num) || num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

// Function to add two numbers only if both are prime
function addIfPrimes(num1, num2) {
  const n1 = Number(num1);
  const n2 = Number(num2);

  const isN1Prime = isPrime(n1);
  const isN2Prime = isPrime(n2);

  if (isN1Prime && isN2Prime) {
    const sum = n1 + n2;
    const message = `Both ${n1} and ${n2} are prime numbers. Sum = ${sum}`;
    return { success: true, result: sum, message };
  } else {
    let nonPrimes = [];
    if (!isN1Prime) nonPrimes.push(`${n1} is NOT prime`);
    if (!isN2Prime) nonPrimes.push(`${n2} is NOT prime`);

    const message = `Addition aborted: ${nonPrimes.join(" and ")}.`;
    return { success: false, result: null, message };
  }
}
