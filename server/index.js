const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

let rooms = 0;

io.on("connection", (socket) => {
  console.log(socket.id + "connected");
  socket.on("create", (data) => {
    rooms += 1;
    socket.join(data.room);
    console.log(data);
    socket.emit("game", { room: data.room });
  });

  socket.on("join", (data) => {
    if (rooms === 1) {
      rooms += 1;
      console.log(io.sockets.adapter.rooms.get(data.room).size);
      socket.join(data);
      socket.emit("game", { room: data.room + 1 });
      socket.broadcast.to(data.room).emit("player1", { msg: "player2 joined" });
      socket.emit("player2", true);
    } else {
      socket.emit("err", { msg: "cannot join" });
    }
    //
  });

  socket.on("selected", (data) => {
    console.log(data.board);
    socket.broadcast.emit("select", data);
    socket.emit("chance", true);
    // socket.broadcast.to(data.room).emit("select", data);
  });

  socket.on("playTurn", (data) => {
    socket.broadcast.to(data.room).emit("playedTurn", data);
  });
});

http.listen(5000, () => {
  console.log("listnng");
});
