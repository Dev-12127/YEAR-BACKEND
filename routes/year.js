var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  
  res.json({ year: "2050" });
 });

module.exports = router;