"use strict";

const fs = require("fs");
const target_dir = process.argv[2];
const target_ext = "." + process.argv[3];
fs.readdir(target_dir, (err, files) => {
  if (err) return console.error(err);
  files
    .filter(val => val.endsWith(target_ext))
    .forEach(val => console.log(val));
});
