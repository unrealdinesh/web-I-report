/**
 * Question 2:
 * Write a JavaScript program that accepts a number and:
 * - Finds its reverse
 * - Checks if it is a palindrome
 * - Checks if it is an Armstrong number
 */

// Function to find the reverse of a number
function reverseNumber(num) {
  const isNegative = num < 0;
  const strNum = Math.abs(num).toString();
  const reversedStr = strNum.split("").reverse().join("");
  const reversedNum = parseInt(reversedStr, 10);
  return isNegative ? -reversedNum : reversedNum;
}

// Function to check if a number is a palindrome
function isPalindrome(num) {
  if (num < 0) return false;
  return num === reverseNumber(num);
}

// Function to check if a number is an Armstrong number
function isArmstrong(num) {
  if (num < 0) return false;
  const strNum = num.toString();
  const numDigits = strNum.length;
  let sum = 0;

  for (let digitChar of strNum) {
    const digit = parseInt(digitChar, 10);
    sum += Math.pow(digit, numDigits);
  }

  return sum === num;
}

// Function to analyze a number and output results
function analyzeNumber(inputNum) {
  const num = Number(inputNum);

  if (isNaN(num)) {
    console.log("Invalid input! Please enter a valid number.");
    return null;
  }

  const reversed = reverseNumber(num);
  const palindrome = isPalindrome(num);
  const armstrong = isArmstrong(num);

  console.log(`Input Number: ${num}`);
  console.log(`Reverse of Number: ${reversed}`);
  console.log(`Is Palindrome? ${palindrome ? "Yes" : "No"}`);
  console.log(`Is Armstrong Number? ${armstrong ? "Yes" : "No"}`);

  return {
    number: num,
    reverse: reversed,
    isPalindrome: palindrome,
    isArmstrong: armstrong,
  };
}
