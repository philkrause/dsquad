<?php

require 'database.php';
$message =[];
$messages = pg_query("SELECT message, send_name, message_date
 FROM texts);

