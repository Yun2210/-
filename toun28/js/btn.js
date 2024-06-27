let navSlide = 0;

$(function(){
  $('.m-btn').on('click' , function(){
    $('.m-btn').toggleClass('active');
  });

  $('.m-btn').click(function () {
    if (navSlide === 1) {
      $('.nav_wrap').stop().animate({
        'left': '120%'
      }, 500, 'easeOutExpo');
      navSlide = 0;
    } else {
      $('.nav_wrap').stop().animate({
        'left': '0%'
      }, 500, 'easeOutExpo');
      navSlide = 1;
    }
  });
});