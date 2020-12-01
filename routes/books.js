var express = require('express');
var router = express.Router();
var controller = require('../controller/books')

router.route('/').post(controller.create).get(controller.listAll)

module.exports = router;
