<?php

require_once("./inc/connect_m.php");

$name = $_POST["name"];
$message = $_POST["message"];
$time = $_POST["time"];

$errorCode["id"] = 0;
$errorCode["message"] = "Insert Successful";


//var_dump($dbo);

if (!empty($name) ) {

	try {
		$name = addslashes($name);
		$message = addslashes($message);
		$time = addslashes($time);

		$query = "INSERT INTO actor
		SET name = '$name',
		gender = '$message',
		time = '$time'   ";
		$dbo->query($query);
		$errorCode["message"] = "Insert Failed here.";
	} catch (PDOException $e) {
		$errorCode["id"] = -2;
		$errorCode["message"] = "Insert Failed.";
	}

} else {
	$errorCode["id"] = 2;
	$errorCode["usMsgTime"] = $time;
	$errorCode["usMsgName"] = $name;
	$errorCode["usMsgMsg"] = $message;
	$errorCode["message"] = "No name sent.";
}

//var_dump($actors);

$data = json_encode($errorCode);

header("Content-Type: application/json");

print($data);


?>
