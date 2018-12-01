/*    JavaScript 6th Edition
 *    Chapter 11
 *    Individual Case Project
 *    Terri Lyman
 *    November 22, 2018
 *    Filename: fc8.js
 *    
 *    Not printing out the information to webpage.  Once I got that to work, 
 *    the plan was to change the article search to diabetes tech, which I got
 *    to work in the console.  I have restarted 3 times, but this is the steps I
 *    I used for the most recent attempt.  I started with fetch, which is given by
 *    the API with the apiKey.  Then I added the logError Function, then tried several
 *    ways to get to the displayData function, including a .then 
 *    (function(validateResponse)), a .then (function(displayData)), and an
 *    event handler on page load to call the displayData function.  I believe
 *    I am not understanding how to properly reference the "Promise" object to
 *    get at the data.
 */
 
"use strict"; //interpret document contents in JS strict mode
 
// global variables

var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=ae3512a8aa404def8f762484a41c74fd';
var req = new Request(url);
var newsResults;

fetch(req) // fetch is grabbing the news list
    .then(function(response) {
           console.log(response.json()) //you can see the object in the console
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

function displayData(response) { // this function isn't working
    document.getElementById("credit").innerHTML = 
    "<p>powered by <a href='https://newsapi.org'>NewsAPI.org</a></p>"; 
       var items = response.json; //trying to make items be the items in the response
       var articleEl = document.getElementById("news")[0];//puts the information in the
       //prepared div
       console.log("before for loop");// trying to see if this function is working
       for (var i = 0; i < 10; i++) {
         console.log("in for loop"); // trying to see if the loop is starting
         var newDiv = document.createElement("div");// add a div
         var head = document.createDocumentFragment();// create a fragment
         var newP1 = document.createElement("p"); 
         var newP2 = document.createElement("p");
         var newP3 = document.createElement("p");
         var newA = document.createElement("a"); // create element for the link
         head.appendChild(newP1);
         newA.innerHTML = items[i].Title; // only want title and URL
         newA.setAttribute("href", items[i].Url);
         newP1.appendChild(newA);
         newP1.className = "head";
         }
    console.log("after for loop");// trying to see if the loop ends
}

function logError(error) { // if an error will print to console - this was working
  console.log('Looks like there was a problem: \n', error);
}

if (window.addEventListener) {// trying to get displayData function to run
	window.addEventListener("load", displayData, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", displayData);
}

/* one of the multiple attempts :(
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

