<?php

require_once("./inc/connect_m.php");

$name = $_POST["name"];
$message = $_POST["message"];
$mTime = $_POST["mTime"];

$errorCode["id"] = 0;
$errorCode["message"] = "Insert Successful";

// check connection
if ($conn -> connect_error) {
	// error found in connection
	die("connection failed: " . mysqli_connect_error());

	$errorCode["id"] = 3;
	$errorCode["message"] = "conn failed";

}

//var_dump($dbo);

if (!empty($name) ) {

	$name = addslashes($name);
	$message = addslashes($message);
	$mTime = addslashes($mTime);

	$sql = "INSERT INTO `messages` (userName, message, mTime) VALUES ('".$_POST["name"]."','".$_POST["message"]."','".$_POST["mTime"]."')";

	// $sql2 = "INSERT INTO  (userName, message, mTime)
  //        VALUES (?,?,?)";
	// $stmt = mysqli_prepare($sql2);
	// $stmt->bind_param("sssd", $name, $message, $mTime);
	// //
	// // $stmt->execute();
	$conn->query($sql);

	$errorCode["message"] = "Insert Failed here. $name: $message";

} else {
	$errorCode["id"] = 2;
	$errorCode["usMsgTime"] = $name;
	$errorCode["usMsgName"] = $name;
	$errorCode["usMsgMsg"] = $message;
	$errorCode["message"] = "No name sent.";
}

//var_dump($actors);

$data = json_encode($errorCode);

header("Content-Type: application/json");

print($data);


?>
