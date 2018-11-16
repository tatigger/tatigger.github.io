/*  JavaScript 6th Edition
    Chapter 10
    Chapter case

    Oak Top House
    Author: 
    Date:   

    Filename: script.js
*/

"use strict";

// declare global variables for setup page
var waitForUser; // for timeout if no response to request for location data
// area to print location or error message
var directDiv = document.getElementById("directions");
var altDiv = document.getElementById("currAltitude");

function geoTest() { // check if location data allowed and available
    waitForUser = setTimeout(fail, 10000);
    if (navigator.geolocation) { 
        navigator.geolocation.getCurrentPosition(createDirections, fail, {timeout: 100000});
    } else {
        fail();
    }
}

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

function openMap() {
    // to minimize data use, download map only if needed and 
   // not already downloaded
   if (typeof google !== 'object') {
       var script = document.createElement("script");
       script.src ="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=trueandcallback=geoTest";
       document.body.appendChild(script);
   }
    var mapOptions = {
        center: new google.maps.LatLng(currPosLat, currPosLng),
        };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

}



// error message if geolocation data unavailable or not allowed
function fail() {
	directDiv.style.display = "block";
	directDiv.style.color = "red";
    directDiv.innerHTML = 
    "Unable to access your current location.";
}

function createEventListeners() {
    geoTest();
    
    var mapButton = document.getElementById("mapbtn");
    
    if (mapButton.addEventListener) {
        mapButton.addEventListener("click", openMap, false);
    } else if (nameButton.attachEvent) {
        nameButton.attachEvent("onclick", openMap);
    }
    
}

// call geoTest on load
if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}