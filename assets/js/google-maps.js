function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 28.525412, lng: 77.154715};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Vasant Kunj, New Delhi' // Title Location
    });
}
