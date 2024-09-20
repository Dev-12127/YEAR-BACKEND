var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  const current = new Date().getFullYear().toString();
  res.json({ now: current });
 });

module.exports = router;