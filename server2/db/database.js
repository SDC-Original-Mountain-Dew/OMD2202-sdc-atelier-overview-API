const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/overview', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var db = mongoose.connection;

db.on("error", console.error.bind(console, `connection error: ${__filename}`));
db.once("open", function () {
  console.log(`wordsDB connection succsesful: ${__filename}`);
});



var product_sch = mongoose.Schema({
  product_name: String,
  product_slogan: String,
  product_description: String,
  product_category: String,
  product_default_price: Number
}, {
  versionKey: false
});
var Product = mongoose.model('Product', product_sch);


var feature_sch = mongoose.Schema({
  feature_name: String,
  feature_value: String
}, {
  versionKey: false
});
var Feature = mongoose.model('Feature', feature_sch);


var style_sch = mongoose.Schema({
  style_name: String,
  style_price_sale: Number,
  style_default: Bolean
}, {
  versionKey: false
});
var Style = mongoose.model('Style', style_sch);


var photo_sch = mongoose.Schema({
  photo_url: String,
  photo_thumbnail_url: String
}, {
  versionKey: false
});
var Photo = mongoose.model('Photo', photo_sch);


var stock_sch = mongoose.Schema({
  stock_name: String,
  stock_quantity: Number,
}, {
  versionKey: false
});
var Stock = mongoose.model('Stock', stock_sch);