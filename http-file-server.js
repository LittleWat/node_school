const http = require("http");
const fs = require("fs");

// const port = process.argv[2];
// const filepath = process.argv[3];

// const server = http.createServer((req, res) => {
//   // request handling logic...
//   //   const src = fs.createReadStream(req, "utf8");
//   const dst = fs.createWriteStream(filepath, "utf8");
//   req.pipe(dst);
// });
// server.listen(port);

const server = http.createServer(function(req, res) {
  res.writeHead(200, { "content-type": "text/plain" });

  fs.createReadStream(process.argv[3]).pipe(res);
});

server.listen(Number(process.argv[2]));
