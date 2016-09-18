var express = require('express');
var request = require('request');
var app = express();

var regexClean = /title=&quot;(.*?)&quot;.*?(https?:\/\/w{0,3}\.?youtube.com\/watch\?v=.*?)&quot;/g;


// -------- Initialize Datascrape on start of node -------- //
// var url = 'https://isthereanydeal.com/rss/deals/us/';
// var req = request(url, function(error, response, body) {
//   if (!error) {
//     console.log(body);
//   }
// });


// -------------- CORS Middleware / routes --------------- //
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/', function(req, res) {
  // var data;
  // res.send('success')
  var options = {
    url: 'https://www.reddit.com/r/fullmoviesonyoutube/search.xml?q=(200*)&sort=new&restrict_sr=on/.rss',
    method: 'GET',
    headers: [{'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1'}]
  }
  var req = request(options, function(error, response, body) {
    if (error) {res.send('ERROR: ', error)}
    else {
      var allMovies = []
      // console.log(body);
      // res.send('s')
      // console.log(body);
      var foundMovies = body.match(regexClean);
      for (var listing in foundMovies) {
        var info = regexClean.exec(foundMovies[listing]);
        if (info && info.length >=3) {
          var movie = {
            name: info[1],
            link: info[2]
          };
        }
        allMovies.push(movie);
      }

      // console.log(edited);
      console.log('send movies');
      res.send(JSON.stringify(allMovies))
    }
  });

})


var server = app.listen(3000)
