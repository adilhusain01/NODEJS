const http = require("http");

http.createServer((req, res) => {

    // console.log(req.method);
    // console.log(req.url);

    if(req.url === '/'){
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(`<h1>HomePage</h1>`);
        res.end();
    } else if (req.url === '/about'){
        res.writeHead(200, {'content-type': 'text/plain'});
        res.write(`AboutPage`);
        res.end();
    } else {
        res.writeHead(404, {'content-type': 'text/plain'});
        res.write("Page not found");
        res.end();
    }
}).listen(8000);