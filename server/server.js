// const express = require("express");
// const app = express();
// const server = require("http").createServer(app);
// const socketio = require("socket.io");
// const io = socketio(server, { cors: { origin: "*" } });
// const path = require("path");
// io.on("connection", (socket) => {
//   console.log(`User connected ${socket.id}`);
// });

// app.get("/", (req, res) => {
//   res.render("index.html");
// });

// // MiddleWares
// app.engine("html", require("ejs").renderFile);
// app.use(express.static(path.join(__dirname, "/public")));

// const PORT = process.env.PORT || 5000;
// server.listen(PORT, () => {
//   console.log(`listening at http://localhost:${PORT}`);
// });

const io = require("socket.io")(5000, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  const id = socket.handshake.query.id;
  socket.join(id);

  socket.on("send-message", ({ recipients, text }) => {
    recipients.forEach((recipient) => {
      const newRecipients = recipients.filter((r) => r !== recipient);
      newRecipients.push(id);
      socket.broadcast.to(recipient).emit("receive-message", {
        recipients: newRecipients,
        sender: id,
        text,
      });
    });
  });
});
