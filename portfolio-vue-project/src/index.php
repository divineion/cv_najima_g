<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS"); 
header("Access-Control-Allow-Headers: Content-Type"); 

require '../config.php';
require '../vendor/autoload.php';


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


// récupérer les data d'axios
$postData = file_get_contents('php://input');

// Convertir les données JSON en un tableau associatif
$postData = json_decode($postData, false);

if ($postData !== null) {
    $username = $postData->username;
    $firstname = $postData->firstname;
    $useremail = $postData->email;
    $message = $postData->message;

    //Create an instance; passing `true` enables exceptions
    $mail = new PHPMailer(true);

    try {
        //Paramétrage du serveur SMTP
        $mail->SMTPDebug = SMTP::DEBUG_OFF;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'grey.o2switch.net';                       //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //SMTP authentication
        $mail->Username   = 'divineion@guna5089.odns.fr';             //SMTP username
        $mail->Password   = pwd;                                    //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
        $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom('divineion@guna5089.odns.fr');
        $mail->addAddress('divineion@guna5089.odns.fr');              //Add a recipient
        //$mail->addAddress('ellen@example.com');                   //Name is optional
        $mail->addReplyTo($useremail);

        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = 'Contact depuis votre site';
        $mail->Body    = $message;

        $sent = $mail->send();
        if ($sent) {
            $response = array(
                'status' => 'success',
                'message' => 'Message sent successfully'
            );
        } else {
            $response = array(
                'status' => 'error',
                'message' => 'Message could not be sent'
            );
        }
        echo json_encode($response);
        return;
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>