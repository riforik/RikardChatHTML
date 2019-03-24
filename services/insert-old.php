<?php

// get $conn
require_once("./inc/connect.php");

// check connection
if ($conn -> connect_error) {
	// error found in connection
	die("connection failed: " . $conn -> connect_error);
}


$errorCode["id"] = 0;
$errorCode["message"] = "Insert Successful";


$usrName = $_POST["userName"];
$msg = $_POST["message"];
$time = $_POST["time"];


$sql = "INSERT INTO `messages` SET `userName` = `$usrName` ";

$result = $conn ->query($sql);

if ($result -> num_rows > 0) {
	try {

			while ($row = $result -> fetch_assoc()) {
				$usrName = stripslashes($row["id"]);
				$msg = stripslashes($row["name"]);
				$time = stripslashes($row["level"]);

				$message["userName"] = $usrName;
				$message["message"] = $msg;
				$message["time"] = $time;

				$messages[] = $message;
			}
	} catch (PDOException $e) {
		$errorCode["id"] = -2;
		$errorCode["message"] = "Insert Failed.";
	}



} else {
	echo "0 results";
	$errorCode["id"] = 2;
	$errorCode["message"] = "No name sent.";
}
// encode $message to data
$data = json_encode($errorCode);

header("Content-Type: application/json");

print($data);

$conn->close();

?>
