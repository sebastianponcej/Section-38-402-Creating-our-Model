
// Express set up
const express = require('express');
const app = express();
const path = require('path');

// Mongoose set up
const mongoose = require('mongoose');

const Product = require('./models/product');

// Metodo de conexion version actual 2023
main().catch(err => console.log(err, "OH NO, MONGO ERROR!"));

async function main() {
    console.log("Mongo Connection Open!!");
    mongoose.set('strictQuery', true) 
    // Mongoose.set es para evitar el warning message.
  await mongoose.connect('mongodb://127.0.0.1:27017/farmStand');
}



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// URL Route
app.get('/products', async (req, res) => {
    const products = await Product.find({})
    console.log(products)
    res.render('products/index', {products})
    // Podemos utilizar res.render porque tenemos el view engine 'ejs'.
})


app.listen(3000, () => {
    console.log("App is listening on port 3000")
})
