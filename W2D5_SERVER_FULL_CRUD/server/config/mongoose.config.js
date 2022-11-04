const mongoose = require('mongoose');

module.exports = (DB) => {
    // mongoose.connect("mongodb+srv://root:root@friday.4v1dluu.mongodb.net/?retryWrites=true&w=majority")
    mongoose.connect('mongodb://localhost/'+ DB)
        .then(() => console.log(`Established a connection to the ${DB} database`))
        .catch(err => console.log(`Something went wrong when connecting to the ${DB} database `, err));
}