$(document).ready(function() {
  var active1 = false;
  var active2 = false;
  var active3 = false;
  var active4 = false;
  var active5 = false;

  $('.main-nav').on('mousedown touchstart', function() {
  // Check current menu state, then changes CSS.
  console.log('Changing menu state...');
  if (!active1) {
    $(this).find('.­­test1').css({'transform': 'translate(150px,0px)'});
  } else {
    $(this).find('.test1').css({'transform': 'none'});
  }
  // Education
  if (!active2) {
    $(this).find('.test2').css({'transform': 'translate(200px,0px)'});
    $(this).find('.nav-link').css({'opacity': '1'});
    } else {
    $(this).find('.test2').css({'transform': 'none'});
    $(this).find('.nav-link').css({'opacity': '0'});
  };
  // Code
  if (!active3) {
    $(this).find('.test3').css({'transform': 'translate(300px,0px)'});
  } else {
    $(this).find('.test3').css({'transform': 'none'});
  };
  // Message
  if (!active4) {
    $(this).find('.test4').css({'transform': 'translate(400px,0px)'});
  } else {
    $(this).find('.test4').css({'transform': 'none'});
  };
  // Gear
  if (!active5) {
    $(this).find('.test5').css({'transform': 'translate(500px,0px)'});
  } else {
    $(this).find('.test5').css({'transform': 'none'});
  }
  active1 = !active1;
  active2 = !active2;
  active3 = !active3;
  active4 = !active4;
  active5 = !active5;
  });
  // Slider
  $(function() {
    $(".rslides").responsiveSlides({
      auto: true,             // Boolean: Animate automatically, true or false
      speed: 500,             // Integer: Speed of the transition, in milliseconds
      timeout: 10000,         // Integer: Time between slide transitions, in milliseconds
      pager: false,           // Boolean: Show pager, true or false
      nav: false,             // Boolean: Show navigation, true or false
      random: true,           // Boolean: Randomize the order of the slides, true or false
      pause: false,           // Boolean: Pause on hover, true or false
      pauseControls: true,    // Boolean: Pause when hovering controls, true or false
      prevText: "Previous",   // String: Text for the "previous" button
      nextText: "Next",       // String: Text for the "next" button
      maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
      navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
      manualControls: "",     // Selector: Declare custom pager navigation
      namespace: "rslides",   // String: Change the default namespace used
      before: function(){},   // Function: Before callback
      after: function(){}     // Function: After callback
    });
  });
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('.menu').addClass('fixed-navbar');
    } else {
        $('.menu').removeClass('fixed-navbar');
    }
  });
});