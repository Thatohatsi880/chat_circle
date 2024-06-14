const express = require('express')
const router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('ChatCircle app running');
  });
module.exports = router;