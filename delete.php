<?php 
// LEGGO JSON
$fileContent = file_get_contents("data.json");
// CONVERTO JSON IN ARRAY
$tasks = json_decode($fileContent, true);
//ELIMINO UN TASK
array_splice($tasks, $_POST["indice"], 1);
//CONVERTO L'ARRAY NUOVAMENTE IN UN JSON
$fileContent = json_encode($tasks);
//SCRIVO IL JSON SUL DISCO
file_put_contents("data.json", $fileContent);
//Setto l'header
header('Content-Type: application/json');
//restituisco il nuovo json con il contenuto aggiornato del file
echo $fileContent;
