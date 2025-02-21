<html>
Bonjour <?php echo $_GET["first_name"] != null ? $_GET['first_name'] : "Anonyme"; ?> <br>
<form action="exercice.php" method="post">
    <p>Votre nom : <input type="text" name="first_name" /></p>
    <p><input type="submit" value="OK"></p>
</form>
</html>

<?php
echo "Bonjour les Fatoumatas";
?>