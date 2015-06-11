(function () {

    function initialize() {
        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: new google.maps.LatLng(50.4213725, 30.5700394),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.SATELLITE//ROADMAP
        };

        var map = new google.maps.Map(mapCanvas, mapOptions);

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(50.419431, 30.571008),
            map: map,
            title: 'Meeting here'
        });

        var infowindow = new google.maps.InfoWindow({
            content: '<p>Meeting here</p>'
        });

        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
        });

        infowindow.open(map, marker);

    }

    google.maps.event.addDomListener(window, 'load', initialize);

})();