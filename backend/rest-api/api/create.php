<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: POST');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../config/Database.php';
  include_once '../models/User.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate user object
  $post = new User($db);

  // Get raw posted data
  $data = json_decode(file_get_contents("php://input"));

  $post->first_name = $data->first_name;
  $post->last_name = $data->last_name;
  $post->age = $data->age;
  $post->email = $data->email;
  $post->phone_no = $data->phone_no;
  $post->location = $data->location;

  // Create user
  if($post->first_name && $post->last_name && $post->age && $post->email && $post->phone_no && $post->location){
  if($post->create()) {
    echo json_encode(
      array('message' => 'Data Created')
    );
  } else {
    echo json_encode(
      array('message' => 'Data Not Created')
    );
  }
}