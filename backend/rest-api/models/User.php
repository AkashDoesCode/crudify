<?php
    class User{
        private  $conn;
        private $table = 'user_list';


        public $id;
        public $first_name;
        public $last_name;
        public $age;
        public $email;
        public $phone_no;
        public $location;



        public function __construct($db) {
            $this->conn = $db;
          }

          public function read() {
            // Create query
            $query = 'SELECT * FROM ' . $this->table;
                        
            
            // Prepare statement
            $stmt = $this->conn->prepare($query);
      
            // Execute query
            $stmt->execute();
      
            return $stmt;
          }



          public function create() {
            // Create query
            $query = 'INSERT INTO ' . $this->table . ' SET first_name = :first_name, last_name = :last_name, age = :age, email = :email, phone_no = :phone_no, location = :location';
  
            // Prepare statement
            $stmt = $this->conn->prepare($query);
  
            // Clean data
            $this->first_name = htmlspecialchars(strip_tags($this->first_name));
            $this->last_name = htmlspecialchars(strip_tags($this->last_name));
            $this->age = htmlspecialchars(strip_tags($this->age));
            $this->email = htmlspecialchars(strip_tags($this->email));
            $this->phone_no = htmlspecialchars(strip_tags($this->phone_no));
            $this->location = htmlspecialchars(strip_tags($this->location));
  
  
            // Bind data
            $stmt->bindParam(':first_name', $this->first_name);
            $stmt->bindParam(':last_name', $this->last_name);
            $stmt->bindParam(':age', $this->age);
            $stmt->bindParam(':email', $this->email);
            $stmt->bindParam(':phone_no', $this->phone_no);
            $stmt->bindParam(':location', $this->location);

  
            // Execute query
            if($stmt->execute()) {
              return true;
            }
  
            // Print error if something goes wrong
            printf("Error: %s.\n", $stmt->error);
  
            return false;
          }


          public function update() {
            // Create query
            $query = 'UPDATE ' . $this->table . '
            SET first_name = :first_name, last_name = :last_name, age = :age, email = :email, phone_no = :phone_no, location = :location
                                  WHERE id = :id';
  
            // Prepare statement
            $stmt = $this->conn->prepare($query);
  
            // Clean data
            $this->id = htmlspecialchars(strip_tags($this->id));
            $this->first_name = htmlspecialchars(strip_tags($this->first_name));
            $this->last_name = htmlspecialchars(strip_tags($this->last_name));
            $this->age = htmlspecialchars(strip_tags($this->age));
            $this->email = htmlspecialchars(strip_tags($this->email));
            $this->phone_no = htmlspecialchars(strip_tags($this->phone_no));
            $this->location = htmlspecialchars(strip_tags($this->location));
  
            // Bind data
            $stmt->bindParam(':id', $this->id);
            $stmt->bindParam(':first_name', $this->first_name);
            $stmt->bindParam(':last_name', $this->last_name);
            $stmt->bindParam(':age', $this->age);
            $stmt->bindParam(':email', $this->email);
            $stmt->bindParam(':phone_no', $this->phone_no);
            $stmt->bindParam(':location', $this->location);
  
            // Execute query
            if($stmt->execute()) {
              return true;
            }
  
            // Print error if something goes wrong
            printf("Error: %s.\n", $stmt->error);
  
            return false;
          }



          public function delete(){
          // Create query
          $query = 'DELETE FROM ' . $this->table . ' WHERE id = :id';

          // Prepare statement
          $stmt = $this->conn->prepare($query);

          // Clean data
          $this->id = htmlspecialchars(strip_tags($this->id));

          // Bind data
          $stmt->bindParam(':id', $this->id);

          // Execute query
          if($stmt->execute()) {
            return true;
          }

          // Print error if something goes wrong
          printf("Error: %s.\n", $stmt->error);

          return false;
          }

    }