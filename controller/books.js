var Book = require('../model/book');

function create(req, res, next) {
  var newBook = new Book(req.body);

  newBook.save(function (err) {
    if (err)
      return next(err);
    res.json({
      message: 'Book was created'
    });
  })
}

function listAll(req, res, next) {
  Book.find({}, function(err, book) {
    if (err)
      return next(err);
    res.json(book)
  })
}

module.exports = {create, listAll};
