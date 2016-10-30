
var express = require('express');
var app = express();
var scrape = require('./modules/scrape');
let bigList = {}



app.get('/:query', function(req, res) {
  // res.send('success' + req.params.query)
  // if (!bigList[req.params.query]) {

  // }
  console.log('inside query');
  console.log(scrape);
  console.log('returned', JSON.stringify( scrape.search() ));
  // res.send('1');



})


var server = app.listen(3000)


