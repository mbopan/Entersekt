var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');
var keyWords = "Schalk joined Entersekt as CEO";

var pageToSearch = "https://www.entersekt.com/Company-The-team";
console.log("Visiting page " + pageToSearch);
request(pageToSearch, function(error, response, body) {
   if(error) {
     console.log("Error: " + error);
   }
   function searchForWord($, word) {
			var bodyText = $('html > body').text();
			if(bodyText.toLowerCase().indexOf(word.toLowerCase()) !== -1) {
				return true;
			}
			console.log(keyWords + "not found.")
		}
   // Check status code (200 is HTTP OK)
   console.log("Status code: " + response.statusCode);
   if(response.statusCode === 200) {
     // Parse the document body
		var $ = cheerio.load(body);
		var isWordFound = searchForWord($, keyWords);
		console.log("Searching for key words: \" " + keyWords + "\".");
		if(isWordFound) {
			console.log('Key Word : ' + keyWords + ' found ');
			//console.log(keyWords + ' found at page ' + URL);
			console.log("Therefore, Schalk Nolte is the CEO of Entersekt ");
		}
   }
});
