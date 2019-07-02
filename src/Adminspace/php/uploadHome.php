<?php
define('UPLOAD_DIR', '../../../public/images/home/');
$img = $_POST['file']; //base64 string
$data = file_get_contents($img);
$name = $_POST['name']; //name
$file = UPLOAD_DIR . $name ;
$success = file_put_contents($file, $data);
print $success ? $file : 'Unable to save the file.';
?>