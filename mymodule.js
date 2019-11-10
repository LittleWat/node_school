"use strict";

const fs = require("fs");
function filterFilenames(target_dir, target_ext, cb) {
  fs.readdir(target_dir, (err, files) => {
    if (err) return cb(err);
    const result = files.filter(val => val.endsWith("." + target_ext));
    cb(null, result);
  });
}

module.exports = filterFilenames;
