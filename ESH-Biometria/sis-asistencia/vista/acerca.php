<?php 
// inicializando la sssión
   session_start();
   if (empty($_SESSION['nombre']) and empty($_SESSION['apellido'])) {
      header('location:login/login.php');
   }

?>


<?php require('./layout/topbar.php'); ?>
<?php require('./layout/sidebar.php'); ?>

<?php
// session_start();
// if (empty($_SESSION['user']) and empty($_SESSION['clave'])) {
//     header('location:login/login.php');
// }

?>

<div class="page-content">


   <center><h1>Términos y Condiciones</h1></center>
    <br>
    <p><strong>POLÍTICA DE PRIVACIDAD</strong></p>
    <p>El presente Política de Privacidad establece los términos en que esh_biometria usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web. Esta compañía está comprometida con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar los campos de información personal con la cual usted pueda ser identificado, lo hacemos asegurando que solo se empleará de acuerdo con los términos de este documento. Sin , esta Política de Privacidad puede cambiar con el tiempo o ser actualizada, por lo que le recomendamos y enfatizamos revisar continuamente esta página para asegurarse que está de acuerdo con dichos cambios.</p>
    <p><strong>Información que es recogida</strong></p>
    <p>Nuestro sitio web podrá recoger información personal, por ejemplo: Nombre/nombre de usuario,&nbsp;su dirección de correo electrónico, títulos de trabajos, contraseña Así mismo cuando sea necesario podrá ser requerida información específica para el buen fusiona miento de la página web.</p>
    <p><strong>Uso de la información recogida</strong></p>
    <p>Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio posible, particularmente para mantener un registro de usuarios.</p>
    <p>esh_biometria está altamente comprometido para cumplir con el compromiso de mantener su información segura. Usamos los sistemas más avanzados y los actualizamos constantemente para asegurarnos que no exista ningún acceso no autorizado.</p>
    <p><strong>Control de su información personal</strong></p>
    <p>En cualquier momento, usted puede restringir la recopilación o el uso de la información personal que es proporcionada a nuestro sitio web.&nbsp; Cada vez que se le solicité rellenar un formulario, se estará pidiendo que acerté los términos y condiciones para que este seguro usted como nosotros.</p>
    <p>Esta compañía no venderá, cederá ni distribuirá la información personal que es recopilada sin su consentimiento, salvo que sea requerido por un juez con un orden judicial.</p>
    <p>esh_biometria Se reserva el derecho de cambiar los términos de la presente Política de Privacidad en cualquier momento.</p>
</div>




<?php require('./layout/footer.php');
 