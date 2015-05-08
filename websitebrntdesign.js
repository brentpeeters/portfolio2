// photo
var main = function () {
  "use strict"
    setInterval(volgende, 3000);
}
    function volgende() {

    if ($('.foto1').hasClass('select')) {
      $('.foto1').fadeOut(1000, function() {
      $('.foto1').removeClass('select');
      $('.foto2').fadeIn(1000, function () {
      $('.foto2').addClass('select');
      });
      });
    }

    else if ($('.foto2').hasClass('select')) {
       $('.foto2').fadeOut(1000, function() {
       $('.foto2').removeClass('select');
       $('.foto3').fadeIn(1000, function () {
       $('.foto3').addClass('select');
      });
      });
    }

    else {
       $('.foto3').fadeOut(1000, function() {
       $('.foto3').removeClass('select');
       $('.foto1').fadeIn(1000, function () {
       $('.foto1').addClass('select');
       });
       });
    }
  };
  
$("document").ready(main);



// Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) { 
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});

// navigation scroll 
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});






