/*    JavaScript 6th Edition
 *    Chapter 11
 *    Individual Case Project
 *    Terri Lyman
 *    November 22, 2018
 *    Filename: fc8.js
 */
"use strict"; //interpret document contents in JS strict mode
 
// global variables

var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=ae3512a8aa404def8f762484a41c74fd';
var req = new Request(url);
var newsResults;

fetch(req)
    .then(function(response) {
           console.log(response.json())
           return response;
    })
//     .then(function (validateResponse){
 //    })
/*     
function validateResponse() {
    if (!response.json.ok) {
    throw Error(response.statusText);
  } else {
  	displayData(response);
  	console.log("in validateResponse");
  	return response;
}
}
*/

function displayData(response) { 
    document.getElementById("credit").innerHTML = 
    "<p>powered by <a href='https://newsapi.org'>NewsAPI.org</a></p>"; 
       var items = response.json;
       var articleEl = document.getElementById("news")[0];
       console.log("before for loop");
       for (var i = 0; i < 10; i++) {
         console.log("in for loop");
         var newDiv = document.createElement("div");
         var head = document.createDocumentFragment();
         var newP1 = document.createElement("p");
         var newP2 = document.createElement("p");
         var newP3 = document.createElement("p");
         var newA = document.createElement("a");
         head.appendChild(newP1);
         newA.innerHTML = items[i].Title;
         newA.setAttribute("href", items[i].Url);
         newP1.appendChild(newA);
         newP1.className = "head";
         }
    console.log("after for loop");
}

function logError(error) {
  console.log('Looks like there was a problem: \n', error);
}

if (window.addEventListener) {
	window.addEventListener("load", displayData, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", displayData);
}

/*
var sinceDate = new Date()
var d = new Date();
sinceDate.setDate(d.getDate() - 2);

var url = 'https://newsapi.org/v2/everything?' +
          'q=diabetes-technology&' +
          'language=en&' +
          'from=' + sinceDate + '&' +
          'sortBy=popularity&' +
          'apiKey=ae3512a8aa404def8f762484a41c74fd';

var req = new Request(url);

function fetch(req)
    .then (function(response) {
        console.log(response.json());
    })




if (window.addEventListener) {
	window.addEventListener("load", fetch, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", fetch);
}
*/

