  "use strict";

  let map;
  let mapId = document.querySelector('#map');

  function initMap() {
    var location = {lat: 39.1038, lng: -84.5144};
    map = new google.maps.Map(mapId, {
      center: location,
      zoom: 15
    });

    let marker = new google.maps.Marker({
      position: location,
      map: map
      });
  }
