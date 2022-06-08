"use strict";

class Vehiculos {
  constructor() {
    $.ajax({
      url: "https://uo258472.github.io/validaciones/php/vehiculos.php",
      type: "GET",
      success: function (response) {
        var container = $("#vehiculos");
        var vehiculos = response;
        vehiculos.forEach(function (element) {
          console.log(element);
          var layout =
            "<li> " +
            '<span class="nombre"> ' +
            element.nombre +
            " </span> " +
            '<span class="modelo"> ' +
            element.modelo +
            "</span>" +
            '<span class="ano"> ' +
            element.ano +
            "</span>" +
            '<span class="tipo"> ' +
            element.tipo +
            ".   </span>" +
            "<button class='presupuestar' data-id='" +
            element.id +
            " ' data-nombre= '" +
            element.nombre +
            " ' data-model= '" +
            element.modelo +
            "'>Presupuestar</button> " +
            "</li>";
          container.append(layout);
        });
      },
      error: function (response) {
        console.log(response);
      },
    });

    const settings = {
      async: true,
      crossDomain: true,
      url: "https://car-data.p.rapidapi.com/cars?limit=10&page=0",
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "car-data.p.rapidapi.com",
        "X-RapidAPI-Key": "e46df2a617mshdf4735975bbe006p1315b3jsn670003c3d9b7",
      },
    };

    $.ajax(settings).done(function (response) {
      var container = $("#vehiculos");
      var vehiculos = response;
      vehiculos.forEach(function (element) {
        var layout =
          "<li> " +
          '<span class="nombre"> ' +
          element.make +
          " </span> " +
          '<span class="modelo"> ' +
          element.model +
          "</span>" +
          '<span class="ano"> ' +
          element.year +
          "</span>" +
          '<span class="tipo"> ' +
          element.type +
          ".   </span>" +
          "<button class='presupuestar' data-id=' " +
          element.id +
          " ' data-nombre= '" +
          element.make +
          " ' data-model= '" +
          element.model +
          "'>Presupuestar</button>" +
          "</li>";
        container.append(layout);
      });
      console.log(response);
    });

    $("body").on("click", ".presupuestar", function () {
      var id = $(this).data("id");
      var nombre = $(this).data("nombre");
      var modelo = $(this).data("model");
      console.log(nombre);
      localStorage.setItem("id", id);
      localStorage.setItem("nombre", nombre);
      localStorage.setItem("modelo", modelo);
      window.location.href = "./presupuestador.html";
    });
  }
}

var vehiculos = new Vehiculos();
