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
    } else {
      socket.emit("err", { msg: "cannot join" });
    }
    //
  });
});

http.listen(5000, () => {
  console.log("listnng");
});
