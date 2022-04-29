/*
Original Mountain Dew SDC
Alex Shiao, Chris Padovan, Bogdan Gordin
4/28/22
the middle man for load balancing
*/

require("dotenv").config();
const express = require("express");
const path = require("path");
var axios = require('axios');


const app = express();
app.use(express.json());

// process.env.url

app.use(function (req, res) {

  axios({
    url: process.env.URL + req.url,
    method: 'get'
  }).then( function (response) {

    res.send(response);

  }).catch( function(error) {

    console.log(error);
    res.send(error);

  });

});




app.listen(process.env.PORT2);
console.log(`Running at http://localhost:${process.env.PORT2}`);


// axios.get('/words')
// .then(function (response) {
//   console.log(response);

//   that.setState({
//     currWords: response.data,
//   }, () => {
//     that.myData = response.data;
//   });

// }).catch(function (error) {
//   console.log(error);
// });