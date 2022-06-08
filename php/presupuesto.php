<?php

class Presupuesto
{

    function createPresupuesto()
    {
        include("./BBDD.php");
        $bd = new BBDD();
        $bd->insertCliente($_POST["nombre"], $_POST["apellidos"], $_POST["email"]);
        $bd->insertPresupuesto($_POST["nombre"], $_POST["apellidos"], $_POST["email"], $_POST["id"]);
        $bd->insertEstadistica($_POST["id"], $_POST["marca"]);


        header("Location: ../correcto.html");
        exit();
    }
}


$pres = new Presupuesto();
$pres->createPresupuesto();
