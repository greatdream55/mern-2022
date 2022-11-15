module.exports = (DB_NAME) => {

    // 1. require the sql driver
    var mysql = require('mysql');


    // ! don't forget to create the DB in workbench
    // 2. mysql config
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: DB_NAME
    });

    // 3. connect to sql?
    connection.connect(function (err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }

        console.log('connected as id ' + connection.threadId);
    });

    // connection.query('INSERT INTO chips (name, saltiness) VALUES ("sunchips", 100)', function (error, results, fields) {
    //     if (error) throw error;
    //     console.log('affected ' + results.affectedRows + ' rows');
    // })

    connection.query('SELECT * FROM chips', (err, b) => {
        console.log(err, b)
    })

}