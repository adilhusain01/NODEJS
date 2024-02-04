//middleware - functions that executes during req to server
//can use anywhere as a insertion

const express = require("express");

const app = express();

//req=> middleware => res

const logger = (req, res, next) => {
    //passing to the next middleware can be done or we can stop by sending something already
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);

    //res.send("Testing");

    next();
}

app.get('/', logger,(req, res) => {
    res.send("Home");
})

app.get('/about', (req, res) => {
    res.send("About");
})

app.listen(8000, () => {
    console.log("Server running on port 8000");
})