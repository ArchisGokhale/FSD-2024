<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$conn = new mysqli("localhost", "root", "", "fsd4.2");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $stmt = $conn->prepare("INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $_POST['name'], $_POST['email'], $_POST['phone'], $_POST['password']);

    echo $stmt->execute() ? "New record created successfully" : "Error: " . $stmt->error;

    $stmt->close();
}

$conn->close();
?>
