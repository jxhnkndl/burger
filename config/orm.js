// Import database connection (connection.js)
const connection = require('./connection');

// Helper: Convert JavaScript objects to sql strings
const objToSql = (obj) => {
  // Init sql output string
  let sql = '';

  // Iterate over object and add own keys/vals to array
  const arr = Object.entries(obj);

  // Iterate over array to create sql query string
  arr.forEach((keyVal, index) => {
    // The idea here is to iterate over the object of
    // key/value pairs and convert them into an sql
    // string. Below, if the current value is a string,
    // wrap it in quotes in the final output. Otherwise,
    // if the value is a boolean or a number, leave it
    // unwrapped.

    if (typeof keyVal[1] === 'string') {
      sql += `${keyVal[0]}='${keyVal[1]}'`;
    } else {
      sql += `${keyVal[0]}=${keyVal[1]}`;
    }

    // Additionally, commas get inserted in between
    // key/value pairs in the final query string.

    if (index < arr.length - 1) {
      sql += ',';
    }
  });

  // Return the fully constructed sql string
  return sql;
};

// ORM object
const orm = {
  // Select all burgers
  selectAll(table, cb) {
    let queryString = `SELECT * FROM ${table}`;
    console.log(queryString);
    connection.query(queryString, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },

  // Add single burger
  insertOne(table, objColVals, cb) {
    let queryString = `INSERT INTO ${table} `;
    queryString += `SET ${objToSql(objColVals)}`;
    console.log(queryString);
    connection.query(queryString, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },

  // Update burger
  updateOne(table, objColVals, condition, cb) {
    let queryString = `UPDATE ${table} `;
    queryString += `SET ${objToSql(objColVals)} `;
    queryString += `WHERE ${objToSql(condition)}`;
    console.log(queryString);
    connection.query(queryString, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },

  // Delete burger
  deleteOne(table, condition, cb) {
    let queryString = `DELETE FROM ${table} `;
    queryString += `WHERE ${objToSql(condition)}`;
    console.log(queryString);
    connection.query(queryString, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  },
};

// Export ORM object
module.exports = orm;