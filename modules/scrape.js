var exports = module.exports = {}
var phantom = require('phantom');
let sitepage;
let phInstance;


const evaluation = function() {
  // return $('.search-title').map(function(idx, item) {return item.innerText}).toArray();
  return $('.search-result').map(function(idx, item) {
    var longTitle = item.children[1].children[0].children[1].innerText,
        parsed = longTitle.match(/^(.+?)\s?\((\d+)\)\s?\[(\d+.)\]/);

    // undefined error handling
    if (parsed && parsed.length < 4) {
      var tmp = parsed[3]; parsed[3] = 0; parsed[4] = tmp;
    } else if (!parsed) {parsed = [0,0,0,0];}

    // construct object
    return {
      title: parsed[1],
      year: parsed[2],
      quality: parsed[3],
      url: item.children[1].children[2].children[1].href
    }
  }).toArray();

}

// ---------------------------------------------------------------------- //

exports.search = function(search='') {
  let url = 'https://www.reddit.com/r/fullmoviesonyoutube/search?q=(201*)&sort=new&restrict_sr=on';
  // let url = 'https://www.reddit.com/r/fullmoviesonyoutube/search?q=' + search + '&sort=new&restrict_sr=on';

  return phantom.create()
    .then(function(instance) {
      phInstance = instance;
      return instance.createPage();
    })
    .then(function(page) {
      sitepage = page;
      page.open(url)
      return sitepage.evaluate(evaluation);
    })
    .then(function(content) {
      sitepage.close();
      phInstance.exit();
      return content;
    })

  // return phantom.create()
  //   .then(instance => {
  //     phInstance = instance;
  //     return instance.createPage();
  //   })
  //   .then(page => {
  //     sitepage = page;
  //     page.open(url)
  //     return sitepage.evaluate(evaluation);
  //   })
  //   .then(content => {
  //     sitepage.close();
  //     phInstance.exit();
  //     return content;
  //   })
  //   .catch(error => {
  //     console.log(error);
  //     phInstance.exit();
  //     return -1;
  //   });
}
