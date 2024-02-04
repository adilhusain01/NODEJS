const express = require("express");
const logger = require("./public/logger")

const app = express();

//now we created the middleware as a module and imported it and used use method to put it over all get methods already 
app.use(logger);

app.get('/',(req, res) => {
    res.send("Home");
})

app.get('/about', (req, res) => {
    res.send("About");
})
    
app.listen(8000, () => {
    console.log("Server running on port 8000");
})