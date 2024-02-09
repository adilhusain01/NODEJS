const { people } = require("../public/data");

const getPeople = (req, res) => {
    res.status(200).json({success: true, data: people});
}

const postPeople = (req, res) => {
    const { name } = req.body;
    if(name){
        res.status(200).send({success:true, msg: ` Welcome ${name} `});
    }else{
        res.status(400 ).json({success:true, msg:'Please provide name'});
    } 
}

const postPeoplePostman = (req, res) => {
    const {name} = req.body;
    if(name){
        res.status(200).send({success:true, data: [...people, name]});
    }else{
        res.status(400).send({success:false, msg:"Please provide name"});
    } 
    
}

const updatePeople = (req, res) => {
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
}

const deletePeople = (req, res) => {
    const { id } = req.params;
    
    const person = people.find((person) => person.id === Number(id));
    if(!person){
        return res.status(404).json({success:false, msg:`User with id ${id} not found`});
    }

    const remainingPerson = people.filter((person) => person.id !== Number(id));
    res.status(200).json({success: true, data: remainingPerson})
}

module.exports = {getPeople, postPeople, postPeoplePostman, updatePeople, deletePeople};