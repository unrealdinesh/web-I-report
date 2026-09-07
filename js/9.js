/**
 * Question 9:
 * Use the Date object to compare today's date with February 15, 2015.
 * Compare and Alert whether today's date is before or after the given date.
 */

function compareDateWithFeb152015(triggerAlert = false) {
  const today = new Date();
  const targetDate = new Date("2015-02-15T00:00:00");

  let status = "";
  let message = "";

  const options = { year: "numeric", month: "long", day: "numeric" };
  const todayFormatted = today.toLocaleDateString("en-US", options);
  const targetFormatted = targetDate.toLocaleDateString("en-US", options);

  if (today.getTime() > targetDate.getTime()) {
    status = "after";
    message = `Today's date (${todayFormatted}) is AFTER the given date (${targetFormatted}).`;
  } else if (today.getTime() < targetDate.getTime()) {
    status = "before";
    message = `Today's date (${todayFormatted}) is BEFORE the given date (${targetFormatted}).`;
  } else {
    status = "equal";
    message = `Today's date (${todayFormatted}) is EQUAL to the given date (${targetFormatted}).`;
  }

  // Trigger browser alert if requested
  if (triggerAlert) {
    alert(message);
  }

  return {
    today,
    targetDate,
    status,
    message,
  };
}
