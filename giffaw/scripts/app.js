var apiURL = 'http://api.giphy.com/v1/gifs/search?q=';
var apiKey = 'TB0Ddak2LwbfTFIfNT09QB9UQ3HMBP5F';



$(document).on("ready", function(){
  $('form').on('submit', function(e) {
    e.preventDefault();

    var searchValue = $('.gif-input').val();

    $.ajax({
      method: 'GET',
      url: `${apiURL}${searchValue}&api_key=${apiKey}`,
      // data: $('form').serialize(),
      success: function (response) {
        // console.log(response);
        for(var i = 0; i < response.data.length; i++) {
          // console.log(response);
          $('.gif-gallery').append(`
            <img src="${response.data[i].images.original.url}">
            `);
        }
      }
    });
  });
});
