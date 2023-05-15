
<?php 
// inicializando la sssión
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
<div class="page-content">
<center><h1>Información de empresa</h1></center>
<br>
<h3><b>Nombre:</b></h3>
<h3>Comercializadora el rey de los remates sas</h3>
<br>
<h3><b>Teléfono:</b></h3>
<h3>321 4653785</h3>
<br>
<h3><b>Dirección:</b></h3>
<h3>Cra. 49 #98a-28, Medellín, Santa Cruz, Medellín, Antioquia</h3>
<center>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31726.451644735458!2d-75.59224753184148!3d6.289151608675657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e442fcf62b44aad%3A0x8aaaebe6d025f7e4!2sComercializadora%20el%20rey%20de%20los%20remates%20sas!5e0!3m2!1ses-419!2sco!4v1665561390853!5m2!1ses-419!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</center>
    </div>



   <?php require('./layout/footer.php'); ?>
</body>
</html>