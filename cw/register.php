<?php
//ini_set("display_errors", 1);
if ($_POST) {
	$username = htmlspecialchars($_POST['username']);
	$gender = htmlspecialchars($_POST['gender']);
	$nationality = htmlspecialchars($_POST['nationality']);
	$passport = htmlspecialchars($_POST['passport']);
	$member = htmlspecialchars($_POST['member']);
	$student = htmlspecialchars($_POST['student']);
	$organization = htmlspecialchars($_POST['organization']);
	$cost = htmlspecialchars($_POST['cost']);
	$paper = htmlspecialchars($_POST['paper']);
	$hotel = htmlspecialchars($_POST['hotel']);
	$tourism = htmlspecialchars($_POST['tourism']);
	$email = htmlspecialchars($_POST['email']);
	$password = substr(md5($username + $email), 0, 6);
	$file = '';

	if ($_FILES["file"]["size"] < 2000000){
		if ($_FILES["file"]["error"] > 0) {
			//echo "Return Code: " . $_FILES["file"]["error"] . "<br />";
			echo "<script>alert(\"error\"); location.href='http://cw2016.cqut.edu.cn'</script>";
		} else {
			// echo "Upload: " . $_FILES["file"]["name"] . "<br />";
			// echo "Type: " . $_FILES["file"]["type"] . "<br />";
			// echo "Size: " . ($_FILES["file"]["size"] / 1024) . " Kb<br />";
			// echo "Temp file: " . $_FILES["file"]["tmp_name"] . "<br />";

			if (file_exists("upload/" . $_FILES["file"]["name"])) {
		  		// echo $_FILES["file"]["name"] . " already exists. ";
	  		} else {
				move_uploaded_file($_FILES["file"]["tmp_name"],
				"upload/" . substr(md5($_FILES["file"]["name"]), 0, 6) . ".jpg");
				$file = "upload/" . substr(md5($_FILES["file"]["name"]), 0, 6) . ".jpg";
				// echo "Stored in: " . "upload/" . $_FILES["file"]["name"];
			}
		}
  	} else {
		// echo "Invalid file";
		echo "<script>alert(\"error\"); location.href='http://cw2016.cqut.edu.cn'</script>";
	}


	$con = mysql_connect("127.0.0.1","root","cfc2013114");
	if (!$con) {
		die('Could not connect: ' . mysql_error());
	} else {
		mysql_select_db("cw2016", $con);
		$sql = "INSERT INTO userinfo (`username`, `email`, `gender`, `nationality`, `passport`, `member`, `student`, `organization`, `cost`, `paper`, `hotel`, `tourism`, `password`, `file`) 
		VALUES ('".$username."', '".$email."', '".$gender."', '".$nationality."', '".$passport."', '".$member."', '".$student."', '".$organization."', '".$cost."', '".$paper."', '".$hotel."', '".$tourism."', '".$password."', '".$file."')";
		$res = mysql_query($sql);

		if ($res) {
			require './PHPMailer/PHPMailerAutoload.php';

			$mail = new PHPMailer;

			//$mail->SMTPDebug = 3;                               // Enable verbose debug output

			$mail->isSMTP();                                      // Set mailer to use SMTP
			$mail->Host = 'smtp.exmail.qq.com';  // Specify main and backup SMTP servers
			$mail->SMTPAuth = true;                               // Enable SMTP authentication
			$mail->Username = 'cw2016@jiavan.com';                 // SMTP username
			$mail->Password = 'CW2016@admin.cqut';                           // SMTP password
			$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
			$mail->Port = 587;                                    // TCP port to connect to

			$mail->setFrom('cw2016@jiavan.com', 'cw2016@jiavan.com');
			$mail->addAddress('mail@jiavan.com', 'jiavan');     // Add a recipient

			$mail->isHTML(true);                                  // Set email format to HTML

			$mail->Subject = 'Welcome to CW2016!';
			$mail->Body    = 'Your password is :'.$password;
			$mail->AltBody = '';

			if(!$mail->send()) {
			    // echo 'Message could not be sent.';
			    // echo 'Mailer Error: ' . $mail->ErrorInfo;
			    // echo "error";
			    echo "<script>alert(\"error\"); location.href='http://cw2016.cqut.edu.cn'</script>";
			} else {
			    //echo 'Message has been sent';
			    echo "<script>alert(\"We have send a email to $email\"); location.href='http://cw2016.cqut.edu.cn'</script>";
			}
		} else {
			echo "<script>alert(\"error\"); location.href='http://cw2016.cqut.edu.cn'</script>";
		}
		mysql_close($con);
	}
}
?>