<?php 

if (!empty($_POST["btnregistrar"])) {
    if (!empty($_POST["txtnombre"])  and !empty($_POST["txtcedula"]) and !empty($_POST["txtcargo"]) and !empty($_POST["txtdireccion"]) and !empty($_POST["txtcelular"]) and !empty($_POST["txtcorreo"]) and !empty($_FILES["foto"]) ) {
        $nombre = $_POST["txtnombre"];
        $apellido = $_POST["txtapellido"];
        $cedula = $_POST["txtcedula"];
        //Encriptar contraseña
        /* $password = md5($_POST["txtpassword"]); */
        $cargo = $_POST["txtcargo"];
        $direccion = $_POST["txtdireccion"];
        $celular = $_POST["txtcelular"];
        $correo = $_POST["txtcorreo"];

        $nombre_imagen=$_FILES['foto']['name'];
        $temporal=$_FILES['foto']['tmp_name'];
        $carpeta='../vista/jpg_empleado'; 
        $foto_empleado=$nombre_imagen;
        move_uploaded_file($temporal,$carpeta.'/'.$nombre_imagen);
        
        $sql = $conexion->query("select count(*) as 'total' from empleado where cedula='$cedula'");
        if ($sql->fetch_object()->total > 0 ) {?>
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
            $registro = $conexion->query(" insert into empleado(nombre,apellido,cedula,cargo,direccion,celular,correo,foto_empleado) values('$nombre','$apellido','$cedula','$cargo','$direccion','$celular','$correo','$foto_empleado')");
            if ($registro==true) {?>
                 <script>
        $(function notificacion(){
            new PNotify({
                title: "CORRECTO",
                type: "success",
                text: "El empleado ha registrado correctamente.",
                styling: "bootstrap3"
            })
        })
       </script>
           <?php } else {?>
            <script>
        $(function notificacion(){
            new PNotify({
                title: "Incorrecto",
                type: "error",
                text: "Error al registrar el empleado.",
                styling: "bootstrap3"
            })
        })
       </script>
           <?php }
            
        }
    } else {?>
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
<?php }
