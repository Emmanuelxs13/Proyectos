<!DOCTYPE html>
<html>
<head>
    <title>Importar CSV a MySQL</title>
</head>
<style>
    *{
        text-align: center;
        margin-top: 1rem;
    }
</style>
<body>
    
    <h1>Importar CSV a MySQL</h1>
    <p>Este desarrollo solo permite subir archivos de excel en el formato csv, además para que funcione correctamente, deberás reemplazar las comas por un espacio en blanco.</p>
    <p>Muchas gracias por la atención prestada.</p>
    <form action="procesar.php" method="post" enctype="multipart/form-data">
        <input type="file" name="archivo_csv" accept=".csv" required>
        <input type="submit" value="Subir CSV" name="submit">&nbsp;
    </form>
</body>
</html>