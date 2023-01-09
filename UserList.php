<?php
 header("Access-Control-Allow-Origin", "*");
 header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");


// header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
// header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
//$urlServer = 'http://localhost/ReactApps/food-web';
$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "food-web";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

    
//$email=$_GET["email1"];
//$emial1="ishfaq@hhh";
//$password=$_GET['password'];

//echo $email;
    //  $trp = mysqli_query($conn, "select * from userfood where email = 'ishfaq@gmail.com'  ");
    $trp = mysqli_query($conn, "select * from userfood  ");
   // $trp = mysqli_query($conn, "select * from userfood where email = 'ishfaq@gmail.com' and password ='123lhr' ");
    $rows = array();
    while($r = mysqli_fetch_assoc($trp)) {
        $rows[] = $r;
    }
   print json_encode($rows); //convert php data to json data
  // echo json_encode($response);
?>
