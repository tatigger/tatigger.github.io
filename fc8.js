/*    JavaScript 6th Edition
 *    Chapter 8
 *    Individual Case Project

 *    Chapter 8
 *    Author: Terri Lyman
 *    Date: October 13, 2018, update 10/26/18, update 10/31/18

 *    Filename: fc8.js
 */
"use strict"; //interpret document contents in JS strict mode
 
//  global variables
//var formValidity = true; 
//var dateObject = new Date(); // date of diagnosis ch7

var beverage = []; //Ch 8 beverage array
var arrayString; // Ch 8 array to string

// add beverage to answers section
function addBeverage(event) {
    if (event === undefined) { // get caller element in IE8
        event = window.event;       
    }
    var callerElement = event.target || event.srcElement;
    var beverageName = callerElement.value;
    if (callerElement.checked) { // if box has just been checked
    // add checkbox value to beverage array
        beverage.push(beverageName);
        // add checkbox value to list in answers section
        var newBeverage = document.createElement("li");
        newBeverage.innerHTML = beverageName;
        document.getElementById("answersBeverages").appendChild(newBeverage);
        //make answers section visible
        document.getElementById("bChoices").style.display = "block";
    } else { //if box has just been unchecked
        var listItems = document.querySelectorAll("#answersBeverages li");
        for (var i = 0; i < listItems.length; i++) {
            if (listItems[i].innerHTML === beverageName) {
                // remove element at index i from array
                beverage.splice(i, 1);
                // remove beverage from answer list
            listItems[i].parentNode.removeChild(listItems[i]);
            break;
            }
        }
    }
}

// convert from input to strings for submission
function convertToString() {
    // convert beverage array to string
    arrayString = beverage.toString();
}

function createEventListeners() {
     var beverages = document.getElementsByName("beverages");
   if (beverages[0].addEventListener) {
      for (var i = 0; i < beverages.length; i++) {
         beverages[i].addEventListener("change", addBeverage, false);
      }
   } else if (beverages[0].attachEvent) {
      for (var i = 0; i < beverages.length; i++) {
         beverages[i].attachEvent("onchange", addBeverage);
      }
   }
    var button = document.getElementById("finished");
   if (button.addEventListener) {
       button.addEventListener("click", convertToString, false);
   } else if (button.attachEvent) {
       button.attachEvent("onclick", convertToString);
   }   
}

if (window.addEventListener) {
	window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}

