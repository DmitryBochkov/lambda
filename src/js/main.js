//= jquery-1.12.4.min.js
//= bootstrap.min.js
//= jquery.easing.min.js
//= jquery.scrolly.js

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
   })

   // parallax
   $('.parallax-bg').scrolly({bgParallax: true});
 });
