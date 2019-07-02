<?php 
move_uploaded_file($_FILES["video"]["tmp_name"], "../../../public/videos/" . $_POST["name"]);
?>
