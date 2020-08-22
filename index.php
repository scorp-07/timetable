<?php

require_once 'connect/db.php';

$host = 'localhost:3306';
$user = 'root';
$pass = '';
$dbname = 'timetable';

$db = new db($host, $user, $pass, $dbname);


$insert = $db->query('INSERT INTO test (title, name) VALUES (?,?)', 'OOP', 'Class');
$insert->affectedRows();

$test = $db->query('SELECT * FROM `test`')->fetchAll();
foreach ($test as $name) {
    print_r($name);
    echo '<br>';
}