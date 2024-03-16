const express = require("express");

const app = express();

const http = require("http");

const server = http.createServer(app);

const { Server } = require("socket.io");

const io = new Server(server);

app.use('/', express.static(__dirname + "/public"));


io.on('connection', (socket) => {

    console.log("user is connected " + socket.id);

    socket.on('chat message', (msg) => {
        // console.log('message: ' + msg);
        io.emit("chat message", msg)
    });

    socket.on("disconnect", () => {
        console.log("user disconnected " + socket.id);
    })

    // If you want to send a message to everyone except for a certain emitting socket, we have the broadcast flag for emitting from that socket:


    socket.broadcast.emit("hi")
})


server.listen(3000, async () => {
    console.log("server is connected")
})