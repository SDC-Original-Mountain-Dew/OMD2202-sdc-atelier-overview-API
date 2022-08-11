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


app.get('/loaderio-6976d26f2cb99fd28ef98a66f68d04e1.txt', function (req, res) {
  res.send('loaderio-6976d26f2cb99fd28ef98a66f68d04e1');
});

app.get('/products', function (req, res) { // listens to this url then invokes db functions to get data // gimme products
  getProducts((err, data) => {
    if (err) {
      console.log(err);
      res.status(404);
      res.send([]);
    } else {
      res.send(data);
    }
  });
});

app.get('/products/:product_id', function (req, res) {
  getFeatures(req.params.product_id, (err, data) => {
    if (err) {
      console.log(err);
      res.status(404);
      res.send({});
    } else {
      res.send(data);
    }
  });
});

app.get('/products/:product_id/styles', function (req, res) {
  getStyles(req.params.product_id, (err, data) => {
    if (err) {
      console.log(err);
      res.status(404);
      res.send({});
    } else {
      res.send(data);
    }
  });
});

app.get('/products/:product_id/related', function (req, res) {
  console.log('\n--------------------------------------------------------------------------------------------------------------------------------------------\n', req, '\n--------------------------------------------------------------------------------------------------------------------------------------------\n');

  // getRelated(req.params.product_id, (err, data) => {
  //   if (err) {
  //     console.log(err);
  //     res.status(404);
  //     res.send({});
  //   } else {
  //     res.send(data);
  //   }
  // });
  res.send('gimme related');
});





app.listen(process.env.PORT1);
console.log(`Running at http://localhost:${process.env.PORT1}`);

// http://localhost:3004/products/:product_id=65631
// http://localhost:3004/products/:1
// \i server1/db/seeder2.sql
// \i server1/db/schema.sql
// sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3004
// sudo -u postgres psql
// sudo systemctl restart postgresql.service
// scp -i "aws-fec.pem" ./../OMD2202-sdc-atelier-overview-API/product.csv ubuntu@13.57.16.20:/home/ubuntu/OMD2202-sdc-atelier-overview-API
// lsof -i tcp:3004
// kill -9 PID

// sudo apt-get update && sudu apt-get upgrade -y
// curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -
// sudo apt-get install -y nodejs

// sudo apt-get install git


// sudo apt update
// udo apt install nginx

// sudo systemctl start nginx

// %{*:1-100}