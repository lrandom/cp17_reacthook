<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods:GET,PUT,POST,DELETE');
header('Access-Control-Allow-Headers:*');
$pdo = new PDO('mysql:host=localhost;dbname=test_1', 'root', 'koodinh');
$data = json_decode(file_get_contents("php://input"), true);
$pdo->query('INSERT INTO test_1(content) VALUES("'.$data["content"].'")');
echo json_encode(['success' => $data]);

?>
