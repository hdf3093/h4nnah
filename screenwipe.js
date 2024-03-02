$(document).ready(function () {
    // $("#caption").hide();
  
    setTimeout(function () {
      $(".screenwipe").css("animation", "none").hide();
    //   $("#caption").fadeIn(2500);
  
      // Change the selector to target your Enter button by its ID or class
      $(".enter-link").click(function () {
        console.log("Enter button clicked!");
        $(".screenwipe").fadeIn().css("width", "0px");
        $(".screenwipe").css("animation", "wipe 1.25s ease-in-out .1s forwards normal");
  
        setTimeout(function () {
          window.location.href = "/enter/"; // navigate out
        }, 1500);
      });
    }, 2700);
  });
  

  