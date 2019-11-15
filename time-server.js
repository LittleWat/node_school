const net = require("net");
const strftime = require("strftime");

const server = net.createServer(socket => {
  // socket handling logic
  const now = new Date();
  socket.write(strftime("%F %H:%M", now) + "\n");
  socket.end();
});

const port = process.argv[2];
server.listen(port);
