"use strict";
// get the client
const mysql = require('mysql2');
// create the connection to database
const connection = mysql.createConnection({
    host: 'happymak.mysql.tools',
    user: 'happymak_petsearch',
    password: ';2xK94Us(k',
});
connection.connect(function (err) {
    if (err)
        throw err;
    console.log('Connected!');
});
