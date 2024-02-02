//we send application json data
//server side rendering 

const express = require("express");
const { products} = require("./public/data");

const app = express();

app.get('/', (req, res) => {
    res.send(`<h1>Home Page</h1><a href="/api/products">Click here</a>`);
    res.end();
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const {id, name, price} = product;
        return {id, name, price};
    })
    res.json(newProducts);
    res.end();
})

app.listen(8000, () => {
    console.log("Server running on port 8000");
})