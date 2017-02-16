"use strict";

const Convert = (function () {
  let geocoder = {
    convertAddress: function (addressObject)
    {

      let coordinate;
      let g = new google.maps.Geocoder();

      g.geocode(addressObject,
          function (res, status)
          {

          if (status === google.maps.GeocoderStatus.OK && res) {

            coordinate = {
              lat: res[0].geometry.location.lat(),
              lng: res[0].geometry.location.lng()
            };

          } else
          {
            alert('Please try again');
          }

          alert(JSON.stringify(coordinate));

          return coordinate;

      });
    }

  };

  return geocoder;

})();
