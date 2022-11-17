const express = require("express");
const cors = require('cors')
const app = express();
const PORT = 8000;
const DB = "notes"

// Middleware
app.use(cors(), express.json(), express.urlencoded({extended:true}));

// connect to the DB
require("./config/config")(DB)

// connect routes
require("./routes/routes")(app)

// START THE SERVER
app.listen(PORT, () => console.log(`>> server up on ${PORT} <<`))