const http = require("http");
const bl = require("bl");

var results = [];
var urls = [];
var cnt = 0;

for (var i = 2; i < process.argv.length; i++) {
  urls.push(process.argv[i]);
}

function printUrl(index, urlStr) {
  http.get(urlStr, res => {
    res.pipe(
      bl((err, data) => {
        if (err) return log.err(err);
        results[index] = data.toString();
        cnt++;
        if (cnt >= 3) {
          results.forEach(res => console.log(res));
        }
      })
    );
  });
}
// console.log(urls);
urls.forEach((url, idx) => {
  printUrl(idx, url);
});
