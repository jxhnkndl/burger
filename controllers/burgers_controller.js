// Import Express
const { Router } = require('express');
const express = require('express');

// Init router
const router = express.Router();

// Import burger model
const burger = require('../models/burger');

// Get all burgers
router.get('/', (req, res) => {
  burger.all((result) => {
    res.json(result);
  });
});

// Add new burger
router.post('/api/burgers', (req, res) => {
  burger.create(req.body, (result) => {
    res.status(201).json({ id: result.insertId });
  });
});

// Delete burger
router.delete('/api/burgers/:id', (req, res) => {
  burger.delete(req.params, (result) => {
    if (result.affectedRows === 0) {
      res.status(404).json({ success: false });
    }

    res.status(200).json({ success: true });
  });
});

// Export router
module.exports = router;
