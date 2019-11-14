const http = require("http");
const bl = require("bl");

http.get(process.argv[2], res => {
  res.pipe(
    bl((err, data) => {
      if (err) return log.err(err);
      const strData = data.toString();
      console.log(strData.length);
      console.log(strData);
    })
  );
});
