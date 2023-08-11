<!DOCTYPE html>
<html>
<head>
    <title>Procesar Archivo CSV</title>
</head>
<body>
    <h1>Procesar Archivo CSV</h1>
    
    <?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if ($_FILES["archivo_csv"]["error"] == UPLOAD_ERR_OK) {
            $nombreTemporal = $_FILES["archivo_csv"]["tmp_name"];
            
            // Leer el archivo CSV
            $archivo = fopen($nombreTemporal, 'r');
            $contador = 31;
            
            echo '<div>';
            
            while (($fila = fgetcsv($archivo)) !== false) {
                $contador++;
                if ($contador >= 31 && $contador <= 37) {
                    $imagenURL = $fila[31]; // Aquí se coloca la posición de la URL en el CSV
                    $contenidoImagen = file_get_contents($imagenURL);
                    $nombreImagen = 'imagen_' . $contador . '.jpg';
                    $rutaDestino ='img/' . $nombreImagen;
                    file_put_contents($rutaDestino, $contenidoImagen);
                    
                    echo '<img src="' . $rutaDestino . '" alt="Imagen ' . $contador . '" width="200">';
                    // var_dump($rutaDestino);
                    echo '<br>';
                    echo 'Enlace: <a href="' . $imagenURL . '">' . $imagenURL . '</a>';
                    echo '<br><br>';
                }
            }}
            
            echo '</div>';
            
            fclose($archivo);
        } else {
            echo "Error al subir el archivo.";
        }
    
    ?>
</body>
</html>
