<?php
// Datos de conexión a la base de datos
$host = "localhost";
$dbname = "products_test";
$username = "root";
$password = "";

// Conexión a la base de datos
$conexion = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);

// Procesar el archivo CSV
if (isset($_POST["submit"])) {
    $archivo_csv = $_FILES["archivo_csv"]["tmp_name"];
    
    if (($handle = fopen($archivo_csv, "r")) !== false) {
        fgetcsv($handle); // Saltar la primera fila (encabezados)
        
        while (($data = fgetcsv($handle)) !== false) {
            $nombre = $data[6];
            $brand = $data[1];
            $upc = $data[5];
            
            // Insertar los datos en la base de datos
            $stmt = $conexion->prepare("INSERT INTO products_test (name, brand, upc, ) VALUES (?, ?, ?)");
            $stmt->execute([$nombre, $brand, $upc]);
        }
        
        fclose($handle);
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>CSV Procesado</title>
</head>
<body>
    <h1>CSV Procesado y Almacenado</h1>
    <p>Los datos se han almacenado en la base de datos.</p>
    <a href="./lista.php"><button type="submit">Ver Datos</button></a>
    <a href="./Formulario.php"><button type="submit">Subir Más Archivos</button></a>
</body>
</html>