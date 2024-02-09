//filter mthod

const express = require("express");

const { people } = require('./public/data');

const app = express();

app.use(express.json());

app.delete('/api/people/:id', (req, res) => {
    const { id } = req.params;
    
    const person = people.find((person) => person.id === Number(id));
    if(!person){
        return res.status(404).json({success:false, msg:`User with id ${id} not found`});
    }

    const remainingPerson = people.filter((person) => person.id !== Number(id));
    res.status(200).json({success: true, data: remainingPerson})
})

app.listen(8000, () => {
    console.log("Server running on port 8000");
})