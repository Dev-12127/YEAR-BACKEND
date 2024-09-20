var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  const current = new Date().getFullYear();
  res.json({ now: current });
 });

module.exports = router;