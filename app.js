const { readFile, writeFile } = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("This is the Home Page");
  }

  if (req.url === "/about") {
    res.end("We are 8000 years old");
  }

  res.end("Error Page");
});

server.listen(5000, () => {
  console.log("Server listening on port 5000");
});
