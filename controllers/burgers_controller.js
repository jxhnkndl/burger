// Import Express
const { Router } = require('express');
const express = require('express');

// Init router
const router = express.Router();

// Import burger model
const burger = require('../models/burger');

// Get all burgers
router.get('/', (req, res) => {
  burger.all((result) => res.json(result));
});

// Export router
module.exports = router;