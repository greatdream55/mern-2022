// 1. import mongoose
const mongoose = require("mongoose");

module.exports = (DB_NAME) => {
    mongoose.connect(`mongodb://localhost/${DB_NAME}`)
    .then(() => console.log(`🎈🎈🎈 CONNECTED TO ${DB_NAME}`))
    .catch(err => console.log(`cannot connect to ${DB_NAME}`, err))
}