var {GBook} = require('../model/gutenbergBook');

function withPrefix(req, res, next) {
    let prefix = req.params.prefix;
    let regex = "^" + prefix + ".*";
    console.log(prefix);
    GBook.find({ title: { $regex: new RegExp(`^${prefix}.*`, 'i') } }, (error, result) =>{
        if (error) {
            res.status(404);
            console.log(error);
            res.send();
        } else {
            let results = result;
            if (results.length > 20) {
                results = results.splice(0, 20);
            }
            res.status(200);
            res.json(results);
        }
    });
}

module.exports = {withPrefix};
