<?php

//inicializando la sssión
   session_start();
   if (empty($_SESSION['nombre']) and empty($_SESSION['apellido'])) {
      header('location:login/login.php');
   }

?>



<!-- <style>
   ul li:nth-child(2) .activo {
      background: rgb(11, 150, 214) !important;
   }
</style> -->

<!-- Alerta de confirmación para eliminar algún registro-->

<!-- primero se carga el topbar -->
<?php require('./layout/topbar.php'); ?>
<!-- luego se carga el sidebar -->
<?php require('./layout/sidebar.php'); ?>

<!-- inicio del contenido principal -->
<div class="page-content">


<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
   <script src="../public/sweet/js/sweet.js"></script>
   <link rel="stylesheet" href="././stily.css">
   
</head>
<body>
  <center>
    <br>
<h1>CREADORES</h1>
<br>
<div class="card-deck">
  <div class="card">
    <img class="card-img-top" src="../public/images/seba.jpg" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Sebastián Velásquez Andraus</h5>
      <h5>Estudiante de programación de software</h5>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="../public/images/ema2.jpg" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Emmanuel Berrio Jimenez</h5>
      <h5>Estudiante de programación de software </h5>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="../public/images/h3.jpg" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">Hernan Dario Arbelaez Arias </h5>
      <h5>Estudiante de programación de software</h5>
    </div>
  </div>
</div>



   <?php require('./layout/footer.php'); ?>
</body>
</html>