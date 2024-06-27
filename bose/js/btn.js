let navSlide = 0;

$(function(){
  $('.btn').on('click' , function(){
    $('.btn').toggleClass('active');
  });

  $('.btn').click(function () {
    if (navSlide === 1) {
      $('.nav_wrap').stop().animate({
        'left': '100%'
      }, 500, 'easeOutExpo');
      $('.modal').stop().fadeOut(300);
      navSlide = 0;
    } else {
      $('.nav_wrap').stop().animate({
        'left': '10%'
      }, 500, 'easeOutExpo');
      $('.modal').stop().fadeIn(300);
      navSlide = 1;
    }
  });
});