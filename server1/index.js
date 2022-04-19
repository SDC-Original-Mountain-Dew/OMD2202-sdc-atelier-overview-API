/*
Original Mountain Dew SDC
Alex Shiao, Chris Padovan, Bogdan Gordin
4/19/22
our Atelier API to handle overview component requests using Postgres database
*/

// import db from './postgres.js' // some database javascript???

require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());



app.get('/productsOveriew', function (req, res) { // listens to this url then invokes db functions to get data
  // db.readProduct((data) => {
  //   res.send(data);
  // });
});

// app.post('/productsOveriew', function (req, res) { // don't think I need a post for overview? Maybe for when adding stuff to cart or to favorites
//   db.add(req.body);
//   res.send();
// });








app.listen(process.env.PORT1);
console.log(`Running at http://localhost:${process.env.PORT1}`);