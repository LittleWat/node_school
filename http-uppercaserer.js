const http = require("http");
const map = require("through2-map");

const server = http.createServer((req, res) => {
  if (req.method == "POST") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    req.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(res);
  }
});

server.listen(process.argv[2]);
