const express = require("express");
const {getPeople, postPeople, postPeoplePostman, updatePeople, deletePeople} = require("../controllers/peopleControllers"); 

const router = express.Router();

router.get('/', getPeople); 
router.post('/', postPeople);
router.post('/postman', postPeoplePostman);
router.put('/:id', updatePeople);
router.delete('/:id', deletePeople);

module.exports = router;