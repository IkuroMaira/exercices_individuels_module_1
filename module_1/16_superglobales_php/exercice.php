<html>
Bonjour
<?php
    if (!empty($_GET["first_name"])) {
        echo $_GET['first_name'];
    } elseif (isset($_POST["first_name"])) {
        echo $_POST["first_name"];
    } else {
        echo "Anonyme";
    }
?> <br>
<br>
<form action="exercice.php" method="post">
    <p>Votre nom : <input type="text" name="first_name" /></p>
    <p><input type="submit" value="OK"></p>
</form>
</html>

<?php
echo "Bonjour les Fatoumatas";
?>