<?php

if (!empty($_POST["btnmodificar"])) {
    if (!empty($_POST["txtnombre"]) and !empty($_POST["txtapellido"]) and !empty($_POST["txtcedula"]) and 
        !empty($_POST["txtcargo"]) and !empty($_POST["txtdireccion"]) and !empty($_POST["txtcelular"]) and 
        !empty($_POST["txtcorreo"])) {
        $nombre = $_POST["txtnombre"];
        $apellido = $_POST["txtapellido"];
        $cedula = $_POST["txtcedula"];
        //Encriptar contraseña
        /* $password = md5($_POST["txtpassword"]); */
        $cargo = $_POST["txtcargo"];
        $direccion = $_POST["txtdireccion"];
        $celular = $_POST["txtcelular"];
        $correo = $_POST["txtcorreo"];
        $id = $_POST["txtid"];


       /*  $sql = $conexion->query("select count(*) as 'total' from empleado where cedula='$cedula'"); */
       $sql = $conexion->query(" select count(*) as 'total' from empleado where cedula='$cedula' and id_empleado!=$id ");
       if ($sql->fetch_object()->total > 0) { ?>
       <script>
           $(function notificacion(){
               new PNotify({
               title: "ERROR",
               type: "error",
               text: "La cedula <?= $cedula ?> ya existe.",
               styling: "bootstrap3"
               })
           })
      </script>
<?php } else {
            $modificar =  $conexion->query(" update empleado set nombre='$nombre', apellido='$apellido', cedula=$cedula, cargo=$cargo, direccion='$direccion',
            celular=$celular, correo='$correo' where id_empleado=$id");
            if ($modificar == true) { ?>

        <script>
        $(function notificacion(){
            new PNotify({
                title: "CORRECTO",
                type: "success",
                text: "El empleado ha modificado correctamente.",
                styling: "bootstrap3"
            })
        })
       </script>
           <?php } else { ?>
        <script>
        $(function notificacion(){
            new PNotify({
                title: "Incorrecto",
                type: "error",
                text: "Error al modificar el empleado.",
                styling: "bootstrap3"
            })
        })
        </script>
        
        <?php } 
    }
    } else { ?>
         <script>
        $(function notificacion(){
            new PNotify({
                title: "ERROR",
                type: "error",
                text: "Los campos están vacios.",
                styling: "bootstrap3"
            })
        })
       </script>
   <?php } ?>
    <script>
        setTimeout(() => {
            window.history.replaceState(null,null,window.location.pathname);
        }, 0);
     </script>   

<?php } ?>