<?php
    $name = htmlspecialchars($_POST['name'] ?? '');
    $phone = htmlspecialchars($_POST['phone'] ?? '');
    $email = htmlspecialchars($_POST['email'] ?? '');
    $message = htmlspecialchars($_POST['message'] ?? '');

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die('Ошибка: Некорректный email.');
    }

    if (empty($name) || empty($phone) || empty($email)) {
        die('Ошибка: Заполните все поля формы.');
    }

    $to = 'techarmsnab2024@gmail.com';
    $date = date('d.m.Y');
    $time = date('H:i');
    $subject = 'Заявка с сайта';

    $from = 'techarmsnab2024@gmail.com';

    $msg = "
    Имя: $name\n
    Телефон: $phone\n
    Почта: $email\n
    Сообщение: $message\n
    Дата: $date\n
    Время: $time\n";

    $headers = "From: $from\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    if (mail($to, $subject, $msg, $headers)) {
        echo "Форма успешно отправлена!";
    } else {
        echo "Ошибка при отправке формы.";
    }
?>
