
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

<h4 class="text-center text-secondary">Registro de Empleados</h4>
<br>
<br>
<?php 
include "../modelo/conexion.php";
include "../controlador/controlador_registrar_usuario.php";
$sql=$conexion->query("SELECT * from cargo"); 

?>
<!--Consulta a las bases de datos para que se muestren en la tabla-->
   <div class="row">
   <form action="" method="POST" enctype="multipart/form-data">
      <div class="fl-flex-label mb-4 px-2 col-12 col-md-6"><!--Clase Especial-->
         <input type="text" placeholder="Nombre" class="input input__text" name="txtnombre">
      </div>
      <div class="fl-flex-label mb-4 px-2 col-12 col-md-6"><!--Clase Especial-->
         <input type="text" placeholder="Apellido" class="input input__text" name="txtapellido">
      </div>
      <div class="fl-flex-label mb-4 px-2 col-12 col-md-6"><!--Clase Especial-->
         <input type="text" placeholder="Cedula" class="input input__text" name="txtcedula">
      </div>
      

      <div class="fl-flex-label mb-4 px-2 col-12 col-md-6" >
         <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" name="txtcargo">
      <?php 
      while ($datos = $sql->fetch_object()) { ?>
  <option value="<?= $datos->id_cargo; ?>"><?= $datos->nombre?></option>
  <?php } ?>
</select>
</div>








      <div class="fl-flex-label mb-4 px-2 col-12 col-md-6"><!--Clase Especial-->
         <input type="text" placeholder="Dirección" class="input input__text" name="txtdireccion">
      </div>
      <div class="fl-flex-label mb-4 px-2 col-12 col-md-6"><!--Clase Especial-->
         <input type="tel" placeholder="Número Celular" class="input input__text" name="txtcelular">
      </div>
      <div class="fl-flex-label mb-4 px-2 col-12 col-md-6"><!--Clase Especial-->
         <input type="email" placeholder="Correo" class="input input__text" name="txtcorreo">
      </div>
      
    
      <div class="file-field input-field">


          <label class="btn btn-file" for="customFileLang">
<div class="btm-small amber darken-1">
    <span><i class="fa fa-folder-open-o"></i> eligen una imagen</span>
    <input type="file" name="foto" id="foto" onchange="vista_prelinar(event)">
</div>
      </label>     
</div>
<div>
    <img src="" alt="" id="img-foto">
</div>

         <div class="controls">   
      <div class="text-right p-2">
         <a href="usuario.php" class="btn btn-secondary btn-rounded">Atras</a>
         <button type="submit" value="ok" name="btnregistrar" class="btn btn-primary btn-rounded">Registrar</button>
      </div>
   </form>
   </div>

   </div>
   </div>
   <!-- fin del contenido principal -->
   

   <!-- por ultimo se carga el footer -->
   <?php require('./layout/footer.php'); ?>
   <script>
    let vista_prelinar=(event)=>{
        let leer_img = new FileReader();
        let id_img = document.getElementById('img-foto');
        leer_img.onload = ()=>{
            if (leer_img.readyState ==2){
                id_img.src = leer_img.result 
            }
        }
        leer_img.readAsDataURL(event.target.files[0])
    }
</script>
</body>
</html>