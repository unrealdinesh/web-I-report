/**
 * Question 13:
 * Create a Form and write a JavaScript program to validate the following user inputs:
 * - Email: must be valid email and end with @gmail.com or @hotmail.com
 * - Phone number: NTC (9841****** or 9851******) or NCELL (980*******)
 * - Password: At least 1 capital letter, 1 small letter, 1 number, 1 special symbol, min length 12
 */

// Email validation
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com)$/i;
  return emailRegex.test(email.trim());
}

// Phone number validation (NTC: 9841/9851 + 6 digits; NCELL: 980 + 7 digits)
function validatePhoneNumber(phone) {
  const phoneRegex = /^(9841\d{6}|9851\d{6}|980\d{7})$/;
  return phoneRegex.test(phone.trim());
}

// Password validation
function validatePassword(password) {
  const errors = [];
  if (password.length < 12) {
    errors.push("Must be at least 12 characters long.");
  }
  if (!/[A-Z]/.test(password)) {
    errors.push("Must contain at least one capital letter (A-Z).");
  }
  if (!/[a-z]/.test(password)) {
    errors.push("Must contain at least one small letter (a-z).");
  }
  if (!/[0-9]/.test(password)) {
    errors.push("Must contain at least one number (0-9).");
  }
  if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
    errors.push("Must contain at least one special symbol.");
  }

  return {
    isValid: errors.length === 0,
    errors: errors,
  };
}

// Main form validation function
function validateFormInputs(email, phone, password) {
  const results = [];
  let isAllValid = true;

  // Validate Email
  if (validateEmail(email)) {
    results.push("✔ Email: Valid (@gmail.com or @hotmail.com)");
  } else {
    isAllValid = false;
    results.push(
      "✖ Email: Invalid (Must be valid email ending with @gmail.com or @hotmail.com)"
    );
  }

  // Validate Phone
  if (validatePhoneNumber(phone)) {
    const provider = phone.startsWith("980") ? "NCELL" : "NTC";
    results.push(`✔ Phone Number: Valid ${provider} number (${phone})`);
  } else {
    isAllValid = false;
    results.push(
      "✖ Phone Number: Invalid (Must be NTC: 9841xxxxxx / 9851xxxxxx or NCELL: 980xxxxxxx)"
    );
  }

  // Validate Password
  const pwdCheck = validatePassword(password);
  if (pwdCheck.isValid) {
    results.push(
      "✔ Password: Valid (Meets all complexity & min 12 chars requirement)"
    );
  } else {
    isAllValid = false;
    results.push(
      "✖ Password: Invalid\n   - " + pwdCheck.errors.join("\n   - ")
    );
  }

  const statusHeader = isAllValid
    ? "=== FORM VALIDATION SUCCESSFUL ==="
    : "=== FORM VALIDATION FAILED ===";

  return {
    isValid: isAllValid,
    message: `${statusHeader}\n\n${results.join("\n")}`,
  };
}
