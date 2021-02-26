// Import ORM
const orm = require('../config/orm');

// Burger model
const burger = {
  // View all burgers
  all(cb) {
    orm.selectAll('burgers', (res) => cb(res));
  },

  // Add a new burger
  create(objColVals, cb) {
    orm.insertOne('burgers', objColVals, (res) => cb(res));
  },

  // Update a burger
  update(objColVals, condition, cb) {
    orm.updateOne('burgers', objColVals, condition, (res) => cb(res));
  },

  // Delete a burger
  delete(condition, cb) {
    orm.deleteOne('burgers', condition, (res) => cb(res));
  }
};

// Export burger model
module.exports = burger;