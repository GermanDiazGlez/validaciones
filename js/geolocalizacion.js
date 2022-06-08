"use strict";
class Geolocalizacion {
  constructor() {
    this.map;
  }

  initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 43.46321, lng: -5.79978 },
      zoom: 8,
    });
    this.map = map;

    var ubicaciones = JSON.parse(localStorage.getItem("ubicaciones"));
    if (ubicaciones !== null) {
      for (var concesionario of ubicaciones) {
        console.log(concesionario.nombre);
        console.log(concesionario.lat);
        console.log(concesionario.lng);
        var nombre = concesionario.nombre;
        var latitud = concesionario.lat;
        var longitud = concesionario.lng;

        var lugar = {
          lat: Math.round(latitud * Math.pow(10, 6)) / Math.pow(10, 6),
          lng: Math.round(longitud * Math.pow(10, 6)) / Math.pow(10, 6),
        };
        new google.maps.Marker({
          position: lugar,
          map,
          title: nombre,
        });
      }
    } else {
      alert("El archivo XML no se ha insertado aún");
    }
  }
}

var geoloc = new Geolocalizacion();
