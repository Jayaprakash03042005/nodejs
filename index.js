const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;



app.get('/',(req,res)=>{
    res.send("Initial path is seted");
})

async function getProducts(id){
    const API_DOMAIN = "https://fakestoreapi.com/";
    const response = axios.get(API_DOMAIN + `products/`+ id)
    return (await response).data;
}

app.get('/products', async (req,res)=>{
    const products = await getProducts();
    res.send(products);
})
app.get('/products/:id', async (req,res)=>{
    console.log(req.params.id);
    const products = await getProducts(req.params.id);
    res.send(products)

})

app.listen(port, ()=>{
    console.log(`Server is running on http:localhost:${port}`);
})