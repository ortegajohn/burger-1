// =============================================================//
//                 REQUIREMENTS & DEPENDENCIES
// =============================================================//

var mysql = require('mysql');

var connection;
  
if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    port: 3306,
    host: 'xefi550t7t6tjn36.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    // host: 'localhost',
    user: 'bzo7crtjyvjvs0w8',
    // user: 'root',
    // password: 'root',
    password: 'l653lfq6qh5ukwgs',
    database: 'phkqjdznibi0l3nm'
});
}

  console.log('connected!')


connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;