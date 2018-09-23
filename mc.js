/*    JavaScript 6th Edition
 *    Chapter 2
 *    Individual Case Project

 *    Monarch Counter/Nature Page
 *    Author: Terri Lyman
 *    Date: Sept 19, 2018  

 *    Filename: mc.js
 */

//  global variables
var maleMonarchs = 0;
var femaleMonarchs = 0;
var totalMonarchs = 0;

// calculates total number of monarchs counted, added "valueAsNumber" to prevent concatenation instead of addition.
// added variable msg to hold the total and the message
function monarchCounter(maleMonarchs, femaleMonarchs, totalMonarchs) {
	var males = document.getElementById("maleMonarchs").valueAsNumber;
	var females = document.getElementById("femaleMonarchs").valueAsNumber;
	var total = males + females;
	var msg	= total + " Total Monarchs";
	document.getElementById("totalMonarchs").innerHTML = msg;
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
	//document.getElementById("totalMonarchs").addEventListener("change", monarchCounter, false);
	//I don't think I need one for the total line.
}

window.addEventListener("load", resetForm, false);
	