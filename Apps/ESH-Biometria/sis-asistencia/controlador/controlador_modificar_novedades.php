<?php

if (!empty($_POST["btnmodificar"])) {
    if (!empty($_POST["txtnombre"]) and !empty($_POST["txthoraextras"]) and !empty($_POST["txtvlr"]) and 
        !empty($_POST["txtlimit"]) and !empty($_POST["txtcedula"]) ) {
        $Id_empleado = $_POST["txtid_empleado"];
        $cedula = $_POST["txtcedula"];
        $horas_extras= $_POST["txthoraextras"];
        $vlr_hora = $_POST["txtvlr"];
        //Encriptar contraseña
        /* $password = md5($_POST["txtpassword"]); */
        $limit_hora = $_POST["txtlimit"];
        $id = $_POST["txtid"];


       /*  $sql = $conexion->query("select count(*) as 'total' from empleado where cedula='$cedula'"); */
       $sql = $conexion->query(" select count(*) as 'total' from novedades where cedula='$cedula' and id_novedades!=$id ");
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
        try{
            $modificar =  $conexion->query(" update novedades set Id_empleado=$Id_empleado, cedula=$cedula, horas_extras=$horas_extras, vlr_hora=$vlr_hora,
            limit_hora=$limit_hora where id_novedades=$id");
        }catch(mysqli_sql_exception $fail){
            echo "la actualizacion falchlo".$fail->getMessage();
        }

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
                text: <?php echo "Error".$fail->getMessage()?>,
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