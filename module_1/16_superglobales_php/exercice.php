<html>
Bonjour
<?php
session_start();

if (isset($_POST['reset']) ) {
    unset($_SESSION["first_name"]);
    header("Location: exercice.php");
    exit();
}

if (!empty($_GET["first_name"])) { // L'URL first_name n'est pas vide
    echo $_GET['first_name'];
    $_SESSION["first_name"] = $_GET["first_name"];
} else if (isset($_SESSION["first_name"])) { // Si SESSION["first_name"] existe
    echo $_SESSION["first_name"];
} else if (isset($_POST["first_name"])) { // Si POST["first_name"] existe
    echo $_POST["first_name"];
    $_SESSION["first_name"] = $_POST["first_name"];
} else {
    echo "Anonyme";
}
?>
<br>
<form action="exercice.php" method="post">
    <p>Votre nom : <input type="text" name="first_name" /></p>
    <p><input type="submit" value="OK" name="OK"></p>
    <button type="submit" value="reset" name="reset">Reset</button>
</form>
</html>

<?php
echo "Bonjour les Fatoumatas" . "<br>";

echo session_id();
echo "<br>";
echo session_encode();
?>