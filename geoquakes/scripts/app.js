// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
var map;


$(document).ready(function() {
  // Get Earthquake data
  $.ajax({
    method: 'GET',
    url: weekly_quakes_endpoint,
    success: function(response) {
      console.log(response);
      for(var i = 0; i < response.features.length; i++) {
        var earthquakeTitle = response.features[i].properties.title;
        $('#info').append(`
          <p>
            ${earthquakeTitle}
            <span class="dot ${
              response.features[i].properties.mag <= 4.9 ? 'low-mag' : ''
            }"></span>
          </p>
        `)
      }
    },
    error: function(error) {
      console.log(error);
    }
  });

  // Get earthquake coordinates
  $.ajax({
    method: 'GET',
    url: weekly_quakes_endpoint,
    success: function(response) {
      for(var i = 0; i < response.features.length; i++) {
        var earthquakeCoords = response.features[i].geometry.coordinates;
        var latLong = new google.maps.LatLng(earthquakeCoords[1], earthquakeCoords[0]);
        var pin =  new google.maps.Marker({
          position: latLong,
          map: map
        });
      }
    }
  });

  // Initialize map
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 37.78, lng: -122.44},
      zoom: 8
    });
  }

  initMap();
});
