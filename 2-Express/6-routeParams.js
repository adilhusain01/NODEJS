const express = require("express");
const { products } = require("./public/data");

const app = express();

app.get('/', (req, res) => {
    res.send(`<h1>Home Page</h1><a href="/api/products">Click here</a>`);
})

app.get('/api/products/:productID', (req, res) => {
    const singleProduct = products.find((product) => product.id === req.params.productID);

    if(!singleProduct){
        res.status(404).json({message:"Not found"});
    }else{
        res.json(singleProduct);
    }
});

//assuming the complexity
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params);
    res.send("hello");
})


app.listen(8000, () => {
    console.log("Server running on port 8000");
})