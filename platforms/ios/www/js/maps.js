document.addEventListener("deviceready", function() {
  var div = document.getElementById("map_canvas");

  // Create a Google Maps native view under the map_canvas div.
  var map = plugin.google.maps.Map.getMap(div);

  // If you click the button, do something...
  var button = document.getElementById("button");
  button.addEventListener("click", function() {
  navigator.geolocation.getCurrentPosition(onSuccess, onError, { timeout: 30000 });
    function onSuccess(position) {
    var lat=position.coords.latitude;
    var lang=position.coords.longitude;
    // Move to the position with animation
    map.animateCamera({
      target: {lat: lat, lng: lang},
      zoom: 17,
      tilt: 60,
      bearing: 140,
      duration: 5000
    });

    // Add a maker
    var marker = map.addMarker({
      position: {lat: lat, lng: lang},
      title: "The Current Location",
      snippet: "Snippet Here",
      animation: plugin.google.maps.Animation.BOUNCE
    });

    // Show the info window
    marker.showInfoWindow();
 }
function onError(error) {
alert('code: ' + error.code + '\n' +
'message: ' + error.message + '\n');
}
  });
var button2 = document.getElementById("buttonMaps");
button2.addEventListener("click", function() {
  navigator.geolocation.getCurrentPosition(onSuccess, onError, { timeout: 30000 });
    function onSuccess(position) {
    var lat2=position.coords.latitude;
    var lang2=position.coords.longitude;
    var geocoords2 = lat2 + ',' + lang2;
    var marker2 = map.addMarker({
      position: {lat: lat2, lng: lang2},
      title: "Button Pressed",
      snippet: "Snippet Here",
      animation: plugin.google.maps.Animation.BOUNCE
    });

    // Show the info window
    marker2.showInfoWindow();
var label2 = encodeURI('You are here !'); // encode the label!
window.open('geo:0,0?q=1825+Rue+Paul+le+Moyne,+Trois-Rivières,+QC+G8Z+2V8&z=12', '_blank');

 }
function onError(error) {
alert('code: ' + error.code + '\n' +
'message: ' + error.message + '\n');
}
  });

}, false);