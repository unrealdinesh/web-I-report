/**
 * Question 5:
 * Write a JavaScript program to compare two strings.
 * - If they are equal, display: "The first string is in uppercase"
 *   (Note: Also outputs the first string converted to uppercase as requested by problem format)
 * - Otherwise, display: "The strings are not equal"
 */

// Function to compare two strings
function compareTwoStrings(str1, str2) {
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    str1 = String(str1);
    str2 = String(str2);
  }

  if (str1 === str2) {
    const uppercaseFirstString = str1.toUpperCase();
    const resultMessage = `The first string is in uppercase: ${uppercaseFirstString}`;
    return {
      isEqual: true,
      message: resultMessage,
      uppercaseString: uppercaseFirstString,
    };
  } else {
    const resultMessage = "The strings are not equal";
    return {
      isEqual: false,
      message: resultMessage,
      uppercaseString: null,
    };
  }
}
