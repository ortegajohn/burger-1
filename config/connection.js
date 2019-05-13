// =============================================================//
//                 REQUIREMENTS & DEPENDENCIES
// =============================================================//

var mysql = require('mysql');

var connection;
  
  connection = mysql.createConnection({
    port: 8889,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'burgers_db'
  });

  console.log('connected!')


connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;