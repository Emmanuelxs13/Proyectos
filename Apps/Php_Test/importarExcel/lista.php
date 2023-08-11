<!DOCTYPE html>
<html>
<head>
    <title>Lista de Datos CSV</title>
</head>
<body>
    <h1>Lista de Datos CSV</h1>
    <ul>
    <?php
    require 'procesar.php';

    // Obtener los datos de la base de datos
    $stmt = $conexion->query("SELECT * FROM products_test");
    while ($row = $stmt->fetch()) {
        echo "<li>Name: {$row['name']} - Brand: {$row['brand']} - upc: {$row['upc']}</li>";
    }
    ?>
    </ul>
</body>
</html>