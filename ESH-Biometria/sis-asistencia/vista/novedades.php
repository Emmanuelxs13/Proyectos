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

<h4 class="text-center text-secondary">Novedades</h4>
<!--Consulta a las bases de datos para que se muestren en la tabla-->
<?php 
include "../modelo/conexion.php";
include "../controlador/controlador_modificar_novedades.php";
include "../controlador/controlador_eliminar_novedades.php";

$sql=$conexion->query(" SELECT nov.id_novedades,
                              emp.nombre,
                              nov.cedula,
                              nov.horas_extras,
                              nov.vlr_hora,
                              nov.limit_hora,
                              nov.Id_empleado
                        FROM novedades nov
                        INNER JOIN empleado emp ON nov.Id_empleado=emp.id_empleado
                     "); 

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
<a href="registro_novedades.php" class="btn btn-primary btn-rounded mb-3"><i class="fa-solid fa-user-plus"></i> &nbsp;Registrar Novedad</a>
<table class="table table-bordered table-hover col-12" id="example">
   <thead>
   <tr>
      <th scope="col">Id</th>
      <th scope="col">Nombre</th>
      <th scope="col">Cédula</th>
      <th scope="col">Horas Extras</th>
      <th scope="col">Valor Hora</th>
      <th scope="col">Limite de Horas</th>
      <th></th>
   </tr>
   </thead>
<tbody>
<!--Ciclo donde se van a mostrar los datos-->
   <?php 
   while ($datos = $sql->fetch_object()) { ?>
   <tr>
   <!--Para que se muestre los datos-->
      <td><?= $datos->id_novedades ?></td>
      <td><?= $datos->nombre ?></td>
      <td><?= $datos->cedula ?></td>
      <td><?= $datos->horas_extras ?></td>
      <td><?= $datos->vlr_hora ?></td>
      <td><?= $datos->limit_hora ?></td>
      <td>
         <a href="" data-toggle="modal" data-target="#exampleModal<?= $datos->id_novedades ?>" class="btn btn-warning"><i class="fa-solid fa-pen-to-square"></i></a>
         <a href="novedades.php?id=<?=$datos->id_novedades?>" onclick="advertencia(event)" class="btn btn-danger"> <i class="fa-solid fa-trash"></i></a>
      </td>
   </tr>
   <!--BOOTSTRAP-->
<!-- Modal -->
<div class="modal fade" id="exampleModal<?= $datos->id_novedades ?>" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
 <div class="modal-content">
   <div class="modal-header d-flex justify-content-between">
     <h5 class="modal-title w-100" id="exampleModalLabel">Modificar Novedades</h5>
     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
       <span aria-hidden="true">&times;</span>
     </button>
   </div>
   <div class="modal-body">
    <form action="" method="POST">
      <div hidden class="fl-flex-label mb-4 px-2 col-12 "><!--Clase Especial-->
         <input type="text" placeholder="ID" class="input input__text" name="txtid" value="<?= $datos->id_novedades ?>">
      </div>
      <div class="fl-flex-label mb-4 px-2 col-12 "><!--Clase Especial-->
         <input type="text" placeholder="Nombre" class="input input__text" name="txtnombre" value="<?= $datos->nombre ?>">
         <input type="hidden" name="txtid_empleado" value="<?= $datos->Id_empleado ?>">
      </div>
      <div class="fl-flex-label mb-4 px-2 col-12 "><!--Clase Especial-->
            <input type="number" placeholder="Cédula" class="input input__text" name="txtcedula" value="<?= $datos->cedula ?>">
         </div>
      <div class="fl-flex-label mb-4 px-2 col-12 "><!--Clase Especial-->
         <input type="number" placeholder="Horas Extras" class="input input__text" name="txthoraextras" value="<?= $datos->horas_extras ?>">
      </div>
      <div class="fl-flex-label mb-4 px-2 col-12 "><!--Clase Especial-->
         <input type="number" placeholder="Valor de la Hora" class="input input__text" name="txtvlr" value="<?= $datos->vlr_hora ?>">
      </div>
      <div class="fl-flex-label mb-4 px-2 col-12 "><!--Clase Especial-->
         <input type="number" placeholder="Limite de horas" class="input input__text" name="txtlimit" value="<?= $datos->limit_hora ?>">
      </div>

      </div>
      <div class="text-right p-2">
         <a href="novedades.php" class="btn btn-secondary btn-rounded">Atras</a>
         <button type="submit" value="ok" name="btnmodificar" class="btn btn-primary btn-rounded">Modificar</button>
      </div>
   </form>
   </div>
 </div>
</div>
</div>
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

?>