var mongoose = require('mongoose');
var fs = require('fs');
var { GBook } = require('./model/gutenbergBook');

mongoose.connect('mongodb://127.0.0.1:27017/book_track', {useNewUrlParser: true, useUnifiedTopology: true});

fs.readFile("./public/data/titles.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  // Else lets load them all in!
  const booksObj = JSON.parse(jsonString);
  GBook.insertMany(booksObj.books, function(err) {
    if (err)
      console.error(err);
    process.exit(0);
  });
})
