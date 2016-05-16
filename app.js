var getUrls = require('./scrape.js');
var request = require('request');
var cheerio = require('cheerio');

getUrls(function(urls){
    
    function buildListing(element, index, array) {
           request(array[index], function(error, response, html) {
            if (!error && response.statusCode == 200) {
                var $ = cheerio.load(html);
                var phone = $('span').eq(9).text();
                var make = $('span').eq(11).text();
                var model = $('span').eq(13).text();
                var images = [];
                $('.img').each(function(i, element){
                    var a = $(this).attr('src');
                    if (a.indexOf('cl_upload') !== -1 && images.indexOf(a) == -1){
                            images.push('http://jamaicanclassifieds.com/' + a);
                    }
                });
                var description = $('#descr').text();
                var listing = {
                    body: description,
                    phone: phone,
                    make: make,
                    model: model,
                    images: images
                };
                console.log(listing);
            }
        });
}

urls.forEach(buildListing);

}); 








