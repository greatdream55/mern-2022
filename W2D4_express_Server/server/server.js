// import express form "express"
const express = require("express");
// console.log(express)
// invoke express
const app = express();
// console.log(app)
const PORT = 1337;

// -- MIDDLEWARE ----
// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
// -----------------


// ---- dummy data ----
const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

// DELETE
// UPDATE


// CREATE / POST
app.post("/api/users", (req, res) => {
    // req.body will contain the form data from Postman or form React
    console.log(req.body)
    // we can push it to the users array for now...
    // laster on this will be inserted into a database
    users.push(req.body);
    res.json({ status: "ok"})
})

// READ ALL
// axios.get("http://localhost:1337/api/users")
//       .then(serverRes => console.log(serverRes.data))
//        .catch()

app.get("/api/users", (req, res) => {
    res.json(users)
})


// READ ONE
app.get("/api/users/:idx", (req, res) => {
    console.log(req.params)
    console.log(req.params.idx)
    // const {idx} = req.params;
    console.log(users[req.params.idx])
    res.json(users[req.params.idx])

})

const myCallbackFunc = (req, res) => {
    res.json({cool: "very"})
}

app.get("/api/cool", myCallbackFunc)


// ROUTING
// axios.get("...")
app.get("/api", (requestObj, responseObj) => {
    // console.log(requestObj);
    responseObj.json({
        message: "hi ninjas!",
        cool: true,
        status: 200
    })
})


// ! starts the server
// ! always at the bottom of our app
app.listen(PORT, () => console.log(`>> SERVER is up on port ${PORT} and is listening for REQuests to RESpond to`))