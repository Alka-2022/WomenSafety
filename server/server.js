const express = require("express");
const app = express();
const server = require("http").createServer(app);
const socketio = require("socket.io");
const path = require("path");
const cors = require("cors");
const io = socketio(server, { cors: { origin: "http://localhost:3000" } });

//Socket logic

io.on("connection", (socket) => {
  const id = socket.handshake.query.id;
  socket.join(id);
  console.log("user conected", JSON.stringify(id));

  socket.on("disconnecting", () => {
    console.log("User disconnected", socket.rooms); // the Set contains at least the socket ID
  });

  socket.on("join-room", (roomName) => {
    socket.join(roomName);
  });

  socket.on("location", (data) => {
    console.log(data);
    socket
      .to(data.roomName)
      .emit("save-her", { lat: data.lat, lon: data.lon, acc: data.acc });
  });

  console.log(io.sockets.adapter.rooms);
  // socket.on("send-message", ({ recipients, text }) => {
  //   recipients.forEach((recipient) => {

  //     const newRecipients = recipients.filter((r) => r !== recipient);
  //     newRecipients.push(id);
  //     socket.broadcast.to(recipient).emit("recieve-message", {
  //       recipients: newRecipients,
  //       sender: id,
  //       text,
  //     });
  //   });
  // });
});

// MiddleWares
app.engine("html", require("ejs").renderFile);
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());
app.use(cors());
app.use("/mail", require("./routes/mapRoute"));

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
