const users = [
    { firstName: "Reimu", lastName: "Hakurei" },
    { firstName: "Marisa", lastName: "Kirisame" },
    { firstName: "Sanae", lastName: "Kochiya" },
    { firstName: "Sakuya", lastName: "Izayoi" },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

module.exports = (app) => {

    // ! all routes in a server must start with /api
    app.get("/api/demo", (req, res) => {
    
        console.log("inside '/api/demo");
        res.json({message: "ok"})
    })

    // READ ALL
    app.get("/api/users", (req, res) => {
        // whatever we send here is what React axios will receive in the .then()
        res.json({
            data: users,
            status: 200,
            message: "ok"
        })
    })

    // READ ONE
    app.get("/api/users/:unicorn", (req, res) => {
        console.log(req.params)
        console.log(req.params.unicorn)
        console.log(users[req.params.unicorn])
        res.json({
            idRequested: req.params.unicorn,
            data: users[req.params.unicorn]
        })
    })

    // CREATE
    app.post("/api/users", (req, res) => {
        console.log(req);
        users.push(req.body)
        res.json({
            message: "ok"
        })
        
    })
}
