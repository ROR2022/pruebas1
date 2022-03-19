let map;
let marker;

let watchID;
let geoLoc;




function iniciarMap(){
    let coord = {lat: 22.3167686, lng: -97.9033153};
    // 22.3167686
    // -97.9033153
    // latitud: 22.2691328Longitud: -97.8518016
     map = new google.maps.Map(document.getElementById('map'),{
      zoom: 15,
      center: coord
    });
     marker = new google.maps.Marker({
      position: coord,
      map: map,
      title: "Aki toy"
    });
    obtenerPosicion();
}

function obtenerPosicion() {
    if (navigator.geolocation) {
      let options = {timeout:5000};
      geoLoc = navigator.geolocation;
      watchID = geoLoc.watchPosition(muestraLocOnMap, errorHand, options);
    } else {
      alert("lo sentimos, el explorador no soporta geolocalizacion");
    }
}

function muestraLocOnMap(pos) {
  let lat = pos.coords.latitude;
  let lon = pos.coords.longitude;
  console.log("latitud: " + lat + "Longitud: " + lon);
  const miCoord = { lat: lat, lng: lon };
  marker.setPosition(miCoord);
  map.setCenter(miCoord);
}

function errorHand (e) {
    if(e.code==1) {
        alert("Error: Acceso denegado");
    }else if (e.code == 2) {
        alert("Error: No existe o no se encuentra la ubicación");
    }
}