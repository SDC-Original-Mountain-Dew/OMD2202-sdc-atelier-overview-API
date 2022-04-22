/*
Original Mountain Dew SDC
Alex Shiao, Chris Padovan, Bogdan Gordin
4/19/22
out postgres database methods and functions for querying
MISSION GOAL IS SPPPEEEEEEDDD
*/

const Pool = require('pg').Pool;

const pool = new Pool({ // is this efficient?
  user: 'bogdan',
  host: 'localhost',
  database: 'overview',
  password: '',
  port: 5432,
})

var getProducts = (cb) => {
  pool.query('SELECT * FROM products', (error, results) => {

    if (error) {
      cb(error);
    } else { // format the results here???
      cb(null, results);
    }

  });
}



var getFeatures = (cb) => {
  pool.query('SELECT * FROM feautures', (error, results) => {

    if (error) {
      cb(error);
    } else {
      cb(null, results);
    }

  });
}



var getStyles = (cb) => {
  pool.query('SELECT * FROM styles', (error, results) => {

    if (error) {
      cb(error);
    } else {
      cb(null, results);
    }

  });
}

module.exports.getProducts = getProducts;
module.exports.getFeatures = getFeatures;
module.exports.getStyles = getStyles;


// import { Client } from 'pg';

// const client = new Client()
// client.connect()
// client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
//   console.log(err ? err.stack : res.rows[0].message) // Hello World!
//   client.end()
// })

// SELECT * FROM products JOIN features ON (products.product_id = features.product_id) WHERE products.product_id = 5 OR features.product_id = 5;
// SELECT * FROM products JOIN styles ON (products.product_id = styles.product_id) WHERE products.product_id = 5 OR styles.product_id = 5;
// SELECT * FROM styles JOIN photos ON (styles.style_id = photos.style_id) WHERE styles.style_id = 26 OR photos.style_id = 26;
// SELECT * FROM styles JOIN stock ON (styles.style_id = stock.style_id) WHERE styles.style_id = 26 OR stock.style_id = 26;
// // GET https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products
// {
//   "id": 65631,
//   "campus": "rfp",
  // "name": "Camo Onesie",
//   "slogan": "Blend in to your crowd",
//   "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
//   "category": "Jackets",
//   "default_price": "140.00",
//   "created_at": "2022-03-29T15:08:08.445Z",
//   "updated_at": "2022-03-29T15:08:08.445Z"
// }


// // GET https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/65631
// {
//   "id": 65631,
//   "campus": "rfp",
//   "name": "Camo Onesie",
//   "slogan": "Blend in to your crowd",
//   "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
//   "category": "Jackets",
//   "default_price": "140.00",
//   "created_at": "2022-03-29T15:08:08.445Z",
//   "updated_at": "2022-03-29T15:08:08.445Z",
//   "features": [
//       {
//           "feature": "Fabric",
//           "value": "Canvas"
//       },
//       {
//           "feature": "Buttons",
//           "value": "Brass"
//       }
//   ]
// }

// // GET https://app-hrsei-api.herokuapp.com/api/fec2/rfp/products/65631/styles
// {
//   "product_id": 65631,
//   "results": [
//       {
//           "style_id": 404874,
//           "name": "Forest Green & Black",
//           "original_price": "140.00",
//           "sale_price": null,
//           "default?": true,
//           "photos": [
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
//               },
//               {
//                   "thumbnail_url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
//                   "url": "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
//               }
//           ],
//           "skus": {
//               "2352322": {
//                   "quantity": 8,
//                   "size": "XS"
//               },
//               "2352323": {
//                   "quantity": 16,
//                   "size": "S"
//               }
//           }
//       }