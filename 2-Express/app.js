const express = require("express");
const peopleRoute = require("./routes/peopleRoute");
const authRoute = require("./routes/authRoute");

const app = express();
app.use(express.static('./public/methods-public'));  
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//route with a base path
app.use('/api/people', peopleRoute);
app.use('/login', authRoute);

app.listen(8000, () => {
    console.log("Server running on port 8000");
})