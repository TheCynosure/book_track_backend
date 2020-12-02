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

function deleteBook(req, res) {
  var bookToDelete = new Book(req.body);
  Book.deleteOne({ title: bookToDelete.title }, function(err) {
    if (err) {
      res.status(404);
      console.error('Error deleting title: '+  req.title);
    } else {
      res.status(200);
    }
    res.send();
  })
}

function updateBook(req, res) {
  var bookToUpdate = new Book(req.body);
  Book.findOneAndUpdate({ title: bookToUpdate.title }, bookToUpdate, {}, (err, result) => {
    if (err) {
      res.status(404);
      console.error(error);
    } else {
      res.status(200);
    }
    res.send();
  });
}

module.exports = {create, listAll, deleteBook, updateBook};
