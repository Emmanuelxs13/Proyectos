<?php 

//Metodo de php para guardar sesiones
session_start();

if(!empty($_POST["btningresar"])){
    if (!empty($_POST["usuario"]) and !empty($_POST["password"])) {
        $usuario=$_POST["usuario"];
        //Para la encriptación de las contraseñas
        $password=md5($_POST["password"]);
        /* echo $usuario; */
        $sql=$conexion->query("select * from usuario where usuario='$usuario' and password='$password'");
        //fetch_object- si posee datos adentro
        if ($datos=$sql->fetch_object()) {
            $_SESSION["nombre"]=$datos->nombre;
            $_SESSION["apellido"]=$datos->apellido;
            $_SESSION["id"]=$datos->id_usuario;
           header("location:../inicio.php");
        } else {
            echo "<div class='alert alert-danger'>El ususario no existe</div>";
        }
        
    } else {
        //Usamos boostrap para los estilos y/o colores
        echo "<div class='alert alert-danger'>Los campos están vacios</div>";
    }
    
}

?>