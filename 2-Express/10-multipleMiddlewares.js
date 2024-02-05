const express = require("express");
const morgan = require ("morgan");
const authorize = require("./public/authorize");
const logger = require("./public/logger");

const app = express();

app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send("Hi there");
    console.log(req.user);
})

app.get('/about', [authorize, logger], (req, res) => {
    res.send("Hi there");
    console.log(req.user);
})

app.listen(8000, () => {
    console.log("Server running on port 8000");
})