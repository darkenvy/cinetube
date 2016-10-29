// ------------------------------------------------ //
//                  Using request                   //
// ------------------------------------------------ //

var options = {
    url: 'https://www.reddit.com/r/fullmoviesonyoutube/search.xml',
    qs: {
      // q: '(200*)',
      q: req.params.query,
      sort: 'new',
      restrict_sr: 'on',
      limit: '25',
      after: '25'
    },
    // 'q=(200*)&sort=new&restrict_sr=on/.rss'
    method: 'GET',
    headers: [{'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.1'}]
  }
  var req = request(options, function(error, response, body) {
    if (error) {res.send('ERROR: ', error)}
    else {
      var allMovies = []
      var foundMovies = body.match(regexClean1);
      for (var listing in foundMovies) {
        var info = regexClean2.exec(foundMovies[listing]);
        if (info) {
          allMovies.push({
            name: info[1],
            link: info[2]
          });
        }
      }
      console.log('send movies');
      res.send(JSON.stringify(allMovies))
    }
  });


// -------------- CORS Middleware / routes --------------- //
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// ------------------------------------------------ //


// -------- Initialize Datascrape on start of node -------- //
