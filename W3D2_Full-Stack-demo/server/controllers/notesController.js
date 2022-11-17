// == CRUD ==
// import the model to make queries to the DB
// method 1
// const {note} = require("../models/notes")

// method 2
const Note = require("../models/notes")

module.exports = {

    // READ ALL
    findAll: (req, res) => {
        Note.find()
            .then(allDaNotes => {
                res.json(allDaNotes)
            })
            .catch(err => res.json(err))
    },

    // CREATE
    create: (req, res) => {
        console.log(req.body)
        Note.create(req.body)
            .then(newNote => {
                console.log("SERVER SUCCESS")
                res.json(newNote)
            })
            .catch(err => {
                console.log("SERVER ERROR")
                res.status(400).json(err)
            })
    },

    // READ ONE
    findOne: (req, res) => {
        // Note.findOne({_id: req.params.id})
        Note.findById(req.params.id)
            .then(oneNote => res.json(oneNote))
            .catch(err => res.json(err))
    },

    // UPDATE
    update: (req, res) => {
        console.log("UPDATE ID:", req.params.id)
        console.log("req.body:", req.body)
        // Note.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        Note.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true})
            .then(updatedNote => res.json(updatedNote))
            .catch(err => res.json(err))
    },
    
    // DELETE
    delete: (req, res) => {
        // Note.deleteOne({_id: req.params.id})
        Note.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json(err))
    }
}