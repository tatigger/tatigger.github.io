/*    JavaScript 6th Edition
 *    Chapter 4
 *    Individual Case Project

 *    Monarch Counter/Nature Page with try and catch block to validate number entry
 *    Author: Terri Lyman
 *    Date: Sept 29, 2018  

 *    Filename: mc.js
 *
 *
 * Two things, I added a REGEX to check for "-" and non-numerical data.  That works, BUT 
 * I still get a NaN error in addition to my request for the desired data.  On THIS
 * form I cannnot get the error message to go away once the error is fixed.  
 */

function checkInput() {
    var mMon = document.getElementById("maleMonarchs").value;
    var fMon = document.getElementById("femaleMonarchs").value;
    var errorDiv = document.getElementById("errorMessage");
    
    try {
        if (/[\-\D]/.test(mMon.value) === true) {
            throw "Enter a number between 0 and 100";
//console.log("less than 0")
        } else {
            errorDiv.style.display = "none";
            errorDiv.innerHTML = "";
//console.log("0 or more")
        }  
    }
    catch(msg) {
        errorDiv.style.display = "block";
        errorDiv.style.color = "red";
        errorDiv.innerHTML = msg;
    }
    try {
        if (/[\-\D]/.test(fMon.value) === true) {
            throw "Enter a number between 0 and 100";
//console.log("less than 0")
        } else {
            errorDiv.style.display = "none";
            errorDiv.innerHTML = "";
//console.log("0 or more")
        }  
    }
    catch(msg) {
        errorDiv.style.display = "block";
        errorDiv.style.color = "red";
        errorDiv.innerHTML = msg;
    }
}

function monarchCounter() {
    var mMon = document.getElementById("maleMonarchs").valueAsNumber;
    var fMon = document.getElementById("femaleMonarchs").valueAsNumber;
    var totalMessage = document.getElementById("totalMonarchs");
    var total = 0;
    total = mMon + fMon;
//console.log(total);
    
    if (total > 0) {
        totalMessage.innerHTML = total + " Monarchs! Great Job!";
    } else {
        totalMessage.innerHTML = total + " Monarchs.  Better luck tomorrow.";
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
	var males = document.getElementById("maleMonarchs");
	if (males.addEventListener) {
		males.addEventListener("change", checkInput, false);
	    males.addEventListener("change", monarchCounter, false);
	} else if (males.attachEvent) {
		males.attachEvent("onchange", checkInput);
	    males.attachEvent("onchange", monarchCounter);
	}
	
	var females = document.getElementById("femaleMonarchs");
	if (females.addEventListener) {
		females.addEventListener("change", checkInput, false);
	    females.addEventListener("change", monarchCounter, false);
	} else if (females.attachEvent) {
		females.attachEvent("onchange", checkInput);
	    females.attachEvent("onchange", monarchCounter);
	}
}

if (window.addEventListener) {
    window.addEventListener("load", resetForm, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", resetForm);
}