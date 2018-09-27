

$('document').ready(function() {
  $('nav a').on('click', function(e) {
    e.preventDefault();
    var navTarget = $(this).attr('href');
    var targetOffset = $(navTarget).offset().top;
    $('html').animate({
      scrollTop: targetOffset
    }, 800);
  });

});
