var express = require('express');
var router = express.Router();
var controller = require('../controller/history');

router.route('/')
    .post(controller.create)
    .get(controller.listAll)

module.exports = router;
