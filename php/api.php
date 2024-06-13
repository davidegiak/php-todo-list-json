<?php

$toDo = [
    'fai questo',
    'fai quello',
    'fai questo',
    'fai quello',
    'fai questo',
    'fai quello',
    'fai questo',
    'fai quello',
    'fai questo',
    'fai quello',
];

header('Content-Type: application/json');

$jsonString = json_encode($toDo);

echo $jsonString;