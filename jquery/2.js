/**
 * jQuery Lab - Question 2 (15):
 * Write a jQuery program to animate a car with options to move forward, stop, and reverse.
 */

$(document).ready(function () {
  const $car = $("#car");
  const trackWidth = $("#track").width() - $car.width() - 20;

  // Move Forward (Right)
  $("#btn-forward").on("click", function () {
    const currentLeft = parseInt($car.css("left"), 10) || 0;
    const remainingDistance = trackWidth - currentLeft;
    const duration = (remainingDistance / trackWidth) * 3000;

    $car.stop().animate(
      {
        left: trackWidth + "px",
      },
      duration > 0 ? duration : 3000,
      "linear",
      function () {
        $("#car-status").text("Status: Car reached the end of the track.");
      }
    );
    $("#car-status").text("Status: Moving Forward >>");
  });

  // Stop Animation
  $("#btn-stop").on("click", function () {
    $car.stop();
    $("#car-status").text("Status: Stopped");
  });

  // Reverse (Left / Back to start)
  $("#btn-reverse").on("click", function () {
    const currentLeft = parseInt($car.css("left"), 10) || 0;
    const duration = (currentLeft / trackWidth) * 3000;

    $car.stop().animate(
      {
        left: "0px",
      },
      duration > 0 ? duration : 3000,
      "linear",
      function () {
        $("#car-status").text("Status: Car returned to start position.");
      }
    );
    $("#car-status").text("Status: Reversing <<");
  });
});
