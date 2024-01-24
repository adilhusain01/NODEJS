// const http = require("http");
// const url = require("url");

// const server = http
//   .createServer((req, res) => {
//     res.write = (200, { "Content-Type": "text/html" });
//     var q = url.parse(req.url, true).query;

//     var text = q.year + " " + q.month;
//     res.end(text);
//   })
//   .listen(5000);
// ///?year=2018&month=june

const path = require("path");
const fs = require("fs");

const getText = (path) => {
  return new Promise(() => {});
};
