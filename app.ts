// get the client
require('dotenv').config();
const mysql = require('mysql2');

const { DB_HOST, DB_USER, DB_PWD } = process.env;

// create the connection to database
const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PWD,
});

connection.connect(function (err: any) {
  if (err) throw err;
  console.log('Connected!');
});
