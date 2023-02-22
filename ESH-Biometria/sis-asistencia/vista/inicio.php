<?php

//inicializando la sssión
   session_start();
   if (empty($_SESSION['nombre']) and empty($_SESSION['apellido'])) {
      header('location:login/login.php');
   }

?>

<style>
   ul li:nth-child(1) .activo {
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

<h4 class="text-center text-secondary">Asistencia de empleados</h4>
<br>
<!--Consulta a las bases de datos para que se muestren en la tabla-->
<?php 
include "../modelo/conexion.php";
include "../controlador/controlador_eliminar_asistencia.php";

$sql=$conexion->query("SELECT
asistencia.id_asistencia,
asistencia.id_empleado,
asistencia.entrada,
asistencia.salida,
empleado.id_empleado,
empleado.nombre as 'nom_empleado',
empleado.apellido,
empleado.cedula,
empleado.cargo,
cargo.id_cargo,
cargo.nombre as 'nom_cargo' FROM asistencia INNER JOIN empleado ON asistencia.id_empleado = empleado.id_empleado
INNER JOIN cargo ON empleado.cargo = cargo.id_cargo"); 

?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
   <script src="../public/sweet/js/sweet.js"></script>
</head>
<body>
<a href="../index.php" class="btn btn-primary btn-rounded mb-3"><i class="fa-solid fa-user-plus"></i> &nbsp;Registrar Asistencia</a>
   <table class="table table-bordered table-hover col-12" id="example">
      <thead>
      <tr>
         <th scope="col">Id</th>
         <th scope="col">N.Empleado</th>
         <th scope="col">Cédula</th>
         <th scope="col">Cargo</th>
         <th scope="col">Entrada</th>
         <th scope="col">Salida</th>
         <th></th>
      </tr>
      </thead>
   <tbody>
   <!--Ciclo donde se van a mostrar los datos-->
      <?php 
      while ($datos = $sql->fetch_object()) { ?>
      <tr>
      <!--Para que se muestre los datos-->
         <td><?= $datos->id_asistencia ?></td>
         <td><?= $datos->nom_empleado." ". $datos->apellido ?></td>
         <td><?= $datos->cedula ?></td>
         <td><?= $datos->nom_cargo ?></td>  
         <td><?= $datos->entrada ?></td>
         <td><?= $datos->salida ?></th>
         <td>
            <a href="inicio.php?id=<?=$datos->id_asistencia?>" onclick="advertencia(event)" class="btn btn-danger"> <i class="fa-solid fa-trash"></i></a>
         </td>
      </tr>
   <?php }
      ?>
   </tbody>
   </table>
   </div>
   </div>
   <!-- fin del contenido principal -->


   <!-- por ultimo se carga el footer -->
   <?php require('./layout/footer.php'); ?>
</body>
</html>
