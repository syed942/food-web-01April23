
<?php 
header('Content-Type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");


header("Access-Control-Allow-Origin", "Origin");
header('Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS,PATCH');
header('Access-Control-Allow-Origin: *');

header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$response = array();
$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "food-web";
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}else{
    echo "connection made";
  // echo $_POST['name'];
}
$DIR = 'public/images/';
//$urlServer = 'http://localhost';
$urlServer = 'http://localhost/ReactApps/food-web';
//$urlServer= $DIR;
echo $_FILES["image"]["name"];
if($_FILES['image'])
{
   
    $fileName = $_FILES["image"]["name"];  
    echo $fileName;
    $tempFileName = $_FILES["image"]["tmp_name"];
    $error = $_FILES["image"]["error"];

    if($error > 0){
        $response = array(
            "status" => "error",
            "error" => true,
            "message" => "Error uploading the file!"
        );
    }else 
    {
        $FILE_NAME = rand(10, 1000000)."-".$fileName;
        $UPLOAD_IMG_NAME = $DIR.strtolower($FILE_NAME);
        $UPLOAD_IMG_NAME = preg_replace('/\s+/', '-', $UPLOAD_IMG_NAME);
      //  move_uploaded_file($tempFileName , $UPLOAD_IMG_NAME);
     //echo $UPLOAD_IMG_NAME;
 $image=move_uploaded_file($tempFileName , $UPLOAD_IMG_NAME);
    
        if(move_uploaded_file($tempFileName , $UPLOAD_IMG_NAME)) {
            $response = array(
                "status" => "success",
                "error" => false,
                "message" => "Image has uploaded",
            //    "url" => $urlServer.$UPLOAD_IMG_NAME
             "url" => $urlServer."/".$UPLOAD_IMG_NAME
             
 

// "url" => $Dir."/".$UPLOAD_IMG_NAME
              );
              echo $UPLOAD_IMG_NAME;
      
             
        }else
        {
            $response = array(
                "status" => "error",
                "error" => true,
                "message" => "Error occured"
            );
        }
       
    }
   
}

else{
    $response = array(
        "status" => "error",
        "error" => true,
        "message" => "File not found"
    );
}

$filepath=$UPLOAD_IMG_NAME;
$basename = preg_replace('/^.+[\\\\\\/]/', '', $filepath);
//echo $filepath;


 
 //$Imgname1= 'images/61116-1.jpg';
 
 
 $Imgname1= 'images/'.$basename;
 echo $Imgname1;

//  $request=json_decode($postdata);
//  $name=$request-> name;
//  echo $name; 

 
$id=$_POST['id'];
echo $id;
$name=$_POST['name1'];
$email=$_POST['email'];
$password=$_POST['password'];



//$sql = mysqli_query($conn, "insert into user1 (userId,name,image) values(null,'imran shah','kki')");
// $trp = mysqli_query($conn, "insert into userfood (userId,name,image,email,password) values(null,'${name}','${Imgname1}','${email}','${password}')");
$trp = mysqli_query($conn,"update userfood set name ='${name}', password='${password}'

where email= '${email}' ;"  );
$rows = array();
while($r = mysqli_fetch_assoc(true)) {
   $rows[] = $r;
}
print json_encode($rows);

echo json_encode($response);

?>

?>
