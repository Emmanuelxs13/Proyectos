<?php

//inicializando la sssión
   session_start();
   if (empty($_SESSION['nombre']) and empty($_SESSION['apellido'])) {
      header('location:login/login.php');
   }

?>

<style>
   ul li:nth-child(4) .activo {
      background: rgb(11, 150, 214) !important;
   }
</style>

<!-- Alerta de confirmación para eliminar algún registro-->

<!-- primero se carga el topbar -->
<?php require('./layout/topbar.php'); ?>
<!-- luego se carga el sidebar -->
<?php require('./layout/sidebar.php'); ?>

<!-- inicio del contenido principal -->
<div class="page-content">

<h4 class="text-center text-secondary">Registro de Novedades</h4>
<br>
<br>
<?php 
include "../modelo/conexion.php";
include "../controlador/controlador_registrar_novedad.php"
?>
<!--Consulta a las bases de datos para que se muestren en la tabla-->
   <div class="row">
   <form action="" method="POST">
      <div class="fl-flex-label mb-4 px-2 col-12 col-md-6"><!--Clase Especial-->
         <input type="text" placeholder="Nombre" class="input input__text" name="txtnombre">
      </div>
      <div class="fl-flex-label mb-4 px-2 col-12 col-md-6"><!--Clase Especial-->
         <input type="number" placeholder="Cedula" class="input input__text" name="txtcedula">
      </div>
      <div class="fl-flex-label mb-4 px-2 col-12 col-md-6"><!--Clase Especial-->
         <input type="number" placeholder="Horas Extras" class="input input__text" name="txthoraextras">
      </div>
      <div class="fl-flex-label mb-4 px-2 col-12 col-md-6"><!--Clase Especial-->
         <input type="number" placeholder="Valor de la hora" class="input input__text" name="txtvlr">
      </div>
      <div class="fl-flex-label mb-4 px-2 col-12 col-md-6"><!--Clase Especial-->
         <input type="number" placeholder="Limite de horas" class="input input__text" name="txtlimit">
      </div>
      <div class="text-right p-2">
         <a href="novedades.php" class="btn btn-secondary btn-rounded">Atras</a>
         <button type="submit" value="ok" name="btnregistrar" class="btn btn-primary btn-rounded">Registrar</button>
      </div>
   </form>
   </div>

   </div>
   </div>
   <!-- fin del contenido principal -->


   <!-- por ultimo se carga el footer -->
   <?php require('./layout/footer.php'); ?>
</body>
</html>
