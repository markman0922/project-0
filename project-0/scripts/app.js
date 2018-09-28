
$('document').ready(function() {
  $('nav a').on('click', function(e) {
    e.preventDefault();
    var navTarget = $(this).attr('href');
    var targetOffset = $(navTarget).offset().top;
    $('html').animate({
      scrollTop: targetOffset
    }, 800);
  });

  $('nav span').hide();


  $(window).scroll(function() {
    if($(window).scrollTop() >= 100) {
      $('nav, nav a').addClass('animate');
      $('nav span').show();
    } else if($(window).scrollTop() <= 100) {
      $('nav, nav a').removeClass('animate');
      $('nav span').hide();
    }
  });

  $(function(){
    $('.carousel-item').eq(0).addClass('active');
    var total = $('.carousel-item').length;
    var current = 0;
    $('#moveRight').on('click', function(){
      var next = current;
      current = current + 1;
      setSlide(next, current);
    });
    $('#moveLeft').on('click', function(){
      var prev = current;
      current = current- 1;
      setSlide(prev, current);
    });
    function setSlide(prev, next){
      var slide = current;
      if(next > total - 1){
       slide = 0;
       current = 0;
      }
      if(next < 0){
        slide = total - 1;
        current = total - 1;
      }

   $('.carousel-item').eq(prev).removeClass('active');
   $('.carousel-item').eq(slide).addClass('active');
    setTimeout(function(){

    },800);

      console.log('current '+ current);
      console.log('prev '+ prev);
    }
  });
});
