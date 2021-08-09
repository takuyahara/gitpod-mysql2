'use strict';

// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  database: 'mysql',
  port: 3307,
});

// simple query
connection.query(
    'SELECT `User` FROM `user`',
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
);

connection.end();
