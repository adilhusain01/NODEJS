const express = require("express");
const path = require('path');
const app = express();

//static and middleware 
//suppose i can use 20K files with a just a single tag  instead of that http get method for each adn every file
app.use(express.static('./public'))

// app.get('/', (req, res) => {
    //sendFile tag used
//     res.sendFile(path.resolve(__dirname, './LoginPage/login.html'));
// })

app.all('*', (req, res) => {
    res.status(404).send('Resource not found');
})

app.listen(8000, () => {
    console.log("Server running on port 8000");
})