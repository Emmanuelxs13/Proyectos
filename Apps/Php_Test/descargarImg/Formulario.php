<!DOCTYPE html>
<html>

<head>
    <title>Subir Archivo CSV</title>
    <style>
        * {
            text-align: center;
            margin-top: 1rem;
        }
    </style>
</head>

<body>
    <h1>Subir Archivo CSV</h1>
    <p>Este desarrollo solo permite subir archivos de excel en el formato csv, además para que funcione correctamente, deberás reemplazar las comas por un espacio en blanco.</p>
    <p>Muchas gracias por la atención prestada.</p>
    <form action="procesar.php" method="post" enctype="multipart/form-data">
        <input type="file" name="archivo_csv" accept=".csv">
        <button type="submit">Subir Archivo</button>
    </form>
</body>

</html>