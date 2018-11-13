/*    JavaScript 6th Edition
 *    Chapter 4
 *    Individual Case Project

 *    Monarch Counter/Nature Page with try and catch block to validate number entry
 *    Author: Terri Lyman
 *    Date: Sept 29, 2018  

 *    Filename: mc.js
 */
//
/* The debugging methods I used were somewhat effective.  I checked the HTML in the W3C     markup validator.  I opened the JavaScript console in my browser, and also in a second browser.  I checked to make sure all the parenthesis and braces were closed, and all the lines had ";".  I checked for spaces before and after comparisons and checked spellings of the different variables.  I commented out sections of code, and uncommented portions, trying to figure out what was causing problems.  All of these techniques revealed errors that I was able to correct.  These were only partially effective, because I am missing some logic piece to make the try, throw, catch block work as intended. 
*/
//  global variables, changed total to global variable
var maleMonarchs = 0;
var femaleMonarchs = 0;
var totalMonarchs = 0;
var total = 0;
var males = 0;
var females = 0;
var messageElement = document.getElementById("message");

function monarchCounter(maleMonarchs, femaleMonarchs, totalMonarchs) {
	var males = document.getElementById("maleMonarchs").valueAsNumber;
	var females = document.getElementById("femaleMonarchs").valueAsNumber;
	var onlyNumeric = /\D/
	var validity = true;
	
	
	try { 
	   //   if (/\D/.test(maleMonarchs.value) === true) {
       if (!(maleMonarchs.value < 0)) { //verify entry
           throw "Please enter a number between 0 and 100."; //error statement to print
        }	
    }
    catch(message) {
       validity = false;
       messageText = message;
       messageElement.innerHTML = messageText; // prints error statement
       msg = "";
    }
   
	total = males + females;
	
    var msg	= total + " Total Monarchs";
	document.getElementById("totalMonarchs").innerHTML = msg;
	if (total > 0) {
		var mes2 = "Great job!";
		document.getElementById("monMess").innerHTML = mes2;
		messageElement.innerHTML = none;
	
	} else if (total === 0 ){
		var mes3 = "Better luck tomorrow.";
		document.getElementById("monMess").innerHTML = mes3;
	}
}

//  Resets form when page is reloaded
function resetForm() {
	document.getElementById("maleMonarchs").value = 0;
	document.getElementById("femaleMonarchs").value = 0;
	document.getElementById("totalMonarchs").value = 0;	
	createEventListeners();
}

//creates event listeners 
function createEventListeners() {
	document.getElementById("maleMonarchs").addEventListener("change", monarchCounter, false);
	document.getElementById("femaleMonarchs").addEventListener("change", monarchCounter, false);
	
//	document.getElementById("totalMonarchs").addEventListener("change", monarchCounter, false);
	//I don't think I need one for the total line.
}

//window.addEventListener("load", resetForm, false);
// add backward compatibility for older IE

if (window.addEventListener) {
	window.addEventListener("load", resetForm, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", resetForm);
}
