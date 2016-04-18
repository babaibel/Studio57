<?
if((isset($_POST['fb'])&&$_POST['fb']!="")&&(isset($_POST['area'])&&$_POST['area']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'prasolova20@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Получить бесплатную консультацию'; //Заголовок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Помещение: <b>'.$_POST['fb'].'</b></p>
                        <p>Площадь: <b>'.$_POST['area'].'</b></p>
                        <p>Телефон: <b>'.$_POST['phone'].'</b></p>                        
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Studio57 <from@example.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>