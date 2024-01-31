const express = require("express");

//server instance
const app = express();

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen


app.get('/', (req, res) => {
    res.send("Hi");
})

app.get('/about', (req, res) => {
    res.send("We are 5000");
})

app.all('*', (req, res) => {
    res.send("Not Found");
})

app.listen(8000, () => {
    console.log("Server running on port 8000");
})