<?php

// get $conn
require_once("./inc/connect_m.php");

// check connection
if ($conn -> connect_error) {
	// error found in connection
	die("connection failed: " . $conn -> connect_error);
}

$sql = "SELECT * FROM `messages` ORDER BY `messages`.`id`";

$result = $conn ->query($sql);

if ($result -> num_rows > 0) {

	while ($row = $result -> fetch_assoc()) {
		$id = stripslashes($row["id"]);
		$name = stripslashes($row["userName"]);
		$message = stripslashes($row["message"]);
		$mTime = stripslashes($row["mTime"]);

		$user["id"] = $id;
		$user["userName"] = $name;
		$user["message"] = $message;
		$user["mTime"] = $mTime;

		$users[] = $user;
	}


	// encode $user to data
	$data = json_encode($users);

	header("Content-Type: application/json");

	print($data);



} else {
	echo "0 results";
}

$conn->close();

?>
