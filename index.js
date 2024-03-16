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
        console.log('message: ' + msg);
    });

    socket.on("disconnect", () => {
        console.log("user disconnected " + socket.id);
    })
})


server.listen(3000, async () => {
    console.log("server is connected")
})