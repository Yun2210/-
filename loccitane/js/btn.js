let navSlide = 0;

$(function(){
  $('.btn').on('click' , function(){
    $('.btn').toggleClass('active');
  });

  $('.btn').click(function () {
    if (navSlide === 0) {
      $('.nav_wrap').animate({
        'top': '80px'
      }, 500, 'easeOutExpo');
      navSlide = 1;
    } else {
      $('.nav_wrap').animate({
        'top': '-120%'
      }, 500, 'easeOutExpo');
      navSlide = 0;
    }
  })
});
