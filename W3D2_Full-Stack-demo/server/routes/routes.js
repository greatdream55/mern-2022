const Note = require("../controllers/notesController")
// console.log(Note)

// ! ALWAYS TEST ALL ROUTES 
// ! WITH VALIDATIONS!!!!
// ! BEFORE YOU EVER TOUCH THE CLIENT (REACT)
module.exports = (app) => {
    app.get("/api/notes", Note.findAll)
    app.post("/api/notes", Note.create)
    app.get("/api/notes/:id", Note.findOne)
    app.put("/api/notes/:id", Note.update)
    app.delete("/api/notes/:id", Note.delete)
}
