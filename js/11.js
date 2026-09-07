/**
 * Question 11:
 * Write JavaScript programs to handle errors using:
 * a) try...catch statement
 * b) window.onerror event
 */

// Part a: Error handling using try...catch statement
function demonstrateTryCatch(inputA, inputB) {
  let resultMsg = "";
  try {
    const numA = Number(inputA);
    const numB = Number(inputB);

    if (isNaN(numA) || isNaN(numB)) {
      throw new Error("Invalid Input: Both values must be valid numbers.");
    }

    if (numB === 0) {
      throw new Error("DivisionByZeroError: Cannot divide a number by zero.");
    }

    const divisionResult = numA / numB;
    resultMsg = `[try...catch] Division successful: ${numA} / ${numB} = ${divisionResult}`;
  } catch (error) {
    resultMsg = `[try...catch] Exception caught successfully!\nError Type: ${error.name}\nError Message: ${error.message}`;
  } finally {
    resultMsg += "\n[try...catch] 'finally' block executed.";
  }

  return resultMsg;
}

// Global variable to store window.onerror log for presentation
let lastWindowErrorLog = "No global window.onerror event triggered yet.";

// Setup window.onerror error handler
window.onerror = function (msg, url, lineNo, columnNo, error) {
  lastWindowErrorLog = `[window.onerror] Global Error Intercepted!\nMessage: ${msg}\nLine: ${lineNo}, Column: ${columnNo}\nURL: ${url}`;
  console.error(lastWindowErrorLog);

  // Update UI container if element exists
  const resultElem = document.getElementById("q11b-result");
  if (resultElem) {
    resultElem.innerText = lastWindowErrorLog;
  }

  // Return true to prevent default browser error reporting alert/console spam
  return true;
};

// Part b: Trigger uncaught error to demonstrate window.onerror
function triggerWindowOnErrorDemo() {
  // Purposeful uncaught reference error call
  setTimeout(() => {
    // Calling an undefined function triggers global window.onerror handler
    nonExistentFunctionCallForDemo();
  }, 10);
}
