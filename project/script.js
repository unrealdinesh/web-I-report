/*
  Web Technology I - Final Project
  Student Name: Dinesh Basnet
  File: script.js
  Modular client-side JavaScript for navigation and form handling
*/

// Wait for the DOM to fully load before attaching event listeners
document.addEventListener("DOMContentLoaded", function () {
  console.log("TechZone Solutions Web App loaded successfully.");

  // 1. Highlight active navigation link based on current page filename
  highlightActiveNavLink();

  // 2. Attach contact form validation if on the contact page
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", handleFormSubmit);
  }

  // 3. Dynamic footer year update
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

/**
 * Highlights current navigation link
 */
function highlightActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(function (link) {
    const linkHref = link.getAttribute("href");
    if (currentPath.endsWith(linkHref)) {
      link.classList.add("active");
    }
  });
}

/**
 * Validates and handles contact form submission
 * @param {Event} event 
 */
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent standard page reload

  const statusMsg = document.getElementById("statusMsg");
  const nameInput = document.getElementById("fullName");
  const emailInput = document.getElementById("emailAddress");
  const serviceSelect = document.getElementById("serviceType");
  const messageInput = document.getElementById("messageText");

  // Reset status message
  statusMsg.className = "status-msg";
  statusMsg.textContent = "";

  const nameVal = nameInput.value.trim();
  const emailVal = emailInput.value.trim();
  const serviceVal = serviceSelect.value;
  const messageVal = messageInput.value.trim();

  // Basic validation checks
  if (nameVal === "") {
    showError(statusMsg, "Please enter your full name.");
    nameInput.focus();
    return;
  }

  if (emailVal === "") {
    showError(statusMsg, "Please enter your email address.");
    emailInput.focus();
    return;
  }

  // Simple email format check using standard regular expression
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailVal)) {
    showError(statusMsg, "Please enter a valid email address (e.g., student@example.com).");
    emailInput.focus();
    return;
  }

  if (serviceVal === "") {
    showError(statusMsg, "Please select an inquiry service category.");
    serviceSelect.focus();
    return;
  }

  if (messageVal.length < 10) {
    showError(statusMsg, "Your message must contain at least 10 characters.");
    messageInput.focus();
    return;
  }

  // If all validation passes
  statusMsg.className = "status-msg success";
  statusMsg.textContent = "Thank you, " + nameVal + "! Your inquiry regarding '" + serviceVal + "' has been submitted successfully. We will reply to " + emailVal + " shortly.";

  // Clear form fields
  document.getElementById("contactForm").reset();
}

/**
 * Displays error message in alert box
 */
function showError(element, message) {
  element.className = "status-msg error";
  element.textContent = "Error: " + message;
}
