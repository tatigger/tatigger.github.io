/*  JavaScript 6th Edition
    Chapter 10
    Chapter case

    Terri Lyman
    November 17, 2018

    Filename: scriptsafety.js
    
*/

"use strict";

// declare global variables for setup page
var waitForUser; // for timeout if no response to request for location data
// area to print location or error message
var directDiv = document.getElementById("directions");
var altDiv = document.getElementById("currAltitude");

// get coordinates and print in geolocations area
function createDirections(position) { 
    clearTimeout(waitForUser);
    var currPosLat = position.coords.latitude;
    var currPosLng = position.coords.longitude;
    var currAlt = position.coords.altitude;
           
     if (currAlt === null) {
         altDiv.style.display = "block";
         altDiv.style.color = "red";
         altDiv.innerHTML = "Altitude is not available.";
     } else {
         altDiv.style.display = "block";
         altDiv.style.color = "black";
         altDiv.innerHTML = "Current Altitude is " + currAlt + 
         " meters above sea level";
     }
         
      directDiv.style.display = "block";
      directDiv.style.color = "black";
      directDiv.innerHTML = "Current Location is Latitude " 
      + currPosLat + ", Longitude " + currPosLng;
      
} 

function createMap(position) {
 //    var currPosLat = position.coords.latitude;
 //    var currPosLng = position.coords.longitude;
     var mapOptions = {
        center: new google.maps.LatLng(currPosLat, currPosLng),
        zoom: 12
        };
      var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

function geoTest() { // check if location data allowed and available
    waitForUser = setTimeout(fail, 10000);
    if (navigator.geolocation) { 
        navigator.geolocation.getCurrentPosition(createDirections, fail, {timeout: 100000});
        var waitForGoogleLoad = setTimeout(createMap, 30000)
    } else {
        fail();
    }
}


// error message if geolocation data unavailable or not allowed
function fail() {
	directDiv.style.display = "block";
	directDiv.style.color = "red";
    directDiv.innerHTML = 
    "Unable to access your current location.";
}



// call geoTest on load
if (window.addEventListener) {
    window.addEventListener("load", geoTest, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", geoTest);
}