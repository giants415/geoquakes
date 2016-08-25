  var map;

  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 37.78, lng: -122.44},
      zoom: 2, //originally 12 to zoom in on SF proper
      mapTypeId: 'terrain',
    });
  };

  // ^^ base googlemap API

      // function initialize() {
      //   map = new google.maps.Map(document.getElementById('map'), {
      //     zoom: 2,
      //     center: new google.maps.LatLng(37.78,-122.44),
      //     mapTypeId: 'terrain'
      //   });


      window.eqfeed_callback = function(json) {
              for (var i = 0; i < json.features.length; i++) {
                var coords = json.features[i].geometry.coordinates;
                var latLng = new google.maps.LatLng(coords[1],coords[0]);
                var marker = new google.maps.Marker({
                  position: latLng,
                  map: map
                });
              }
            }
