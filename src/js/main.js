//= jquery-1.12.4.min.js
//= bootstrap.min.js
//= jquery.easing.min.js
//= ../../node_modules/pikaday/pikaday.js
//= ../../node_modules/gsap/src/minified/TweenMax.min.js
//= ../../node_modules/scrollmagic/scrollmagic/minified/ScrollMagic.min.js
//= ../../node_modules/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js

//date picker
var picker = new Pikaday({
  field: document.getElementById('datepicker')
 });

$(document).ready(function(){

  // fixed-nav
  function fixNav() {
    if ($(window).scrollTop() > 0) {
      $('body').addClass('fixed-nav');
    } else {
      $('body').removeClass('fixed-nav');

    }
  }

  $(window).on('scroll', fixNav);

   // smooth scroll
   $('.nav__item a').bind('click', function(e) {

     var anchor = $(this);
     var headerHeight= '68';

     $('html, body').stop().animate({
       scrollTop: $(anchor.attr('href')).offset().top - headerHeight + 'px'
     }, 1200, 'easeInOutSine');
     e.preventDefault();
   });

   // scroll spy
   $('body').scrollspy({
     target: '.navbar-collapse',
     offset: 95
   });

   // Init ScrollMagic
   var controller = new ScrollMagic.Controller();

   // parallax scene
   var parallaxTl1 = new TimelineMax();
   parallaxTl1
     .from('.ingredients__bg', 2, {y: '-50%', ease:Power0.easeNone}, 0) ;

   var ingredientsParallaxScene = new ScrollMagic.Scene({
     triggerElement: '#ingredients',
     triggerHook: 1,
     duration: '200%'
   })
   .setTween(parallaxTl1)
   .addTo(controller);

 });
