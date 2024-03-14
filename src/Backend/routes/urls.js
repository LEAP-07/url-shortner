const express = require('express')
const urlController = require('../controller/urlController.js')
const router = express.Router();

// api call to controller for converting the url
router.route('/shorten')
  .post(urlController.convert);

module.exports = router;