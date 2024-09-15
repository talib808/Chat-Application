const socketIo = require("socket.io");

module.exports = (server) => {
  const io = socketIo(server);

  io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on("joinRoom", (roomId) => {
      socket.join(roomId);
      console.log(`User ${socket.id} joined room ${roomId}`);
    });

    socket.on("sendMessage", ({ roomId, message }) => {
      io.to(roomId).emit("receiveMessage", message);
      console.log(`Message sent to room ${roomId}: ${message}`);
    });

    socket.on("sendGroupMessage", ({ groupId, message }) => {
      io.to(groupId).emit("receiveGroupMessage", message);
      console.log(`Group message sent to group ${groupId}: ${message}`);
    });

    socket.on("disconnect", () => {
      console.log(`User disconnected: ${socket.id}`);
    });
  });
};
