
$('document').ready(function() {
  $('nav a').on('click', function(e) {
    e.preventDefault();
    var navTarget = $(this).attr('href');
    var targetOffset = $(navTarget).offset().top;
    $('html').animate({
      scrollTop: targetOffset
    }, 800);
  });

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

    }
  });

  $('#contact-name').on('input', function() {
    var input = $(this);
  	var isName = input.val();
  	if(isName){
      input.removeClass("invalid").addClass("valid");
    } else {
      input.removeClass("valid").addClass("invalid");
    }
  });

  $('#contact-email').on('input', function() {
    var input = $(this);
  	var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  	var isEmail = re.test(input.val());
  	if(isEmail){
      input.removeClass("invalid").addClass("valid");
    } else {
      input.removeClass("valid").addClass("invalid");
    }
  });

  $('#contact-phone').on('input', function() {
    var input = $(this);
    var check = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    var isPhone = check.test(input.val());
    if(isPhone){
      input.removeClass("invalid").addClass("valid");
    } else {
      input.removeClass("valid").addClass("invalid");
    }
  });

  $('#contact-message').keyup(function(e) {
    var input = $(this);
    var message = $(this).val();
    if(message) {
      input.removeClass('invalid').addClass('valid');
    } else {
      input.removeClass('valid').addClass('invalid');
    }
  });

  $('form').on('submit', function(e) {
    var form_data = $("#contact").serializeArray();
  	var errorFree = true;
  	for (var input in form_data) {
  		var element = $("#contact-" + form_data[input]['name']);
  		var valid = element.hasClass("valid");
  		var errorElement = $(".contact-content span", element.parent());

  		if (!valid) {
        errorElement.removeClass("error").addClass("error-show");
        errorFree = false;
      } else {
        errorElement.removeClass("error-show").addClass("error");
      }

      if(!errorFree) {
        e.preventDefault();

      } else {
        alert('Form Submitted');
      }
    };
  });


});
