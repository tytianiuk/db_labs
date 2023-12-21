'use strict';

const mysql = require('mysql2');

const pool = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'asd_1q2q3q4q5q',
  database: 'opinio'
});

module.exports = { pool };