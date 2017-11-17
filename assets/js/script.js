$(document).ready(function() {
  // Menu states
  var active1 = false;
  var active2 = false;
  var active3 = false;
  
  $('.main-nav').on('mousedown touchstart', function() {
  console.log('Attempting to transform Facebook icon...');
  if (!active1) {
    $(this).find('.­­facebook1').css({'transform': 'translate(150px,0px)'});
  } else {
    $(this).find('.facebook').css({'transform': 'none'});
  }
  
  if (!active2) {
    $(this).find('.twitter').css({'transform': 'translate(200px,0px)'});
    $(this).find('.nav-link').css({'opacity': '1'});
    } else {
    $(this).find('.twitter').css({'transform': 'none'});
    $(this).find('.nav-link').css({'opacity': '0'});
  };
  if (!active3) {
    $(this).find('.test3').css({'transform': 'translate(300px,0px)'});
  } else {
    $(this).find('.test3').css({'transform': 'none'});
  };

  console.log('Toggling menu state...');
  active1 = !active1;
  active2 = !active2;
  active3 = !active3;
  });
  // Slider
  $(function() {
    $(".rslides").responsiveSlides({
      auto: true,             // Boolean: Animate automatically, true or false
      speed: 500,             // Integer: Speed of the transition, in milliseconds
      timeout: 10000,         // Integer: Time between slide transitions, in milliseconds
      pager: false,           // Boolean: Show pager, true or false
      nav: false,             // Boolean: Show navigation, true or false
      random: true,          // Boolean: Randomize the order of the slides, true or false
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
  // NB Fixed Navigation Bar
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('#mainNav').addClass('fixed-navbar');
    } else {
        $('#mainNav').removeClass('fixed-navbar');
    }
  });
});