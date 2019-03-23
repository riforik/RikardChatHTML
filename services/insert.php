<?php

require_once("./inc/connect.php");

$name = $_POST["name"];
$gender = $_POST["gender"];

$errorCode["id"] = 0;
$errorCode["message"] = "Insert Successful";


//var_dump($dbo);

if (!empty($name) ) {

	try {
		$name = addslashes($name);
		$gender = addslashes($gender);

		$query = "INSERT INTO actor
		SET name = '$name',
		gender = '$gender'  ";
		$dbo->query($query);
	} catch (PDOException $e) {
		$errorCode["id"] = -2;
		$errorCode["message"] = "Insert Failed.";
	}

} else {
	$errorCode["id"] = 2;
	$errorCode["message"] = "No name sent.";
}

//var_dump($actors);

$data = json_encode($errorCode);

header("Content-Type: application/json");

print($data);


?>
