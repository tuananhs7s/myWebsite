<?php
    require_once ('Core/productX.php');
    require_once ('Core/PresetFile/librarySql.php');
    if(isset($_POST['dataX'])){
        session_start();

        if($_POST['dataX'] === '0'){               
            $_SESSION['ProductType']= 0;           
        }

        if($_POST['dataX'] === '1'){               
            $_SESSION['ProductType']= 1;           
        }

        if($_POST['dataX'] === '2'){               
            $_SESSION['ProductType']= 2;           
        }

        if($_POST['dataX'] === '3'){               
            $_SESSION['ProductType']= 3;           
        }

        

        $Product = new Product();
        $MyArrayX = $Product->ShowAllProduct();
        $stringX = "";
        for ($i = 0; $i < count($MyArrayX); $i++){
            $ObjX = $MyArrayX[$i];
            $stringX .='
                <div class="item">
                    <img src="'. $ObjX->ProductPictureLink.'" alt="fdg">
                    <p>'. $ObjX->ProductName.'</p>
                </div>
            ';
        } 
        echo $stringX;      
    }
?>