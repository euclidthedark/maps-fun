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
    createMap: function (el, arr) {
      let map = new google.maps.Map(el, {
        zoom: 1,
        center: arr[0]
      });

      createMarkers(arr, map);
    }
  };

  return m;

})();
