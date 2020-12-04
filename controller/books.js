var {Book} = require('../model/book');

function create(req, res, next) {
  let newBook = new Book(req.body);

  newBook.save(function (err) {
    if (err)
      return next(err);
    res.json({
      message: 'Book was created'
    });
  });
}

function listAll(req, res, next) {
  Book.find({}, function(err, book) {
    if (err) {
      console.error(err);
      return next(err);
    }
    res.json(book)
  })
}

function deleteBook(req, res) {
  let bookToDelete = new Book(req.body);
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
  let bookToUpdate = new Book(req.body);
  Book.findOne({ title: bookToUpdate.title}, (err, result) => {
      if (err) {
        console.error(error);
        res.status(404);
        res.send();
      } else {

        result.current_page = bookToUpdate.current_page;
        result.length = bookToUpdate.length;
        // Then update.
        result.save().then(() => {
          // We saved the new updated book, lets write the change to the data.
        })
      }
  });
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
