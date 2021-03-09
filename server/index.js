const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

io.on("connection", (socket) => {
  // console.log(socket.id, "conected");

  socket.on("join", () => {
    console.log("casdonnected");

    socket.on("board", (newboard) => {
      console.log(newboard);
      // socket.broadcast.emit("setboard", newboard);
      io.sockets.emit("setboard", newboard);
    });
  });
});

http.listen(5000, () => {
  console.log("listnng");
});
