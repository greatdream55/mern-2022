const express = require("express");
const app = express();
const PORT = 8000;

// --- MIDDLEWARE ---
app.use(express.json(), express.urlencoded({ extended: true }));
// ------------------

// -- import the ROUTES HERE ---
const routesFile = require("./routes/routes")
routesFile(app)



app.listen(PORT, () => console.log("server up on PORT:", PORT))