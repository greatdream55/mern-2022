const express = require("express");
const app = express()
const PORT = 8000;
const server = app.listen(PORT, () => console.log(`server up on port:${PORT}`))

// to use socket we have to pass it our server as a param
const io = require("socket.io")(server, {cors: true})

// different types of socket calls
// emit - emitters - "I have a thing!"
// on - triggers - listening for a particular event

// start the socket connection
io.on("connection", (socket) => {
    console.log("client connected with id:", socket.id)

    // listen for the client keywords
    socket.on("yo chat!", (dataFromClient) => {
        console.log(dataFromClient)

        // send it over to everyone connected
        io.emit("post chat", dataFromClient)
    })





})
