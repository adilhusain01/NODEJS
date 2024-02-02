const http = require("http");

const {readFileSync} = require("fs");

const loginPage = readFileSync('./LoginPage/login.html', "utf-8");
const pageStyle = readFileSync('./LoginPage/style.css');

http.createServer((req, res) => {

    // console.log(req.method);
    // console.log(req.url);

    if(req.url === '/'){
        //These are called mime types in the content-types tag
        res.writeHead(200, {'content-type': 'text/html'});
        res.write(loginPage);
        res.end();
    } else if (req.url === '/about'){
        res.writeHead(200, {'content-type': 'text/plain'});
        res.write(`AboutPage`);
        res.end();
    } else if (req.url === '/style.css'){
        res.writeHead(200, {'content-type': 'text/css'});
        res.end(pageStyle);
    } else {
        res.writeHead(404, {'content-type': 'text/plain'});
        res.write("Page not found");
        res.end();
    }
}).listen(8000);