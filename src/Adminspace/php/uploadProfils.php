<?php 
move_uploaded_file($_FILES["image"]["tmp_name"], "../../public/images/profil/" . $_FILES["image"]["name"]);
?>