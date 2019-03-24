<?php

// get $conn
require_once("./inc/connect.php");

// check connection
if ($conn -> connect_error) {
	// error found in connection
	die("connection failed: " . $conn -> connect_error);
}

$sql = "SELECT * FROM `mainLevels` ORDER BY `mainLevels`.`id`";

$result = $conn ->query($sql);

if ($result -> num_rows > 0) {

	while ($row = $result -> fetch_assoc()) {
		$id = stripslashes($row["id"]);
		$name = stripslashes($row["name"]);
		$level = stripslashes($row["level"]);
		$experience = stripslashes($row["experience"]);
		$messageCount = stripslashes($row["messageCount"]);
		$dTag = stripslashes($row["dTag"]);

		$user["id"] = $id;
		$user["name"] = $name;
		$user["level"] = $level;
		$user["experience"] = $experience;
		$user["messageCount"] = $messageCount;
		$user["dTag"] = $dTag;

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
