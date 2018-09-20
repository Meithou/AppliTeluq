
function initmap(){
      
  // Create a Google Maps native view under the map_canvas div.
  alert("initmap started");
  navigator.geolocation.getCurrentPosition(onSuccess, onError, { timeout: 10000 });
    function onSuccess(position) {
    var lat=position.coords.latitude;
    var address="Westmount, QC";
    var long=position.coords.longitude;
    var myLatLng = new google.maps.LatLng(lat,long);
    var map2 = new google.maps.Map(document.getElementById('map2'), {
      center: myLatLng,
      zoom: 12
    });
    var bounds = new google.maps.LatLngBounds();
    var markers = new Array();
    var geocoder = new google.maps.Geocoder();
    var markerDest;
    var markerStart = new google.maps.Marker({
      map: map2,
      position: new google.maps.LatLng(lat,long)
    
      });
      markers.push(markerStart);
      geocoder.geocode({'address': address}, function(results, status) {
         if (status === 'OK') {
          markerDest = new google.maps.Marker({
          map: map2,
          position: results[0].geometry.location
          });
          markers.push(markerDest);
          markers.forEach(function(mar){
                bounds.extend(mar.position);
              });
           // Work in progress to auto zoom and position camera between points
          map2.fitBounds(bounds);
          map2.panToBounds(bounds);
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
         }     });
         //  Create a new viewpoint bound
        //  Go through each...
              //  Fit these bounds to the map
              
        }
function onError(error) {
var map2;
    map2 = new google.maps.Map(document.getElementById('map2'), {
      center: {lat: -73.6088225647, lng: 45.5366945199},
      zoom: 17
    });
alert('code: ' + error.code + '\n' +
'message: ' + error.message + '\n');
}

var button2 = document.getElementById('buttonMaps');
button2.addEventListener("click", function() {
                         var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

                         if (iOS) {
                         window.open('maps:daddr=Westmount,+QC&saddr=Current+Location&directionsmode=transit', '_blank')
                         
                         }
                         else {
                         
window.open('geo:0,0?q=1825+Rue+Paul+le+Moyne,+Trois-Rivieres,+QC+G8Z+2V8&z=12', '_blank');
                         }
  });

}