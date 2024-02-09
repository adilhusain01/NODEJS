//find method

const express = require("express");
const { people } = require('./public/data');

const app = express();

app.use(express.json());

app.put('/api/people/:id', (req, res) => {
    const { id } = req.params;
    const { name }  = req.body;

    const person = people.find((person) => person.id === Number(id));
    
    if(!person){
        return res.status(404).json({success: false, msg: `No person with ID ${id}`});
    }

    const newPerson = people.map((person) => {
        if(person.id === Number(id)){
            person.name = name;
        }

        return person; 
    })
 
    res.status(200).json({success:true, data:newPerson});

})

app.listen(8000, () => {
    console.log("Server running on port 8000");
})