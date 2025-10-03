const express = require('express');
const router = express.Router();

// Placeholder API route
router.get('/status', (req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

module.exports = router;
