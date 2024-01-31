const { readFile, writeFile } = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("This is the Home Page");
  } else if (req.url === "/about") {
    //Blocking Code !!! blocks all other pages access also so other users are also locked
    for (let i = 0; i < 1000; ++i) {
      for (let j = 0; j < 1000; ++j) {
        console.log(`${j}, ${i}`);
      }
    }
    res.end("We are 20 years old");
  } else {
    res.end("Error Page");
  }
});

server.listen(5000, () => {
  console.log("Server listening on port 5000");
});
