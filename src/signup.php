<?php
header('Access-Control-Allow-Origin: *'); //cho phép truy cập từ bất kìu domain nào
header('Content-Type: application/json');
header('Access-Control-Allow-Methods:GET,PUT,POST,DELETE');
header('Access-Control-Allow-Headers:*');

$pdo = new PDO('mysql:host=localhost;dbname=cp17_test', 'root',
    'koodinh');
$pdo->exec('SET NAMES UTF8');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

//lấy dữ liệu
$data = json_decode(file_get_contents("php://input"), true);

//check dữ liệu
$rs = $pdo->query('SELECT count(*) as count FROM user WHERE `email`="'.$data['email'].'"');
$rs = $rs->fetchObject();
if ($rs->count > 0) {
    http_response_code('500');
    echo json_encode(['failed' => 'Email đã tồn tại trong hệ thống']);
    exit();
};

$rs = $pdo->query('SELECT count(*) as count FROM user WHERE phone="'.$data['phone'].'"');
$rs = $rs->fetchObject();
if ($rs->count > 0) {
    http_response_code('500');
    echo json_encode(['failed' => 'Phone đã tồn tại trong hệ thống']);
    exit();
};


$prp = $pdo->prepare('INSERT INTO user(email,password,fullname,phone,address) 
VALUES(:email,:password,:fullname,:phone,:address)');
$prp->bindParam(':email', $email);
$prp->bindParam(':password', $password);
$prp->bindParam(':fullname', $fullname);
$prp->bindParam(':phone', $phone);
$prp->bindParam(':address', $address);

$email = $data['email'];
$password = md5($data['password']);
$fullname = $data['fullname'];
$phone = $data['phone'];
$address = $data['address'];

try {
    $prp->execute();
    echo json_encode([
        'message' => 'Đăng ký thành công',
    ]);
} catch (Exception $e) {

    echo json_encode([
        'failed' => 'Đăng ký thất bại'
    ]);
}


?>