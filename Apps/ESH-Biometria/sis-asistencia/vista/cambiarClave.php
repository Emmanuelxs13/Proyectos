<?php

//inicializando la sssión
   session_start();
   if (empty($_SESSION['nombre']) and empty($_SESSION['apellido'])) {
      header('location:login/login.php');
   }
   $id = $_SESSION["id"];
?>



<!-- Alerta de confirmación para eliminar algún registro-->

<!-- primero se carga el topbar -->
<?php require('./layout/topbar.php'); ?>
<!-- luego se carga el sidebar -->
<?php require('./layout/sidebar.php'); ?>

<!-- inicio del contenido principal -->
<div class="page-content">

<h4 class="text-center text-secondary">Cambio de Contraseña</h4>
<br>
<br>
<?php 
include "../modelo/conexion.php";
 include "../controlador/controlador_cambiar_clave.php"; 
$sql = $conexion->query("select * from usuario where id_usuario=$id");
?>
<!--Consulta a las bases de datos para que se muestren en la tabla-->
   <div class="row">
   <form action="" method="POST">
      <?php
      while ($datos = $sql->fetch_object()){ ?>
      <div hidden class="fl-flex-label mb-4 px-2 col-12 col-md-6"><!--Clase Especial-->
         <input type="text" placeholder="Id" class="input input__text" name="txtid" value="<?= $datos->id_usuario ?>">
      </div>
      <div class="fl-flex-label mb-4 px-2 col-12 col-md-6"><!--Clase Especial-->
         <input type="password" placeholder="Contraseña Actual" class="input input__text" name="txtclaveactual" value="">
      </div>
      <div class="fl-flex-label mb-4 px-2 col-12 col-md-6"><!--Clase Especial-->
         <input type="password" placeholder=" Contraseña Nueva" class="input input__text" name="txtclavenueva" value="">
      </div>
     
      <div class="text-right p-2">
        <!--  <a href="usuario.php" class="btn btn-secondary btn-rounded">Atras</a> -->
         <button type="submit" value="ok" name="btnmodificar" class="btn btn-primary btn-rounded">Modificar</button>
      </div>
      <?php }
      ?>
   </form>
   </div>

   </div>
   </div>
   <!-- fin del contenido principal -->


   <!-- por ultimo se carga el footer -->
   <?php require('./layout/footer.php'); ?>
</body>
</html>
