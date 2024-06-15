<?php
// LEGGO JSON
$fileContent = file_get_contents("data.json");

// CONTROLLO SE HO TUTTO IL NECESSARIO
if (isset($_POST["task"]) && isset($_POST["state"])) {
    // CONVERTO JSON IN ARRAY
    $tasks = json_decode($fileContent, true);
    //CREO UN NUOVO TASK
    $newTask = [
        "task" => $_POST["task"],
        "state" => $_POST['state'],
    ];
    // PUSHO IN NEWTASKS
    $tasks[] = $newTask;
    //CONVERTO L'ARRAY NUOVAMENTE IN UN JSON
    $fileContent = json_encode($tasks);
    //SCRIVO IL JSON SUL DISCO
    file_put_contents("data.json", $fileContent);
}

//Setto l'header
header('Content-Type: application/json');

//restituisco il nuovo json con il contenuto aggiornato del file
echo $fileContent;
