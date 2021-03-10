const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

io.on("connection", (socket) => {
  // console.log(socket.id, "conected");

  socket.on("join", () => {
    console.log("casdonnected");

    // socket.emit("player1", true);
    socket.broadcast.emit("playerChance", { color: null, value: "false" });

    socket.on("board", (newboard) => {
      // socket.broadcast.emit("setboard", newboard);
      io.sockets.emit("setboard", newboard);
    });

    socket.on("chance", (val) => {
      socket.broadcast.emit("chances", val);
    });
  });
});

http.listen(5000, () => {
  console.log("listnng");
});
