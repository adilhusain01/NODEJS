//immediate execution done first then callback functions

const { readFile, writeFile } = require("fs");

console.log("starting the first task");

const first = readFile("text.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log(result);
    console.log("completed first task");
  }
});

console.log("starting new task");
