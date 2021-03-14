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
    if (io.sockets.adapter.rooms.get(data.room)) {
      let rom = io.sockets.adapter.rooms.get(data.room).size;
      if (rom === 1) {
        console.log(io.sockets.adapter.rooms.get(data.room).size);
        socket.join(data.room);
        console.log(data);
        console.log(io.sockets.adapter.rooms.get(data.room));
        socket.emit("game", { room: data.room + 1 });

        socket.broadcast.to(data.room).emit("player1", {
          msg: "player2 joined",
          opponent: data.name,
          room: data.room,
        });

        socket.emit("player2", true);
      } else {
        socket.emit("err", { msg: "cannot join" });
      }
    } else {
      socket.emit("err", { msg: "cannot join" });
    }

    //
  });

  socket.on("selected", (data) => {
    console.log(data.room);
    socket.broadcast.to(data.room).emit("select", data);
    socket.emit("chance", true);
    // socket.broadcast.to(data.room).emit("select", data);
  });

  socket.on("playTurn", (data) => {
    socket.broadcast.to(data.room).emit("playedTurn", data);
  });

  socket.on("disconnect", () => {
    console.log("user left");
  });
});

http.listen(5000, () => {
  console.log("listnng");
});
