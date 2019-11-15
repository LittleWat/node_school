const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const url_parse = url.parse(req.url, true);
  const time = new Date(Date.parse(url_parse.query["iso"]));
  var result = {};
  if (req.method == "GET" && url_parse.pathname == "/api/parsetime") {
    result = {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds()
    };
  }
  if (req.method == "GET" && url_parse.pathname == "/api/unixtime") {
    result = {
      unixtime: time.getTime()
    };
  }
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(result));
});

server.listen(process.argv[2]);
