const http = require("http");

http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end(`<h1>HomePage</h1>`);
}).listen(8000);