"use strict";
// console.log(process.argv);

main_arr = process.argv.slice(2);

var result = main_arr
  .map(x => Number(x))
  .reduce((prev, current, i, arr) => prev + current);

console.log(result);
