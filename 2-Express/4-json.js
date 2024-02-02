//we send application json data
//server side rendering 

const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.json({message:"Hi there"});
})

app.listen(8000, () => {
    console.log("Server running on port 8000");
})