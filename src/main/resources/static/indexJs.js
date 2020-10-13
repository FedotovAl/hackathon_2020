// This example requires the Visualization library. Include the libraries=visualization
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization">

var map, heatmap;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: {lat: 51.787, lng: 45.445},
        mapTypeId: "satellite"
    });

    heatmap = new google.maps.visualization.HeatmapLayer({
        data: getPoints(),
        map: map
    });
}

function toggleHeatmap() {
    heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
    var gradient = [
        "rgba(0, 255, 255, 0)",
        "rgba(0, 255, 255, 1)",
        "rgba(0, 191, 255, 1)",
        "rgba(0, 127, 255, 1)",
        "rgba(0, 63, 255, 1)",
        "rgba(0, 0, 255, 1)",
        "rgba(0, 0, 223, 1)",
        "rgba(0, 0, 191, 1)",
        "rgba(0, 0, 159, 1)",
        "rgba(0, 0, 127, 1)",
        "rgba(63, 0, 91, 1)",
        "rgba(127, 0, 63, 1)",
        "rgba(191, 0, 31, 1)",
        "rgba(255, 0, 0, 1)"
    ];
    heatmap.set("gradient", heatmap.get("gradient") ? null : gradient);
}

function changeRadius() {
    heatmap.set("radius", heatmap.get("radius") ? null : 20);
}

function changeOpacity() {
    heatmap.set("opacity", heatmap.get("opacity") ? null : 0.2);
}

// Heatmap data: 500 Points
function getPoints() {
    return [
        new google.maps.LatLng(51.783, 45.445),
        new google.maps.LatLng(51.783, 45.442),
        new google.maps.LatLng(51.784, 45.441),
        new google.maps.LatLng(51.785, 45.449),
        new google.maps.LatLng(51.787, 45.446),
        new google.maps.LatLng(51.788, 45.445),
        new google.maps.LatLng(51.782, 45.445),
        new google.maps.LatLng(51.789, 45.465),
        new google.maps.LatLng(51.782, 45.445),
        new google.maps.LatLng(51.777, 45.442),
        new google.maps.LatLng(51.777, 45.446),
        new google.maps.LatLng(51.777, 45.450),
        new google.maps.LatLng(51.782, 45.444),
        new google.maps.LatLng(51.781, 45.443),
        new google.maps.LatLng(51.780, 45.442),
        new google.maps.LatLng(51.785, 45.442),
        new google.maps.LatLng(51.788, 45.442),
        new google.maps.LatLng(51.788, 45.450),
        new google.maps.LatLng(51.782, 45.451),
        new google.maps.LatLng(51.789, 45.451),
        new google.maps.LatLng(51.782, 45.452),
        new google.maps.LatLng(51.777, 45.452),
        new google.maps.LatLng(51.777, 45.453),
        new google.maps.LatLng(51.777, 45.454),
        new google.maps.LatLng(51.788, 45.444),
        new google.maps.LatLng(51.788, 45.443),
        new google.maps.LatLng(51.789, 45.444),
        new google.maps.LatLng(51.781, 45.447),
        new google.maps.LatLng(51.786, 45.448),
        new google.maps.LatLng(51.787, 45.455),
        new google.maps.LatLng(51.780, 45.456),
        new google.maps.LatLng(51.786, 45.459),
        new google.maps.LatLng(51.785, 45.460),
        new google.maps.LatLng(51.788, 45.448),
        new google.maps.LatLng(51.781, 45.459),
        new google.maps.LatLng(51.775, 45.456),
        new google.maps.LatLng(51.768, 45.449),
        new google.maps.LatLng(51.768, 45.448),
        new google.maps.LatLng(51.799, 45.446),
        new google.maps.LatLng(51.787, 45.467),
        new google.maps.LatLng(51.788, 45.468),
        new google.maps.LatLng(51.786, 45.461),
        new google.maps.LatLng(51.785, 45.451),
        new google.maps.LatLng(51.784, 45.455),
        new google.maps.LatLng(51.783, 45.464),
        new google.maps.LatLng(51.768, 45.446),
        new google.maps.LatLng(51.768, 45.457),
        new google.maps.LatLng(51.768, 45.456)
    ];
}

function appendZoneList(zone) {
    $("#zone-list").append(getZoneCard(zone.name, zone.count, zone.photo, zone.link));
}

function getZoneCard(name, count, photo, link) {
    return `<div class="card" style="width: 100%">
                        <img class="card-img-top" src="${photo}"
                             alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <p class="card-text">Посетителей за день - ${count} </p>
                            <a href="${link}" class="btn btn-primary">Посмотреть поближе</a>
                        </div>
                    </div>`
}