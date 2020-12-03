var express = require('express');
var router = express.Router();
var controller = require('../controller/gutenberg');

router.route('/search/:prefix')
    .get(controller.withPrefix)

module.exports = router;
