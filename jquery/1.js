/**
 * jQuery Lab - Question 1 (14):
 * Write a jQuery program to toggle the background color of a webpage.
 * Also, toggle a paragraph's visibility when a button is clicked.
 */

$(document).ready(function () {
  // Toggle background color of the webpage
  $("#toggle-bg-btn").on("click", function () {
    $("body").toggleClass("dark-theme");

    const isDark = $("body").hasClass("dark-theme");
    $("#bg-status-text").text(
      isDark ? "Current Mode: Dark Theme" : "Current Mode: Light Theme"
    );
  });

  // Toggle paragraph's visibility
  $("#toggle-para-btn").on("click", function () {
    $("#target-paragraph").slideToggle(400, function () {
      const isVisible = $(this).is(":visible");
      $("#para-status-text").text(
        isVisible ? "Paragraph Status: Visible" : "Paragraph Status: Hidden"
      );
    });
  });
});
