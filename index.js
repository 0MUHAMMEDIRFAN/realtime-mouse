const express = require("express")
const app = express();
const http = require("http")
const server = http.createServer(app)
const { Server } = require("socket.io")
const io = new Server(server)

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile("./index.html")
})

io.on("connection", (socket) => {
    socket.on("new-user", (data) => {
        socket.broadcast.emit("new-user", data)
    })
    socket.on("mousemove", (data) => {
        socket.broadcast.emit("mousemove", data)
    })
})

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(PORT))