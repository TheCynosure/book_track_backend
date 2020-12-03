var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
    title: {type: String, unique: false, require: true},
    number: {type: Number, default: 0}
});

module.exports = {
    GBook: mongoose.model("GBook", BookSchema),
};
