	var map;

	// function initialize() {
	// 	var mapOptions = {
	// 		zoom: 2,
	// 		center: {lat: -33.865427, lng: 151.196123},
	// 		mapTypeId: 'terrain'
	// 	};

  function initialize() {
      var mapOptions = {
        zoom: 2,
        center: {lat: 37.78, lng: -122.44},
        mapTypeId: 'terrain'
      };
  
      map = new google.maps.Map(document.getElementById('map'),
          mapOptions);

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
};

      map.data.setStyle(function(feature) {
                var magnitude = feature.getProperty('mag');
                return {
                  icon: getCircle(magnitude)
                };
              });
            };

            function getCircle(magnitude) {
              var circle = {
                path: google.maps.SymbolPath.CIRCLE,
                fillColor: 'red',
                fillOpacity: .2,
                scale: Math.pow(2, magnitude) / 2,
                strokeColor: 'white',
                strokeWeight: .5
              };
              return circle;
            };

            function eqfeed_callback(results) {
              map.data.addGeoJson(results);
            };
