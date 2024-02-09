const login = (req, res) => {
    const {name} = req.body;
    if(name){
        res.status(200).send(`Welcome ${name}`);
    }else{
        res.status(501).send("Provide Credentials");
    }
}

module.exports = {login};