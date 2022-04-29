/*
Original Mountain Dew SDC
Alex Shiao, Chris Padovan, Bogdan Gordin
4/19/22
out postgres database methods and functions for querying
MISSION GOAL IS SPPPEEEEEEDDD
*/

require("dotenv").config();

const Pool = require('pg').Pool;

const pool = new Pool({
  user: process.env.DB_USER,
  host: 'localhost',
  database: 'overview',
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
})

// console.log('\n\n',pool,'\n\n')



/*
QUERY FOR GETTING 10 RANDOM PRODUCTS
*/
var getProducts = (cb) => {
  var obj = [];

  console.log(`---> PRODUCTS`)
  pool.query('SELECT * FROM products ORDER BY random() LIMIT 10', (error, results) => {

    if (error) {
      console.log(`---> PRODUCTS ---> ERR`)
      cb(error);
    } else {
      console.log(`---> PRODUCTS ---> SENT`)

      if (results.rows.length === 0) {
        console.log(`---> PRODUCTS ---> SENT`)
        cb(null, obj);
        return;
      }

      obj = results.rows;

      cb(null, obj);
    }

  });
}




/*
QUERY FOR GETTING ALL OF PRODUCT WITH ID num
THEN QUERY FOR ALL FEATURES FOR PRODUCT WITH ID num
*/
var getFeatures = (id, cb) => {
  console.log(`---> FEATURES ${id}`);

  if (isNaN(id)) {
    console.log(`---> FEATURES ${id} ---> ERR`)
    cb('id is not a number');
    return;
  }

  var obj = {};




  pool.query(`SELECT * FROM products WHERE product_id = ${id}`, (error, results) => {

    if (error) {
      console.log(`---> FEATURES ${id} ---> ERR`)
      cb(error);
    } else {

      if (results.rows.length === 0) {
        console.log(`---> FEATURES ${id} ---> SENT`)
        cb(null, obj);
        return;
      }

      obj = results.rows[0];

      (async function (id) {
        pool.query(`SELECT feature_name, feature_value FROM features WHERE features.product_id = ${id}`, (error, results) => {

          if (error) {
            cb(error);
          } else {

            obj.features = results.rows;
            console.log(`---> FEATURES ${id} ---> SENT`)
            cb(null, obj);
          }

        });
      }(id));

    }

  });

}




/*
QUERY FOR GETTING ALL STYLES FOR A PRODUCT WITH ID num
THEN QUERY FOR GETTING ALL PHOTOS FOR A STYLE WITH ID obj.results[n].style_id
AND LASTLY ALL SIZES PLUS QUANTITY FOR A STYLE WITH ID obj.results[n].style_id
*/
var getStyles = (id, cb) => {
  console.log(`---> STYLES ${id}`);

  if (isNaN(id)) {
    console.log(`---> STYLES ${id} ---> ERR`)
    cb('id is not a number');
    return;
  }

  var obj = {};

  var done1 = false;
  var done2 = false;
  var sent = false;

  pool.query(`SELECT style_id, style_name, style_price_sale, style_price, style_default FROM styles WHERE styles.product_id = ${id}`, (error, results) => {

    if (error) {
      console.log(`---> STYLES ${id} ---> ERR`)
      cb(error);
    } else {

      if (results.rows.length === 0) {
        console.log(`---> STYLES ${id} ---> SENT`)
        cb(null, obj);
        return;
      }

      obj.product_id = id;
      obj.results = results.rows;

      for (var n = 0; n <= obj.results.length - 1; n++) {
        // console.log(`--- RUNNING QUERIES ${n} ---`);

        (async function (num) {
          // console.log(`BEGUN photos-${num}`);
          pool.query(`SELECT photo_url, photo_thumbnail_url FROM photos WHERE photos.style_id = ${obj.results[num].style_id}`, (error, results) => {

            if (error) {
              console.log(`---> STYLES ${id} ---> ERR`)
              cb(error);
            } else {
              // console.log(`\tENDED photos-${num}`);

              obj.results[num].photos = results.rows;
              if (num === obj.results.length - 1) {
                done1 = true;
              }

              if (done2 && done1 && !sent) {
                sent = true;
                console.log(`---> STYLES ${id} ---> SENT`)
                cb(null, obj);
              }
            }

          });
        }(n));

        (async function (num) {
          // console.log(`BEGUN styles-${num}`);
          pool.query(`SELECT stock_id, stock_name, stock_quantity FROM stock WHERE stock.style_id = ${obj.results[num].style_id}`, (error, results) => {

            if (error) {
              console.log(`---> STYLES ${id} ---> ERR`)
              cb(error);
            } else {
              // console.log(`\tENDED styles-${num}`);

              obj.results[num].skus = results.rows;
              if (num === obj.results.length - 1) {
                done2 = true;
              }

              if (done1 && done2 && !sent) {
                sent = true;
                console.log(`---> STYLES ${id} ---> SENT`)
                cb(null, obj);
              }
            }

          });
        }(n));

      }

    }

  });

}





/*
QUERY FOR GETTING ALL OF RELATED IDS WITH PRODUCT ID num
*/
var getRelated = (id, cb) => {
  pool.query(`SELECT related_id FROM related WHERE product_id = ${id}`, (error, results) => {

    if (error) {
      cb(error);
    } else {
      obj = results.rows[0];
      cb(null, results.rows);
    }

  });

}





module.exports.getProducts = getProducts;
module.exports.getFeatures = getFeatures;
module.exports.getStyles = getStyles;

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