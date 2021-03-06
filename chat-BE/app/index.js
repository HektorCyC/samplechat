const PORT = process.env.PORT || 3000;
const INDEX = "/index.html";
const express = require("express");

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const io = require("socket.io")(server);
io.on("connection", onConnect);

function onConnect(socket) {
  console.log("Client connected");
  socket.emit("chat-message", "Hola mundo!");
  socket.on("send-chat-message", data => {
    socket.broadcast.emit("chat-message", data);
  });
}
