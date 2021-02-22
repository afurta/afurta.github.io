$(document).ready(function(){

  $('.reviews-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: "<img src='./img/reviews/prev.png' class='prev' alt='1'>",
    nextArrow: "<img src='./img/reviews/next.png' class='next' alt='2'>"
  });
  
  $('.instructor_block_descr').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000, 
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('.slider-center_wrapper').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });

  var btn = $('.btn-form'),
      btn_close = $('.btn-close'),
      form = $('.form'); 

  btn.on('click', function(){
    form.fadeIn(1000);
  });

  btn_close.on('click', function(){
    form.hide(300);
  });

});


