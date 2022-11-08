const express = require("express");
const cors = require("cors")
const app = express();
const PORT = 8000;
const DB = "cartoons"

// --- MIDDLEWARE ---
// app.use(cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST"]
// }))
app.use(cors())
app.use(express.json(), express.urlencoded({extended:true}));
// ------------------

// CONNECT to the DB using mongoose
require("./config/mongoose.config")(DB)

// modularize routes
require("./routes/cartoon.routes")(app)

// START THE SERVER
app.listen(PORT, () => console.log(`>> server up on ${PORT} <<`))