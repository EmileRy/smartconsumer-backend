<?php

$host = "localhost";
$user = "root";
$password = "";
$dbname = "tutorial";

$con = mysql_connect($host,$user,$password,$dbname);

if (!$con){
    die('Connection failed : '.mysqli_connect_error());
}