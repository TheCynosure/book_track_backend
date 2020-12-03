var mongoose = require('mongoose');
var fs = require('fs');
var readline = require('readline');
var { GBook } = require('./model/gutenbergBook');

mongoose.connect('mongodb://127.0.0.1:27017/book_track', {useNewUrlParser: true, useUnifiedTopology: true});

const read = readline.createInterface({
  input: fs.createReadStream('./public/data/titles.txt'),
});

titles = []

read.on('line', function(line) {
  titles.push({ title: line });
}).on('close', () => {
  // Save each one into the database.
  GBook.insertMany(titles, function(err) {
    if (err)
      console.error(err)
    process.exit(0);
  });
})
