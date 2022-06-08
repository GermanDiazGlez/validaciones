<?php

class Vehiculos
{

    function vehicles()
    {

        header('Content-Type: application/json');
        include("./BBDD.php");
        $bd = new BBDD();
        $vehiculos = $bd->selectVehiculos();


        http_response_code(200);
        return json_encode($vehiculos);
    }
}

$veh = new Vehiculos();
echo $veh->vehicles();
