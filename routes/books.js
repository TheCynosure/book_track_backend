var express = require('express');
var router = express.Router();
var controller = require('../controller/books')

router.route('/')
    .post(controller.create)
    .get(controller.listAll)
    .delete(controller.deleteBook)
    .put(controller.updateBook)

module.exports = router;
