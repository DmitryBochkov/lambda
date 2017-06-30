//= jquery-1.12.4.min.js
//= bootstrap.min.js
//= jquery.easing.min.js
//= jquery.sticky.js
//= jquery.scrolly.js

$(document).ready(function(){
   $(".top-nav").sticky({topSpacing:0});

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
