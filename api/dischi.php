<?php

$dischiJson = file_get_contents(__DIR__ . '/../db/dischi.json');

header('Content-Type: application/json');
header("Access-Control-Allow-Headers: X-Requested-With");

echo $dischiJson;
?>