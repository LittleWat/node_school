"use strict";

const mymodule = require("./mymodule.js");

mymodule(process.argv[2], process.argv[3], (err, files) => {
  if (err) return console.error(err);
  files.forEach(val => console.log(val));
});
