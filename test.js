var request = require('request');
var cheerio = require('cheerio');

module.exports = function() {
  var url = 'http://jamaicanclassifieds.com/viewlist.asp?cid=10029&sid=50779&sa=1';
  var _urls = [];
  getUrls();
  
  function getUrls() {
    request(url, function(error, response, html) {
      if (!error && response.statusCode == 200) {
        var $ = cheerio.load(html);
        $('img').each(function(i, element) {
          var a = $(this).next();
          var URL = a.attr('href');
          if (URL !== undefined) {
            _urls.push({
              url: 'http://jamaicanclassifieds.com/' + URL
            });
          }
        });
      }
      console.log(_urls);
    });
    return _urls;
  }
};
