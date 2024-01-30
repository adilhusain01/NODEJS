//1. this sends direct data instead of chunks

// const http = require("http");
// const fs = require("fs");

// const server = http.createServer(function (req, res) {
//   const data = fs.readFileSync('./content/big-file.txt', "utf-8");
//   res.end(data);
// })

// server.listen(8000);

//1. this sends the data in chunks

const fs = require("fs");
const http = require("http");

const server = http.createServer(function (req, res) {
  const fileStream = fs.createReadStream('./content/big-file.txt', "utf-8");

  fileStream.on('open', () => {
    //piping to the response pushes from the read Stream into the write Stream in chunks 
    fileStream.pipe(res);
  })

  fileStream.on('error', (error) => {
    res.end(error);
  })
})

server.listen(8000, () => {
  console.log("Server running on port 8000");
});