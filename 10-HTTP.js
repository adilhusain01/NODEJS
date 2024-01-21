const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req);
  //   res.write("Hi this is the server");
  //   res.end();

  if (req.url === "/") {
    res.end("Welcome to our website");
  } else if (req.url === "/about") {
    res.end("This is a test project");
  } else {
    res.end(
      `<h1>Oops</h1><p>We are into a problem</p><a href="/">back Home</a>`
    );
  }
});

server.listen(5000);
