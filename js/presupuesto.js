"use strict";
class Presupuesto {
  constructor() {
    var nombre = localStorage.getItem("nombre");
    var modelo = localStorage.getItem("modelo");
    var id = localStorage.getItem("id");

    $("#datosVehiculo1").html(nombre);
    $("#datosVehiculo2").html(modelo);

    $("input[name='marca']").val(nombre);
    $("input[name='id']").val(id);
  }
}
var presupuesto = new Presupuesto();
