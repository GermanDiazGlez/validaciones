<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="../style.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <nav>
        <img src="../images/logo.png" alt="logo" />
        <ul>
            <li><a href="../index.html">Inicio</a></li>
            <li><a href="../noticias.html">Actualidad</a></li>
            <li><a href="../empresa.html">Quienes somos</a></li>
            <li><a href="../concesionarios.html">Nuestros concesionarios</a></li>
            <li><a href="../vehiculos.html">Vehículos</a></li>
            <li><a href="./estadisticas.php">Estadisticas</a></li>
        </ul>
    </nav>
    <section class="estadisticas">
        <h1>Lista ordenada de los coches más presupuestados</h1>
        <?php
        include("./BBDD.php");
        $bd = new BBDD();
        $estadisticas = $bd->selectEstadisticas();
        ?>

        <ul>
            <?php foreach ($estadisticas as $estadistica) {  ?>
                <li>
                    <?= $estadistica["total"] ?>
                    -
                    <?= $estadistica["nombre"] ?>
                </li>
            <?php }  ?>
        </ul>
    </section>
    <footer>
        <p>Página concesionario creada por Germán Díaz.</p>
        <p>
            Si quieres contactar conmigo, hazlo a través del siguiente email
            <a href="mailto:uo258472@uniovi.es">uo258472@uniovi.es.</a>
        </p>
    </footer>
</body>

</html>