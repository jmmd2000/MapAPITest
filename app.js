function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: { lat: 53.347027022256206, lng: -6.264618902988533 },
    mapTypeId: "roadmap",
  });
  // Define the LatLng coordinates for the polygon's path.
  const redCoords = [
    //right side
    { lat: 53.34760351755416, lng: -6.259143845796044 },
    { lat: 53.35260554198368, lng: -6.26151793876853 },
    //top
    { lat: 53.3521587931236, lng: -6.262400689496262 },
    { lat: 53.351391082874635, lng: -6.263658490330927 },
    { lat: 53.3506047268695, lng: -6.265755031833505 },
    { lat: 53.34965276682439, lng: -6.269215853974213 },
    //left side
    { lat: 53.346065149226135, lng: -6.267863225518856 },
    //bottom
    { lat: 53.34638823726282, lng: -6.264293383003378 },
  ];

  const blueCoords = [
    //right side
    { lat: 53.346065149226135, lng: -6.267863225518856 },
    { lat: 53.34965276682439, lng: -6.269215853974213 },
    { lat: 53.351050024662726, lng: -6.2700355713285845 },
    //top
    { lat: 53.350515667572054, lng: -6.271188709090288 },
    { lat: 53.350225843974876, lng: -6.272531507664119 },
    { lat: 53.350148415405776, lng: -6.2745174391668135 },
    // left side
    { lat: 53.34580570354955, lng: -6.275605961264779 },
    //bottom
    { lat: 53.34556802340402, lng: -6.272172003478484 },
    { lat: 53.346065149226135, lng: -6.267863225518856 },
    ];
    
  // Construct the polygon.
  const redArea = new google.maps.Polygon({
    paths: redCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  const blueArea = new google.maps.Polygon({
    paths: blueCoords,
    strokeColor: "#0000FF",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#0000FF",
    fillOpacity: 0.35,
  });

  const redMarker = new google.maps.Marker({
    position: { lat: 53.347027022256206, lng: -6.264618902988533 },
    map,
    icon: "images/redMarker.png",
  });
    
  const blueMarker = new google.maps.Marker({
    position: { lat: 53.34679776158964, lng: -6.273470192570237 },
    map,
    icon: "images/blueMarker.png",
  });
    
    const contentStringRed =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h3 id="firstHeading" class="firstHeading">Fusio</h3>' +
    "</div>";
    
    const contentStringBlue =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h3 id="firstHeading" class="firstHeading">Four Courts Luas Stop</h3>' +
    "</div>";
    
    const infowindowRed = new google.maps.InfoWindow({
     content: contentStringRed,
    });

    const infowindowBlue = new google.maps.InfoWindow({
     content: contentStringBlue,
    });
    
    redMarker.addListener("click", () => {
    infowindowRed.open({
      anchor: redMarker,
      map,
      shouldFocus: false,
    });
    });
    
    blueMarker.addListener("click", () => {
    infowindowBlue.open({
      anchor: blueMarker,
      map,
      shouldFocus: false,
    });
  });

  redArea.setMap(map);
  blueArea.setMap(map);

  blueMarker.setMap(map);
  redMarker.setMap(map);
}
