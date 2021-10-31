<?php 
    header('Access-Control-Allow-Origin: *');

    $db_host = 'localhost';
    $db_user = 'root';
    $db_password = 'root';
    $db_db = 'test';
	$db_table = 'people';
 

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $who = $_POST['who'];
 
    if($_POST['act'] == 'addToTable'){
        $conn = new mysqli($db_host, $db_user, $db_password, $db_db);
            if($conn->connect_error){
                die("Ошибка: " . $conn->connect_error);
            }
           $sql = "INSERT INTO $db_table  (name, phone, who) VALUES ('$name', '$phone', '$who')";
            if($conn->query($sql)){
        
                $sql = mysqli_query($conn, "SELECT * FROM $db_table ORDER BY id DESC LIMIT 1");
                $result = mysqli_fetch_all($sql, MYSQLI_ASSOC);

                echo(json_encode($result));
           
            } else{
                echo "Ошибка: " . $conn->error;
            }
        $conn->close();
    }elseif($_POST['act'] == 'updateToTable'){
        $con = mysqli_connect( $db_host, $db_user, $db_password, $db_db) or die(mysql_error());
        $sql = mysqli_query($con, "SELECT * FROM $db_table");
        $result = mysqli_fetch_all($sql, MYSQLI_ASSOC);
        exit(json_encode($result));
    }elseif($_POST['act'] == 'deleteItemTable'){
        $postUserId = $_POST["id"];
        $con = mysqli_connect( $db_host, $db_user, $db_password, $db_db) or die(mysql_error());
        $userid = mysqli_real_escape_string($con, $postUserId);
        $sql = "DELETE FROM $db_table WHERE id = '$userid'";
        if(mysqli_query($con, $sql)){
            echo($postUserId);
        } else{
            echo "Ошибка: " . mysqli_error($con);
        }
    }elseif($_POST['act'] == 'updateItemInTable'){
        $con = mysqli_connect( $db_host, $db_user, $db_password, $db_db) or die(mysql_error());

        $userId = $con->real_escape_string($_POST["id"]);
        $postUserName = $con->real_escape_string($_POST["name"]);
        $postUserPhone = $con->real_escape_string($_POST["phone"]);
        $postUserWho = $con->real_escape_string($_POST["who"]);

        $sql = "UPDATE $db_table SET name = '$postUserName', phone = '$postUserPhone', who = '$postUserWho' WHERE id = '$userId'";

        if(mysqli_query($con, $sql)){
            echo('OK');
        } else{
            echo "Ошибка: " . mysqli_error($con);
        }
    }

    
?>
