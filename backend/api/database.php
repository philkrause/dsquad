<?php
define('DB_NAME', 'textmessages');

function connect()
{
  $connect = pg_connect('dbname=DB_NAME connect_timeout=5');
  return $connect;
}
connect();

