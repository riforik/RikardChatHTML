<?php

require_once("./inc/connect.php");

$usrName = $_POST["userName"];
$msg = $_POST["message"];
$time = $_POST["time"];

$errorCode["id"] = 0;
$errorCode["message"] = "Insert Successful";


//var_dump($dbo);

if (!empty($name) ) {

	try {
		$usrName = addslashes($usrName);
		$msg = addslashes($msg);
		$time = addslashes($time);

		$query = "INSERT INTO actor
		SET name = '$usrName',
		gender = '$msg',
		time = '$time'   ";
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
