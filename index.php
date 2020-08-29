<?php

require_once 'app/connect/db.php';
require_once 'app/function/function.php';

$host = 'localhost:3306';
$user = 'root';
$pass = '';
$dbname = 'timetable';

$db = new db($host, $user, $pass, $dbname);

$test = $db->query('SELECT `years`.`year`, `kurs`.`number`, `speciality`.`name` FROM `contingent` INNER JOIN `years` ON `years`.`id` = `contingent`.`year_id` INNER JOIN `kurs` ON `kurs`.`id` = `contingent`.`kurs_id` INNER JOIN `speciality` ON `speciality`.`id` = `contingent`.`speciality_id`')->fetchAll();

foreach ($test as $name) {
    debug($name);
    echo '<br>';
}
