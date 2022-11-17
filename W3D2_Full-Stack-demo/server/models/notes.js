// import mongoose to build a model
const mongoose = require("mongoose")

// the schema - the rules the entries in the DB must follow
const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [3, "{PATH} must be at least 3 chars long"]
    },
    content: {
        type: String,
        required: [true, "{PATH} must be present"],
    },
    isImportant :{
        type: Boolean,
        default: false
    }
}, {timestamps: true})

// method 1
// create the schema and export it!
// module.exports.note = mongoose.model("Note", NoteSchema)

// method 2
const Note = mongoose.model("Note", NoteSchema)
module.exports = Note
