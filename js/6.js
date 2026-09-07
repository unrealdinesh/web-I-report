/**
 * Question 6:
 * Create an associative array in JavaScript and display its content using a for...in loop.
 */

function displayAssociativeArray(assocArray) {
  // If no custom object provided, use a default sample associative array
  if (!assocArray || typeof assocArray !== "object") {
    assocArray = {
      name: "Dinesh Basnet",
      rollNo: 48,
      course: "BIT",
      semester: "4th Semester",
      subject: "Web Technology",
    };
  }

  let outputLines = [];
  let resultText = "Associative Array Content:\n";

  for (let key in assocArray) {
    if (assocArray.hasOwnProperty(key)) {
      const line = `${key} : ${assocArray[key]}`;
      outputLines.push(line);
      resultText += `  ${line}\n`;
    }
  }

  return {
    data: assocArray,
    outputLines: outputLines,
    message: resultText.trim(),
  };
}
