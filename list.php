<?php

$fileContent = file_get_contents("data.json");

// header('Content-Type: application/json');

// $jsonString = json_encode($toDo);

// echo $jsonString;
header('Content-Type: application/json');


echo $fileContent;