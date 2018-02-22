$(function() {

  var width = 70;
  var animationSpeed = 1000;
  var pause = 3000;
  var currentSlide = 1;

  var $slider = $('#slider');
  var $slideCont = $slider.find('.slides');
  var $slides = $slideCont.find('.slide');

  var interval;

  function startSlide() {

    interval = setInterval(function() {
      $slideCont.animate({'margin-left': '-=' + width + 'vw'}, animationSpeed, function() {
        currentSlide++;
        if (currentSlide === $slides.length) {
         currentSlide = 1;
         $slideCont.css({'margin-left': 0});
        }
      });
    }, pause);

  }

  function stopSlide() {
    clearInterval(interval);
  }

  $slider.on('mouseenter', stopSlide).on('mouseleave', startSlide);

  startSlide();

});