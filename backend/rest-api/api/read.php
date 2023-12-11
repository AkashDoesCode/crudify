<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');

  include_once '../config/Database.php';
  include_once '../models/User.php';


  $database = new Database();
  $db = $database->connect();


  $user = new User($db);


  $result = $user->read();
  //var_dump($result);
  // Get row count
  $num = $result->rowCount();



  if($num > 0) {
    // Post array
    $users_arr = array();

    while($row = $result->fetch(PDO::FETCH_ASSOC)) {
      extract($row);

      $user_item = array(
        'id' => $id,
        'first_name' => $first_name,
        'last_name' => $last_name,
        'age' => $age,
        'email' => $email,
        'phone_no' => $phone_no,
        'location' => $location
      );

      // Push to "data"
      array_push($users_arr, $user_item);
    }

    // Turn to JSON & output
    echo json_encode($users_arr);

  } else {
    // No Posts
    echo json_encode(
      array('message' => 'No data Found')
    );
  }