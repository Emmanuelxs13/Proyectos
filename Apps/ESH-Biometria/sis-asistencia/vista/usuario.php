<?php

//inicializando la sssión
   session_start();
   if (empty($_SESSION['nombre']) and empty($_SESSION['apellido'])) {
      header('location:login/login.php');
   }

?>

<style>
   ul li:nth-child(2) .activo {
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

<h4 class="text-center text-secondary">Lista de empleados</h4>
<!--Consulta a las bases de datos para que se muestren en la tabla-->
<?php 
include "../modelo/conexion.php";
include "../controlador/controlador_modificar_usuario.php";
include "../controlador/controlador_eliminar_empleado.php";

$sql=$conexion->query("SELECT empleado.id_empleado , empleado.nombre, empleado.apellido, empleado.cedula, empleado.direccion, empleado.celular,empleado.foto_empleado, empleado.correo, cargo.nombre as cargo FROM empleado INNER JOIN cargo ON empleado.cargo=cargo.id_cargo"); 

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
  <a href="registro_usuario.php" class="btn btn-primary btn-rounded mb-3"><i class="fa-solid fa-user-plus"></i> &nbsp;Registrar Empleado</a>
  
      
   
   <!--Ciclo donde se van a mostrar los datos-->
     
<div class="row row-cols-1 row-cols-md-3 g-4">
   <?php while ($datos = $sql->fetch_object()) 
   
   { ?>
   <div class="col">
     <div class="card">
      <img src="../vista/jpg_empleado/<?= $datos->foto_empleado?>" alt="" class="card-img-top" while="100" height="400">
      <div class="card-body">

      
        <h1 class="card-title"><?= $datos->nombre ." ". $datos->apellido ?></h1>
        
        <p class="card-text"><b>Cedula:  </b><?= $datos->cedula?></p>
        <p class="card-text"><b>Cargo:  </b><?= $datos->cargo?></p>
        <p class="card-text"><b>Direccion:  </b><?= $datos->direccion?></p>
        <p class="card-text"><b>celular:  </b><?= $datos->celular?></p>
        <p class="card-text"><b>Correo:  </b><?= $datos->correo?></p>
        <a href="" data-toggle="modal" data-target="#exampleModal<?= $datos->id_empleado ?>" class="btn btn-warning"><i class="fa-solid fa-pen-to-square"></i></a>
        <a href="usuario.php?id=<?=$datos->id_empleado?>" onclick="advertencia(event)" class="btn btn-danger"> <i class="fa-solid fa-trash"></i></a>
      </div>
   </div>
</div>
  
      <!--BOOTSTRAP-->
<!-- Modal -->
<div class="modal fade" id="exampleModal<?= $datos->id_empleado ?>" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header d-flex justify-content-between">
        <h5 class="modal-title w-100" id="exampleModalLabel">Modificar Datos del Empleado</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       <form action="" method="POST">
         <div hidden class="fl-flex-label mb-4 px-2 col-12 "><!--Clase Especial-->
            <input type="text" placeholder="ID" class="input input__text" name="txtid" value="<?= $datos->id_empleado ?>">
         </div>
         <div class="fl-flex-label mb-4 px-2 col-12 "><!--Clase Especial-->
            <input type="text" placeholder="Nombre" class="input input__text" name="txtnombre" value="<?= $datos->nombre ?>">
         </div>
         <div class="fl-flex-label mb-4 px-2 col-12 "><!--Clase Especial-->
            <input type="text" placeholder="Apellido" class="input input__text" name="txtapellido" value="<?= $datos->apellido ?>">
         </div>
         <div class="fl-flex-label mb-4 px-2 col-12 "><!--Clase Especial-->
            <input type="number" placeholder="Cedula" class="input input__text" name="txtcedula" value="<?= $datos->cedula ?>">
         </div>
         <div class="fl-flex-label mb-4 px-2 col-12 "><!--Clase Especial--> 
            <input type="text" placeholder="Cargo" class="input input__text" name="txtcargo" value="<?= $datos->cargo ?>">
            
         </div>
         <div class="fl-flex-label mb-4 px-2 col-12 "><!--Clase Especial--> 
            <input type="text" placeholder="Dirección" class="input input__text" name="txtdireccion" value="<?= $datos->direccion ?>">
         </div>
         <div class="fl-flex-label mb-4 px-2 col-12 "><!--Clase Especial--> 
            <input type="number" placeholder="Numero de celular" class="input input__text" name="txtcelular" value="<?= $datos->celular ?>">
         </div>
         <div class="fl-flex-label mb-4 px-2 col-12 "><!--Clase Especial--> 
            <input type="text" placeholder="Correo" class="input input__text" name="txtcorreo" value="<?= $datos->correo ?>">
         </div>
         <div class="text-right p-2">
            <a href="usuario.php" class="btn btn-secondary btn-rounded">Atras</a>
            <button type="submit" value="ok" name="btnmodificar" class="btn btn-primary btn-rounded">Modificar</button>
         </div>
      </form>
      </div>
    </div>
  </div>
  </div>
  <?php }?>
   
      </div>  
    

 

   </div>
   </div>
   
   <!-- fin del contenido principal -->


   <!-- por ultimo se carga el footer -->
   <?php require('./layout/footer.php'); ?>
</body>
</html>