<?php

$servername = "localhost"; 
$username = "root";        
$password = "";           
$dbname = "online_car_seller"; 

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    echo"<script>console.log('Database connected successfully')</script>";
}
?>

