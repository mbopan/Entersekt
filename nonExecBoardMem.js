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
   
   // Check status code (200 is HTTP OK)
   console.log("\n\n Status code: " + response.statusCode);
   if(response.statusCode === 200) {
     // Parse the document body
		var $ = cheerio.load(body);
		$('#features div.wrapper div.clearfix ').each(function() {
			$(this).find('h2').each(function() {
					console.log($(this).text());
				});
		});
				console.log("\n\n Looking at the list above,Entersekt has four Non-Executive Board Members");

   }
});
