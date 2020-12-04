var mongoose = require('mongoose');

var PageUpdateSchema = new mongoose.Schema({
    title: {type: String, unique: true, require: true},
    pages_read: {type: Number, require: true}
});

module.exports = {
    PageUpdate: mongoose.model('PageUpdate', PageUpdateSchema)
};
