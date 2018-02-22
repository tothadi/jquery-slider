$(function() {
  
  var width = 70 + 'vw';
  var animationSpeed = 1000;
  var pause = 3000;
  var current = 1;
  
  var slider = $('#slider');
  var slideCont = slider.find('.slides');
  var slide = slideCont.find('slide');
  
  var interval;
  
  function startSlide() {
    
    interval = setInterval(function() {
      slideCont.animate({'magin-left': '-=' + width}, animationSpeed, function() {
        current++;
        if (current === slide.length) {
         current = 1;
         slideCont.css({'margin-left': 0});
        }
      });
    }, pause);
    
  }
  
  function stopSlide() {
    clearInterval(interval);
  }
  
  slide.on('mouseenter', stopSlide).on('mouseleave', startSlide);
  
  startSlide();
  
  
});