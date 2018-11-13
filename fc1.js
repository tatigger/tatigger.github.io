/*    JavaScript 6th Edition
 *    Chapter 6
 *    Individual Case Project

 *    Survey Ch6 Form Enhancement
 *    Author: Terri Lyman
 *    Date: October 13, 2018, update 10/26/18

 *    Filename: fc1.js
 *    testing textarea validation
 */
"use strict"; //interpret document contents in JS strict mode
 
//  global variables
var formValidity = true;

/* verify <> characters not used in text field   Tried this function first, 
doesn't seem to be running, so commented it out
function validateTextarea() {
    var foodText = document.getElementById("customText");
    var errorDiv = document.getElementById("errorMessage4");
    
    try {
        if (/<>/.test(foodText) === false) {
            var fieldsetValidity = true;
        } else {
            throw "Please remove special characters (< >)";
        }
    }
    catch(msg) {
        errorDiv.style.display = "block";
        errorDiv.style.border = "2px solid red";
        errorDiv.innerHTML = msg;
        fieldsetValidity = false;
    }
    }
*/    
 //tried this function 2nd, doesn't seem to be running  
 function validateTextarea() { 
    var foodText = document.getElementById("customText");
    var errorDiv = document.getElementById("errorMessage4");
    
    try {
        if (/[<]/.test(foodText.value) === true) {
            document.getElementById("customText").style.border = "2px solid red";
            var fieldsetValidity = false;
            throw "Please remove any special characters"
        } else {
            document.getElementById("customText").style.border = "";
            fieldsetValidity = true;
            errorDiv.style.display = "none";
            errorDiv.innerHTML = "";
        }    
    }    
    catch(msg) {
    	errorDiv.style.display = "block";
    	errorDiv.style.color = "red";
    	errorDiv.innerHTML = msg;
    	formValidity = false;
	}
}
//removed placeholder functions to test validateTextarea

function createEventListeners() {
   
    //event listener for validateTextarea
    var foodText = document.getElementById("customText");
    if (foodText.addEventListener) {
        foodText.addEventListener("change", validateTextarea, false);
    } else if (foodText.attachEvent) {
        foodText.attachEvent("onchange", validateTextarea);
    }
}

//tried removing setUpPage function, and just using window event listener, didn't still wasn't running
/* setUpPage functions */
function setUpPage() {
//    generatePlaceholder();
    createEventListeners();
}

if (window.addEventListener) {
	window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}

