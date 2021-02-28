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
    // Format burger for use in template
    const burgerObj = {
      burgers: result,
    };

    // Confirm object mimics model
    console.log(burgerObj);

    // Return dynamically generated index view
    res.render('index', burgerObj);
  });
});

// Add new burger
router.post('/api/burgers', (req, res) => {
  burger.create(req.body, (result) => {
    // If successful, return status object to client
    res.status(201).json({
      success: true,
      id: result.insertId,
    });
  });
});

// Update existing burger
router.put('/api/burgers/:id', (req, res) => {
  burger.update(req.body, req.params, (result) => {
    // If update fails, send 404 back to client
    if (result.affectedRows === 0) {
      res.status(404).json({ success: false });
    }

    // If update succeeds, return status object to client
    res.status(200).json({ success: true });
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
