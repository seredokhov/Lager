<?php
header('charset=utf-8');
$post = json_decode(file_get_contents("php://input"),true);
$post_map = array(
	'phone' => 'Телефон',
	'name' => 'Имя',	
	'summa' => 'Сумма займа',
	'type' => 'Тип жилой площади',
	'cost' => 'Стоимость недвижимости',
	'time' => 'Срок займа',	
	'title' => 'Название формы',
	'file' => 'файл',
	'file-link' => 'Ссылка на файл'
);


include './lib/post_prepare.php';

if ($post['phone'] !='') {
	$contact = $post['phone'];
} else {
	$contact = $post['email'];
}
	
// E-MAIL
$email = array(
	'enable' 	=> true,
	'from' 		=> 'Лагерь',
	'to'		=> 'l.hero.franchise@paradigmadel.ru',
	'subject'	=> 'Заявка: Лагерь',
	'msg'		=> $html
);

$status = true;

if($email['enable']) {
	require_once('lib/phpmailer.php');
	$rcpt = explode(',', $email['to']);

	// mail
	$mail = new PHPMailer();
	$mail->From = 'no-reply@'.$_SERVER['HTTP_HOST'];
	$mail->FromName =  $email['from'];
	foreach ($rcpt as $adr) {
		$mail->AddAddress(trim($adr));
	}
	$mail->Subject = $email['subject'];
	$mail->MsgHTML($email['msg']);
   
	if (!$mail->Send()) {
		$status = false;
	} 
}

echo json_encode(array(
  'state'=>$state,
  'status'=>$status,
  //'html'=>$html
));
?>