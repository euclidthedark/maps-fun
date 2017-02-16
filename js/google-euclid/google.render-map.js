"use strict";

const RenderMap = (function () {

  function createMarkers (arr, map) {
    for (let i = 0; i < arr.length; i++) {
      let marker = new google.maps.Marker({
        map,
        position: arr[i]
      });
    }
  }

  let m = {
    createMap: function (el, arr, zoom, mapTypeId) {
      let map = new google.maps.Map(el, {
        zoom,
        center: arr[0],
        mapTypeId
      });

      createMarkers(arr, map);
    }
  };

  return m;

})();
