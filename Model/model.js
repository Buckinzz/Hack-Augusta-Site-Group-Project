const mysql = require('mysql');
const connection = mysql.createConnection({
    host     : '',
    user     : '',
    password : '',
    database : ''
});

connection.connect();

/* Exports information for use elsewhere */
module.exports = connection;