<?php
    class Product {
        public function ShowAllProduct() {
            //Conect to Database
            $options = array(PDO::ATTR_EMULATE_PREPARES => false, PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
            $dsn = "mysql:host=" . DatabaseInfo::getServer() . ";dbname=" . DatabaseInfo::getDatabaseName() . ";charset=utf8";
            $conn = new PDO($dsn, DatabaseInfo::getUserName(), DatabaseInfo::getPassword(), $options);
            
            //SQL statement declaration
            if($_SESSION['ProductType'] === 0){
                $sql = "SELECT * FROM Product";
            } else {
                $sql = "SELECT * FROM Product WHERE ProductType = '".$_SESSION['ProductType'] ."'";
            }
            
            


            // Prepare statement.
            $stmt = $conn->prepare($sql);

            //Execute sql statement
            $stmt->execute();

            $list = Array();
            while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                $product = new Product();
                $product->ProductName = $row["ProductName"];
                $product->ProductPictureLink = $row["ProductPictureLink"];
                array_push($list, $product);
            }
            // Close the database connection.
            $conn = NULL;
            return $list;
        }
    }
?>