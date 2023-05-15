<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro de Asistencia</title>
    <link rel="stylesheet" href="public/estilos/estilos.css">
    <link rel="preconnet" href="https://fonts.googleapis.com">
    <link rel="preconnet" href="https://fonts.gstatic.com" crossorigin>
    <!-- pNotify -->
    <link href="public/pnotify/css/pnotify.css" rel="stylesheet" />
        <link href="public/pnotify/css/pnotify.buttons.css" rel="stylesheet" />
        <link href="public/pnotify/css/custom.min.css" rel="stylesheet" />
        <script src="public/pnotify/js/jquery.min.js">
        </script>
        <script src="public/pnotify/js/pnotify.js">
        </script>
        <script src="public/pnotify/js/pnotify.buttons.js">
        </script>
    
</head>
<body>
    <h1>BIENVENIDO,REGISTRA TU ASISTENCIA</h1>
    <h2 id="fecha"></h2>
    <?php
    include "modelo/conexion.php";
    include "controlador/controlador_registrar_asistencia.php";
    ?>
    <br>
    <br>
    <div class="container">
        <a href="./vista/inicio.php">Ingresar al sistema</a>
        <p class="cedula">Ingrese su cédula</p>
        <br>
        <form action="" method="POST">
            <input type="number" placeholder="Cedula del empleado" name="txtcedula" id="txtcedula">
            <div class="botones">
                <button class="entrada" type="submit" name="btnentrada" value="ok">ENTRADA</button>
                <button class="salida" type="submit" name="btnsalida" value="ok">SALIDA</button>
            </div>
            
        </form>
    </div>

    <script>
        setInterval(() => {
            let fecha = new Date();
            let fechaHora = fecha.toLocaleString();
        document.getElementById("fecha").textContent = fechaHora;
        }, 1000);
    </script>


    <script>
        let cedula = document.getElementById("txtcedula");
        cedula.addEventListener("input", function(){
            if (this.value.length > 10) {
                this.value=this.value.slice(0,10);
            }
        })
    </script>
</body>
</html>