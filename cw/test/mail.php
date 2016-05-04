<?php
  if (empty ($_POST['mailto']) ) {
    die ( "Recipient is blank! ") ;
  }
  if (empty ($_POST['$mailsubject']) ){
    $mailsubject=" " ;
  }
  if (empty ($_POST['$mailbody']) ) {
    $mailbody=" " ;
  }
  $result = mail ($mailto, $mailsubject, $mailbody) ;
  //send the email
  if ($result) {
    echo "Email sent successfully!" ;
  }else{
    echo "Email could not be sent." ;
  }
?>