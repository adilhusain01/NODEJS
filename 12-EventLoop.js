//immediate execution done first then callback functions
//event loop offloads console.log(result) to file system

// // #2
// const { readFile, writeFile } = require("fs");

// console.log("starting the first task");

// const first = readFile("./content/first.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log(result);
//     console.log("completed first task");
//   }
// });

// console.log("starting new task");

// // #2
// console.log("first");

// setTimeout(() => {
//   console.log("Hi");
// }, 0);

// console.log("last");

// #3

// setInterval(() => {
//   console.log("Hi this is interval");
// }, 2000);

// console.log("last");

// #4

const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Request event");
  res.end("Hello world");
});

server.listen(5000, () => {
  console.log("Server listening on port 5000");
});
