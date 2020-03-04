const io = require("socket.io")(3000);

io.on("connection", onConnect)

function onConnect(socket){
  socket.emit("chat-message", "Hola mundo!");
  socket.on("send-chat-message", data => {
    socket.broadcast.emit("chat-message", data);
  });
}