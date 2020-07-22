<?php
    if (isset($_POST['n']) && isset($_POST['e']) && isset($_POST['m'])) {
      $n = $_POST['n'];
      $e = $_POST['e'];
      $m = n12br($_POST['m']);
      $to = "adeogun64@gmail.com";
      $from = $e;
      $subject = "Contact form message";
      $message = "<b>Name:</b>".$n."<br><b>Email:</b>".$e."<p>".$m."</p>";
      $headers= "From: $from\n";
      $headers .= "MIME-Version: 1.0\n";
      $headers .= "Content-type: text/html; charset = iso-8859-1\n";
      if (mail($to, $subject, $message, $headers) ) {
        echo 'success';
      }else{
          echo 'The server failed to send the nessage, please try again later';
      }
    }
?>