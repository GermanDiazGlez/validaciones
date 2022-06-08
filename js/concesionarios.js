"use strict";
class Concesionarios {
  constructor() {
    var container = $(".concesionarios");
    var ubicaciones = [];
    //Read nodes
    $.get("http://localhost/Fuentes/xml/concesionarios.xml", function (xml) {
      $(xml)
        .find("concesionario")
        .each(function () {
          var concesionario = '<section class="concesionario">';

          var imagen = $(this).find("imagen").attr("src");
          var title = $(this).find("imagen").attr("title");
          var alt = $(this).find("imagen").attr("alt");

          concesionario +=
            '<img src="./images/Concesionarios/' +
            imagen +
            '" alt="' +
            alt +
            '" title="' +
            title +
            '">';

          var nombre = $(this).find("nombre").text();

          concesionario += "<h3>" + nombre + "</h3>";

          var marca = $(this).find("marca").text();

          concesionario += "<p>Marca: " + marca + "</p>";

          var numeroVehiculos = $(this).find("numeroVehiculos").text();

          concesionario +=
            "<p>Numero de vehículos: " + numeroVehiculos + "</p>";

          var tipo_vehiculo = $(this).attr("tipo-vehiculo");

          concesionario += "<p>Tipo de vehículos: " + tipo_vehiculo + "</p>";

          var direccion = $(this).find("direccion").text();

          concesionario += "<p>" + direccion + "</p>";

          concesionario += "<p>Empleados:</p><ul>";

          var empleados = $(this)
            .find("empleado")
            .each(function () {
              var nombre_empleado = $(this).find("nombre-empleado").text();
              var apellidos = $(this).find("apellidos").text();
              var telefono = $(this).find("telefono").text();

              concesionario +=
                "<li>" +
                nombre_empleado +
                " " +
                apellidos +
                " " +
                telefono +
                "</li>";
            });

          concesionario += "</ul>";

          concesionario += "</section>";

          container.append(concesionario);

          var lat = $(this).find("ubicacion").attr("lat");
          var lng = $(this).find("ubicacion").attr("lng");
          ubicaciones.push({ nombre: nombre, lat: lat, lng: lng });
          localStorage.setItem("ubicaciones", JSON.stringify(ubicaciones));
        });
    });
  }
}
var conces = new Concesionarios();
