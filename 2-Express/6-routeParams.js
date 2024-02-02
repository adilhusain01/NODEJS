//find method

const express = require("express");
const { products } = require("./public/data");

const app = express();

app.get('/', (req, res) => {
    res.send(`<h1>Home Page</h1><a href="/api/products">Click here</a>`);
})

app.get('/api/products/1', (req, res) => {
    const singleProduct = products.find((product) => product.id==="1");
    res.json(singleProduct);
});


app.listen(8000, () => {
    console.log("Server running on port 8000");
})