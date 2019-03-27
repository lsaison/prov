<?php
$name = $_POST['name'];
$adress = $_POST['adress'];
$postcode = $_POST['postcode'];
$province = $_POST['province'];
$country = $_POST['country'];
$email = $_POST['email'];

header('Content-Type: application/json');
if ($name === ''){
  print json_encode(array('message' => 'Name cannot be empty', 'code' => 0));
  exit();
}
if ($email === ''){
  print json_encode(array('message' => 'Email cannot be empty', 'code' => 0));
  exit();
} else {
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
  print json_encode(array('message' => 'Email format invalid.', 'code' => 0));
  exit();
  }
}
if ($adress === ''){
  print json_encode(array('message' => 'Subject cannot be empty', 'code' => 0));
  exit();
}
if ($postcode === ''){
  print json_encode(array('message' => 'Message cannot be empty', 'code' => 0));
  exit();
}
// $content="From: $name \nEmail: $email \nMessage: $message";
// $recipient = "youremail@here.com";
// $mailheader = "From: $email \r\n";
// mail($recipient, $subject, $content, $mailheader) or die("Error!");
print json_encode(array('message' => 'Coordinates successfully recorded!', 'code' => 1));
exit();
?>