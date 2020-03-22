<?php

$userName = $_POST['userName'];
$userEmail = $_POST['userEmail'];
$userPhone = $_POST['userPhone'];
$userQuestion = $_POST['userQuestion'];



// Load Composer's autoloader
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.mail.ru';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'n2v@list.ru';                     // SMTP username
    $mail->Password   = 'VadimNekrasov51046';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = 465;                                    // TCP port to connect to
    $mail->CharSet = "UTF-8";

    //Recipients
    $mail->setFrom('n2v@list.ru');
    $mail->addAddress('n2vvadim@gmail.com');     // Add a recipient
    if (isset($_POST['userEmail'] )) {
        $mail->addAddress($_POST['userEmail'] );
        }//для отправки на ящик заполнителя
    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Новая заявка с сайта';

    $mailMessage = '';  //тут мы объявляем пустую строку
    if (isset($_POST['userName'] )) {   //тут мы проверяем пришло ли к нам значение  userName из формы
    $mailMessage .= " Имя пользователя: ${userName}" ;  // оператором   .=  мы приклеиваем к существующей строке новую строку
    }
    if (isset($_POST['userPhone'] )) {
    $mailMessage .= " Телефон пользователя: ${userPhone}" ;
    }
    if (isset($_POST['userEmail'] )) {
    $mailMessage .= " Его почта: ${userEmail}" ;
    }
    if (isset($_POST['userQuestion'] )) {
    $mailMessage .= " Его вопрос: ${userQuestion}" ;
    }
    $mail->Body    =  $mailMessage;  //в итоге мы получаем строку только с актуальными строками

//отправка формы через аякс 
   if ( $mail->send()) {
       echo "ok";
   } else {
    echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
   }
   
} 
catch (Exception $e) {
    echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
}