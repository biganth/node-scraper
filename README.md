# node-scraper
Web scraping with node and cheerio. This utility scrapes a given url for additional urls in a list and then scrapes each url for certain dom elements and logs out the result from each url as an object.

###Example output:
```javascript
{ body: '2007 Nissan Lafesta for salePrice: $850,000 Tel: (876) 868-8866 Features Fully Powered, Lady Driven',
  phone: '(876) 868-8866',
  make: ' Nissan',
  model: 'Lafesta',
  images: 
   [ 'http://jamaicanclassifieds.com/cl_upload/20160509_132048.jpg',
     'http://jamaicanclassifieds.com/cl_upload/20160509_132111.jpg',
     'http://jamaicanclassifieds.com/cl_upload/20160509_132137.jpg',
     'http://jamaicanclassifieds.com/cl_upload/20160509_132149.jpg',
     'http://jamaicanclassifieds.com/cl_upload/20160509_132158.jpg',
     'http://jamaicanclassifieds.com/cl_upload/20160509_132238.jpg',
     'http://jamaicanclassifieds.com/cl_upload/20160509_132048.jpg',
     'http://jamaicanclassifieds.com/cl_upload/20160509_132111.jpg',
     'http://jamaicanclassifieds.com/cl_upload/20160509_132137.jpg',
     'http://jamaicanclassifieds.com/cl_upload/20160509_132149.jpg',
     'http://jamaicanclassifieds.com/cl_upload/20160509_132158.jpg',
     'http://jamaicanclassifieds.com/cl_upload/20160509_132238.jpg' ] }
````
