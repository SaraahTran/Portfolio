$(document).ready(function () {
    // typing animation
    (function ($) {
      $.fn.writeText = function (content) {
        var contentArray = content.split(""),
          current = 0,
          elem = this;
        setInterval(function () {
          if (current < contentArray.length) {
            elem.text(elem.text() + contentArray[current++]);
          }
        }, 80);
      };
    })(jQuery);
  
    // input text for typing animation
    $("#holder").writeText("WEB DESIGNER + FRONT-END DEVELOPER");
  
    // initialize wow.js
    new WOW().init();
  
    // Push the body and the nav over by 285px over
    var main = function () {
      $(".fa-bars").click(function () {
        $(".nav-screen").animate(
          {
            right: "0px"
          },
          200
        );
  
        $("body").animate(
          {
            right: "285px"
          },
          200
        );
      });
  
      // Then push them back */
      $(".fa-times").click(function () {
        $(".nav-screen").animate(
          {
            right: "-285px"
          },
          200
        );
  
        $("body").animate(
          {
            right: "0px"
          },
          200
        );
      });
  
      $(".nav-links a").click(function () {
        $(".nav-screen").animate(
          {
            right: "-285px"
          },
          500
        );
  
        $("body").animate(
          {
            right: "0px"
          },
          500
        );
      });
    };
  
    $(document).ready(main);
  
    // initiate full page scroll
  
    $("#fullpage").fullpage({
      scrollBar: true,
      responsiveWidth: 900,
      navigation: true,
      navigationTooltips: ["first", "second", "third", "fourth"],
      anchors: ["first", "second", "third", "fourth"],
      menu: "#myMenu",
      fitToSection: true,
  
      afterLoad: function (anchorLink, index) {
        var loadedSection = $(this);
  
        //using index
        if (index == 1) {
          /* add opacity to arrow */
          $(".fa-chevron-down").each(function () {
            $(this).css("opacity", "1");
          });
          $(".header-links a").each(function () {
            $(this).css("color", "white");
          });
          $(".header-links").css("background-color", "transparent");
        } else if (index != 1) {
          $(".header-links a").each(function () {
            $(this).css("color", "black");
          });
          $(".header-links").css("background-color", "white");
        }
  
        //using index
        if (index == 2) {
          /* animate skill bars */
          $(".skillbar").each(function () {
            $(this)
              .find(".skillbar-bar")
              .animate(
                {
                  width: $(this).attr("data-percent")
                },
                2500
              );
          });
        }
      }
    });

  
    // fullpage.js link navigation
   $(document).on("click", "#skills", function () {
      $.fn.fullpage.moveTo(3);
    });
  
    $(document).on("click", "#projects", function () {
      $.fn.fullpage.moveTo(4);
 });
  
    $(document).on("click", "#about", function () {
      $.fn.fullpage.moveTo(2);
    });

   $(document).on("click", "#home", function () {
      $.fn.fullpage.moveTo(1);
    });
  

  
    //ajax form
    $(function () {
      // Get the form.
      var form = $("#ajax-contact");
  
      // Get the messages div.
      var formMessages = $("#form-messages");
  
      // Set up an event listener for the contact form.
      $(form).submit(function (e) {
        // Stop the browser from submitting the form.
        e.preventDefault();
  
        // Serialize the form data.
        var formData = $(form).serialize();
  
        // Submit the form using AJAX.
        $.ajax({
          type: "POST",
          url: $(form).attr("action"),
          data: formData
        })
          .done(function (response) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass("error");
            $(formMessages).addClass("success");
  
            // Set the message text.
            $(formMessages).text(response);
  
            // Clear the form.
            $("#name").val("");
            $("#email").val("");
            $("#message").val("");
          })
          .fail(function (data) {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass("success");
            $(formMessages).addClass("error");
  
            // Set the message text.
            if (data.responseText !== "") {
              $(formMessages).text(data.responseText);
            } else {
              $(formMessages).text(
                "Oops! An error occured and your message could not be sent."
              );
            }
          });
      });
    });
  });
  

document.addEventListener("DOMContentLoaded", function() {
  var wrap = document.getElementById('wrap');
  var fps = new FullPageScroll(wrap);
  var indicator = document.createElement('div');
  indicator.id = 'indicator';
  var slideIndicators = [];
  fps.slides.forEach(function(slide, index){
    var slideIndicator = document.createElement('div');
    slideIndicator.onclick = function() {
      fps.goToSlide(index);
    }
    if (index === fps.currentSlide) {
      slideIndicator.className = "active";
    }
    indicator.appendChild(slideIndicator);
    slideIndicators.push(slideIndicator);
  });
  document.body.appendChild(indicator);
  fps.onslide = function() {
    slideIndicators.forEach(function(slideIndicator, index) {
      if (index === fps.currentSlide) {
        slideIndicator.className = "active";
      } else {
        slideIndicator.className = "";
      }
    });
  }
});



var $window = $(window);
var $header = $('#header');
var pause;

//function to check if window has scrolled past header
var fixHeader = function() {
  var windowTop = $window.scrollTop();
  var headerHeight = $header.outerHeight();
  if (windowTop > headerHeight * 3) {
    $header.addClass('raise');
    setTimeout(function() {
      $header.removeClass('raise').addClass('fixed');
      if ($window.scrollTop() <= 1) {
        $header.removeClass('fixed raise');
      }
    }, 1000);
  } else {
    $header.removeClass('fixed raise');
  }
};





//on scroll event;
$window.on('scroll', function() {
  clearTimeout(pause);
  pause = setTimeout(fixHeader(), 300);
});


//nav toggle
$('.nav-toggle').on('click', function() {
  $header.toggleClass('opened');
  $('nav').slideToggle();
  return false;
});

