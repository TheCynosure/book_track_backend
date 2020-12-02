var {History} = require('../model/book');

function create(req, res, next) {
    let newHistory = new History(req.body);

    newHistory.save(function (err) {
        if (err)
            return next(err);
        res.json({
            message: 'Book was created'
        });
    });
}

function listAll(req, res, next) {
    History.find({}, function(err, book) {
        if (err)
            return next(err);
        res.json(book)
    })
}

module.exports = {create, listAll};
