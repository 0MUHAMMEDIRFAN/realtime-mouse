const express = require("express")
const app = express();
const http = require("http")
const server = http.createServer(app)
const { Server } = require("socket.io")
const io = new Server(server)
let users = {}

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile("./index.html")
})

io.on("connection", (socket) => {
    socket.emit("users", users)
    socket.on("users", (data) => {
        Object.keys(data).forEach((key) => users[key] = { ...users[key], ...data[key] })
        // users = { ...users, ...data }
        socket.broadcast.emit("users", data)
        console.log(users, "\n")
    })
    socket.on("mousemove", (data) => {
        socket.broadcast.emit("mousemove", data)
    })
    socket.on("disconnect", (reason, description) => {
        delete users[socket.id]
        io.emit("disconnect-user", socket.id)
        socket.emit("users", users)
    })
})

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(PORT))