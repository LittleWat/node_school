const http = require("http");

var urlStr = process.argv[2];
http.get(urlStr, res => {
  res.setEncoding("utf8");
  res.on("data", data => {
    console.log(data);
  });
});
