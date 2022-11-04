const Cartoon = require("../models/cartoon.model")

// console.log(Cartoon)

// FULL CRUD

// READ ALL
module.exports.findAllCartoons = (req, res) => {
    Cartoon.find()
        .then( (allDaCartoons) => {
            res.json(allDaCartoons)
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// FIND ONE
module.exports.findOneCartoon = (req, res) => {
    // http://locahost:8000/api/cartoons/4
    Cartoon.findOne({ _id: req.params.bobId })
        .then(oneCartoon => res.json(oneCartoon))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// CREATE 
module.exports.createNewCartoon = (req, res) => {
    Cartoon.create(req.body)
        .then(newlyCreatedCartoon => res.json(newlyCreatedCartoon))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
// UPDATE
module.exports.updateCartoon = (req, res) => {
    Cartoon.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedThing => res.json(updatedThing))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}
 
// DELETE
module.exports.deleteThing = (req, res) => {
    Cartoon.deleteOne({ _id: req.params.id })
        .then(result => res.json({ result: result }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}