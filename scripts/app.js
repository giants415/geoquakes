// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
var $quakesList;
var map;
var template;

$(document).on("ready", function() {

initMap()

  $.ajax ({
    method: 'GET',
    url: weekly_quakes_endpoint,
    datatype: 'json',
    success: onSuccess,
  });

  function onSuccess(json) {
    //SUCCESS calls first earthquake
    //console.log(json.features[0]);

    var jsonData = json;
    console.log("heres our data:", jsonData);

    var source = $('#recent_earthquakes').html();
      console.log(source);

    var quakeTemplate = Handlebars.compile(source);

    var quakeHtml = quakeTemplate({earthquakes: jsonData.features });

    // var quakeHtml = quakeTemplate({
    //   magnitude: jsonData.features[i].properties.mag,
    //   quake_location: jsonData.features[i].properties.place,
    // });

    console.log(quakeHtml);

    $("#quake_list").append(quakeHtml);


  };
});

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.78, lng: -122.44},
    zoom: 2, //originally 12 to zoom in on SF proper
    mapTypeId: 'terrain',
  });
};
