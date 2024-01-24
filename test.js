// #1

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

// #2

// const path = require("path");
// const fs = require("fs");

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, "utf-8", (err, result) => {
//       if (err) {
//         reject(err);
//         return;
//       } else {
//         resolve(result);
//       }
//     });
//   });
// };

// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
