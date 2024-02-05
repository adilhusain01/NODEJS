const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const { people } = require("./public/data");

//static assets
app.use(express.static('./public/methods-public'));

//parse form data
//based on body-parser
app.use(express.urlencoded({extended: false}));

//parse json
//addedd to the req.body
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`<a href = "/api/people" >Click here</a>`);
});

app.post('/login', (req, res) => {
    const { name } = req.body;
    if(name){
        res.status(200).send(`Welcome ${name}`);
    }else{
        res.status(501).send("Provide Credentials");
    }
});

app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data: people});
})

app.post('/api/people', (req, res) => {
    const { name } = req.body;
    if(!name){
        res.status(400).json({success:false});
    }else{
        res.status(201).json({success:true, msg:'Please provide name'});
    }
})

app.listen(8000, () => console.log(`Server running on port 8000`));