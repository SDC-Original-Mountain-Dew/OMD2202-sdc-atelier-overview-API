const db = require('./../db/dbpostgres.js');

test('Database returns products', () => {
  var cb = function (err, data) {
    if (err) {
      console.log(err);
      return {};
    } else {
      return data;
    }
  }

  return db.getProducts(cb).then((result) => {
    var result2 = result.map((ele) => typeof (ele));
    expect(result2).toEqual(['object', 'object', 'object', 'object', 'object', 'object', 'object', 'object', 'object', 'object']);
  });

});





test('Database returns features product_id 7249 with the right values', () => {
  var cb = function (err, data) {
    if (err) {
      console.log(err);
      return {};
    } else {
      return data;
    }
  }

  return db.getFeatures(7249, cb).then((result) => {
    var actual = {
      "product_id": 7249,
      "product_name": "Greg 50 Backpack",
      "product_slogan": "Tempore deserunt distinctio et placeat ratione aut distinctio est.",
      "product_description": "Qui quae architecto ea alias. Eaque harum distinctio. Eum laboriosam quia inventore pariatur ipsum aut ipsam adipisci. Illum corrupti expedita. Eligendi qui sed assumenda exercitationem modi quod. Quo eos non.",
      "product_category": "Backpack",
      "product_default_price": 126,
      "features": [
        {
          "feature_name": "Lifetime Guarantee",
          "feature_value": "null"
        },
        {
          "feature_name": "Satisfaction Guaranteed",
          "feature_value": "null"
        },
        {
          "feature_name": "Green Leaf Certified",
          "feature_value": "null"
        }
      ]
    }

    expect(result).toEqual(actual);
  });

});





test('Database returns styles product_id 1799 with the correct values', () => {
  var cb = function (err, data) {
    if (err) {
      console.log(err);
      return {};
    } else {
      return data;
    }
  }

  return db.getProducts(1799, cb).then((result) => {
    var actual = {
      "product_id": "1799",
      "results": [
        {
          "style_id": 3570,
          "style_name": "Lime",
          "style_price_sale": "null",
          "style_price": 202,
          "style_default": true,
          "skus": [
            {
              "stock_id": 20595,
              "stock_name": "XS",
              "stock_quantity": 24
            },
            {
              "stock_id": 20596,
              "stock_name": "S",
              "stock_quantity": 31
            },
            {
              "stock_id": 20597,
              "stock_name": "M",
              "stock_quantity": 20
            },
            {
              "stock_id": 20598,
              "stock_name": "L",
              "stock_quantity": 19
            },
            {
              "stock_id": 20599,
              "stock_name": "XL",
              "stock_quantity": 46
            },
            {
              "stock_id": 20600,
              "stock_name": "XXL",
              "stock_quantity": 26
            }
          ],
          "photos": [
            {
              "photo_url": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80",
              "photo_thumbnail_url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
            },
            {
              "photo_url": "https://images.unsplash.com/photo-1553830591-2f39e38a013c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2760&q=80",
              "photo_thumbnail_url": "https://images.unsplash.com/photo-1550338300-f9a475b50ba2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
            },
            {
              "photo_url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
              "photo_thumbnail_url": "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
            }
          ]
        },
        {
          "style_id": 3571,
          "style_name": "Orange",
          "style_price_sale": "null",
          "style_price": 202,
          "style_default": false,
          "skus": [
            {
              "stock_id": 20601,
              "stock_name": "XS",
              "stock_quantity": 2
            },
            {
              "stock_id": 20602,
              "stock_name": "S",
              "stock_quantity": 17
            },
            {
              "stock_id": 20603,
              "stock_name": "M",
              "stock_quantity": 9
            },
            {
              "stock_id": 20604,
              "stock_name": "L",
              "stock_quantity": 51
            },
            {
              "stock_id": 20605,
              "stock_name": "XL",
              "stock_quantity": 6
            },
            {
              "stock_id": 20606,
              "stock_name": "XXL",
              "stock_quantity": 16
            }
          ]
        },
        {
          "style_id": 3572,
          "style_name": "Indigo",
          "style_price_sale": "null",
          "style_price": 202,
          "style_default": false,
          "skus": [
            {
              "stock_id": 20607,
              "stock_name": "XS",
              "stock_quantity": 20
            },
            {
              "stock_id": 20608,
              "stock_name": "S",
              "stock_quantity": 9
            },
            {
              "stock_id": 20609,
              "stock_name": "M",
              "stock_quantity": 44
            },
            {
              "stock_id": 20610,
              "stock_name": "L",
              "stock_quantity": 26
            },
            {
              "stock_id": 20611,
              "stock_name": "XL",
              "stock_quantity": 30
            },
            {
              "stock_id": 20612,
              "stock_name": "XXL",
              "stock_quantity": 42
            }
          ],
          "photos": [
            {
              "photo_url": "https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2800&q=80",
              "photo_thumbnail_url": "https://images.unsplash.com/photo-1430390456011-25ac9244999c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
            },
            {
              "photo_url": "https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
              "photo_thumbnail_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            }
          ]
        },
        {
          "style_id": 3573,
          "style_name": "Sky blue",
          "style_price_sale": "null",
          "style_price": 202,
          "style_default": false,
          "skus": [
            {
              "stock_id": 20613,
              "stock_name": "XS",
              "stock_quantity": 17
            },
            {
              "stock_id": 20614,
              "stock_name": "S",
              "stock_quantity": 55
            },
            {
              "stock_id": 20615,
              "stock_name": "M",
              "stock_quantity": 44
            },
            {
              "stock_id": 20616,
              "stock_name": "L",
              "stock_quantity": 21
            },
            {
              "stock_id": 20617,
              "stock_name": "XL",
              "stock_quantity": 19
            },
            {
              "stock_id": 20618,
              "stock_name": "XXL",
              "stock_quantity": 10
            }
          ],
          "photos": [
            {
              "photo_url": "https://images.unsplash.com/photo-1512521952190-7e1a47820ff4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=978&q=80",
              "photo_thumbnail_url": "https://images.unsplash.com/photo-1498168208808-4c2706938a2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
            },
            {
              "photo_url": "https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
              "photo_thumbnail_url": "https://images.unsplash.com/photo-1519482816300-1490fdf2c2bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            },
            {
              "photo_url": "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
              "photo_thumbnail_url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
            }
          ]
        }
      ]
    }

    expect(result).toEqual(actual);
  });

});


test('Products request is less than 2000ms (or 50s)', () => {

});





test('Features request is less than 2000ms (or 50s)', () => {

});





test('Styles request is less than 2000ms (or 50s)', () => {

});