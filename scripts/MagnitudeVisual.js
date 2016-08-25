var map;

      function initialize() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 2,
          center: new google.maps.LatLng(37.78,-122.44),
          mapTypeId: 'terrain'
        });

        var script = document.createElement('script');

        window.eqfeed_callback = function(results) {
                for (var i = 0; i < results.features.length; i++) {
                  var coords = results.features[i].geometry.coordinates;
                  var latLng = new google.maps.LatLng(coords[1],coords[0]);
                  var marker = new google.maps.Marker({
                    position: latLng,
                    map: map
                  });
                }
              }
