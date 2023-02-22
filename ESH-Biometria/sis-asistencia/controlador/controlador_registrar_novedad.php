<?php 

if (!empty($_POST["btnregistrar"])) {
    if (!empty($_POST["txtnombre"]) and !empty($_POST["txthoraextras"]) and !empty($_POST["txtvlr"]) and 
        !empty($_POST["txtlimit"]) and !empty($_POST["txtcedula"]) ) {
        /* $Id_empleado = $_POST["txtid_empleado"]; */
        $cedula = $_POST["txtcedula"];
        $horas_extras= $_POST["txthoraextras"];
        $vlr_hora = $_POST["txtvlr"];
        //Encriptar contraseña
        /* $password = md5($_POST["txtpassword"]); */
        $limit_hora = $_POST["txtlimit"];
        /* $id = $_POST["txtid"]; */
        
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
            $registro = $conexion->query(" insert into novedades(horas_extras,vlr_hora,limit_hora,cedula) values('$horas_extras','$vlr_hora','$limit_hora','$cedula'");
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