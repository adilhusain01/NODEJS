const express = require("express");
const { products } = require("./public/data");

const app = express();

app.get('/', (req, res) => {
    res.send(`<h1>Home Page</h1><a href="/api/products">Click here</a>`);
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const {id, name, image} = product;
        return {id, name, image};
    })
    res.json(newProducts); 
})

app.get('/api/products/:productID', (req, res) => {
    const singleProduct = products.find((product) => product.id === req.params.productID);

    if(!singleProduct){
        res.status(404).json({message:"Not found"});
    }else{
        res.json(singleProduct);
    }
});


app.get('/api/v1/query', (req, res) => {
    //console.log(req.query);
    const {search, limit} = req.query;
    let sortedProducts = [...products];

    if(search){
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit));
    }

    //if there were not products after filtering
    if(sortedProducts.length <=0){
        return res.status(200).json({success:true, data: []});
    }
    
    res.status(200).json(sortedProducts);
})

app.listen(8000, () => {
    console.log("Server running on port 8000");
})