const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const { people } = require("./public/daata");

//static assets
app.use(express.static('./public/methods-public'));

//parse form data
//based on body-parser
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send(`<a href = "/api/people" >Click here</a>`);
});

app.post('/login', (req, res) => {
    const { name } = req.body;
    if(name){
        res.status(200).send(`Welcome ${name}`);
    }
    res.status(501).send("Provide Credentials");
});

app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data: people});
})

app.listen(8000, () => console.log(`Server running on port 8000`));