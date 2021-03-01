// Import MySQL
const mysql = require('mysql');

// Init connection variable
let connection;

// Config database connection
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'burgers_db'
  });
}

// Establish database connection
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connection at id ${connection.threadId}`);
});

// Export connection object
module.exports = connection;