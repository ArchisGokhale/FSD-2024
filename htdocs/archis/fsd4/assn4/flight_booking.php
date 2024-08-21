<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "flight_booking";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


if (isset($_POST['action'])) {
    $action = $_POST['action'];

    switch ($action) {
        case 'Insert':
            insertPassenger($conn);
            break;
        case 'Delete':
            deletePassenger($conn);
            break;
        case 'Update':
            updatePassenger($conn);
            break;
        case 'View':
            viewPassengers($conn);
            break;
    }
}

// Insert Passenger Details
function insertPassenger($conn) {
    $name = $_POST['name'];
    $from = $_POST['from'];
    $to = $_POST['to'];
    $departure_date = $_POST['departure_date'];
    $arrival_date = $_POST['arrival_date'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];

    $sql = "INSERT INTO passengers (name, from_location, to_location, departure_date, arrival_date, phone, email)
            VALUES ('$name', '$from', '$to', '$departure_date', '$arrival_date', '$phone', '$email')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Delete Passenger Record
function deletePassenger($conn) {
    $phone = $_POST['phone'];

    $sql = "DELETE FROM passengers WHERE phone='$phone'";

    if ($conn->query($sql) === TRUE) {
        echo "Record deleted successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Update Passenger Details
function updatePassenger($conn) {
    $name = $_POST['name'];
    $from = $_POST['from'];
    $to = $_POST['to'];
    $departure_date = $_POST['departure_date'];
    $arrival_date = $_POST['arrival_date'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];

    $sql = "UPDATE passengers SET name='$name', from_location='$from', to_location='$to', 
            departure_date='$departure_date', arrival_date='$arrival_date', email='$email'
            WHERE phone='$phone
            
            '";

    if ($conn->query($sql) === TRUE) {
        echo "Record updated successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// View Passenger Records
function viewPassengers($conn) {
    $sql = "SELECT * FROM passengers";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo "<table border='1'><tr><th>Name</th><th>From</th><th>To</th><th>Departure Date</th><th>Arrival Date</th><th>Phone</th><th>Email</th></tr>";
        while($row = $result->fetch_assoc()) {
            echo "<tr><td>" . $row["name"]. "</td><td>" . $row["from_location"]. "</td><td>" . $row["to_location"]. "</td><td>" . $row["departure_date"]. "</td><td>" . $row["arrival_date"]. "</td><td>" . $row["phone"]. "</td><td>" . $row["email"]. "</td></tr>";
        }
        echo "</table>";
    } else {
        echo "0 results";
    }
}

$conn->close();
?>
