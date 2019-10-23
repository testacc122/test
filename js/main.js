(function ($) {
  "use strict";

  // Preloader (if the #preloader div exists)
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1) {
      $('#header').addClass('header-scrolled');
      $('.main-nav').delay(2500).fadeIn()
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

})(jQuery);

