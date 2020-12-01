var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    title: {type: String, unique: true, require: true},
    current_page: {type: Number, default: 0},
    length: {type: Number, required: true}
  }, {
    collection: 'books'
});

module.exports = mongoose.model("Book", BookSchema);
