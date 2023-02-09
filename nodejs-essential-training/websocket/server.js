import {WebSocketServer} from 'ws'

const wss = new WebSocketServer({port: 3000})

const messages = [];

wss.on("connection", (ws) => {
    
    ws.on("message", (message) => {
        console.log(message.toString());
        if(message.toString() === "exit") {
            ws.close()
        }
        messages.push(message.toString())
        wss.clients.forEach(client => client.send(message.toString()))
    })
    ws.on("close", () => {
        console.log("user disconnected")
    })
    console.log("new socket connected")
    ws.send("Welcome to live chat!")
    if(messages.length) {
        ws.send("chat currently in session")
        messages.forEach((message) => {
            ws.send(message.toString())
        })
    }
})

console.log(
    "chat server waiting for connections  on ws://localhost:3000"
)