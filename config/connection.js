// Import MySQL
const mysql = require('mysql');

// Config database connection
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  // Note that password has been set to 'password' for
  // assignments that require credentials be available
  // in a public repository
  password: 'password',
  database: 'burgers_db'
});

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