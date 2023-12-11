<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: PUT');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

  include_once '../config/Database.php';
  include_once '../models/User.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate blog post object
  $post = new User($db);

  // Get raw posted data
  $data = json_decode(file_get_contents("php://input"));

  // Set ID to update
  $post->id = $data->id;
  $post->first_name = $data->first_name;
  $post->last_name = $data->last_name;
  $post->age = $data->age;
  $post->email = $data->email;
  $post->phone_no = $data->phone_no;
  $post->location = $data->location;
  // Update post
  if($post->update()) {
    echo json_encode(
      array('message' => 'Data Updated')
    );
  } else {
    echo json_encode(
      array('message' => 'Data Not Updated')
    );
  }

