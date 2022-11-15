const express = require('express');
const app = express(); // execute and store the return function of express
require('dotenv').config();
console.log(process.env.SECRET_PORT)
const PORT = process.env.SECRET_PORT

const DB_NAME = "demo_mysql"
require("./mysql")(DB_NAME)




app.listen(PORT, () => console.log("server up on PORT:" + PORT))
