/*
Original Mountain Dew SDC
Alex Shiao, Chris Padovan, Bogdan Gordin
4/19/22
our Atelier API to handle overview component requests using Postgres database
*/

const { getProducts, getFeatures, getStyles } = require("./db/dbpostgres.js");



require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());


app.get('/products', function (req, res) { // listens to this url then invokes db functions to get data // gimme products
  getProducts((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

app.get('/products/:product_id', function (req, res) {
  console.log(req.params);
  res.send('gimme features');
});

app.get('/products/:product_id/styles', function (req, res) {
  console.log(req.params);
  res.send('gimme styles');
});



app.listen(process.env.PORT1);
console.log(`Running at http://localhost:${process.env.PORT1}`);

// http://localhost:3004/products/:product_id=65631