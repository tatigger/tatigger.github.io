/*    JavaScript 6th Edition
 *    Chapter 6
 *    Individual Case Project

 *    Survey Ch6 Form Enhancement
 *    Author: Terri Lyman
 *    Date: October 13, 2018  

 *    Filename: fc.js
 */
"use strict"; //interpret document contents in JS strict mode
 
//  global variables
var formValidity = true;


/* validate age radio fields, at least one selected */
function validateAge() {
    var selectElements = document.querySelectorAll("#age select");
    var elementCount = selectElements.length;
    var errorDiv = document.getElementById("errorMessage3")
    var fieldsetValidity = true;
    var ageR = document.getElementsByName("age")   
    var currentElement
    
    try {
        if (!ageR[0].checked && !ageR[1].checked && !ageR[2].checked && ![3].checked && !ageR[4].checked) {
            for (var i = 0; i < 5; i++) {
                ageR[i].style.outline = "2px solid red"; 
            }
            fieldsetValidity = false;
        } else {
            for (var i = 0; i < elementCount; i++) {
                ageR[i].style.outline = "";
                fieldsetValidity = true;
            }
        }
        if (fieldsetValidity === false) {
            //throw appropriate error message
            throw "Please make a selection.";
        } else {
            errorDiv.style.display = "none";
            errorDiv.innerHTML = "";
            fieldsetValidity = true;
        }  
    } 
    catch(msg) {
    errorDiv.style.display = "block";
    errorDiv.style.color = "red";
    errorDiv.innerHTML = msg;
    formValidity = false;
    }   
}



/* validate dType field, one selection required */
function validateDType() {
    var currentElement = document.getElementById("dType");
    var errorDiv = document.getElementById("errorMessage2");
    var fieldsetValidity = true;
    
    try {
    	if (currentElement.selectedIndex === -1) {
            currentElement.style.border = "2px solid red";
            fieldsetValidity = false;
        } else {
            currentElement.style.border = "";
            fieldsetValidity = true;
        }
        if (fieldsetValidity === false) {
            //throw appropriate error message
            throw "Please make a selection.";
        } else {
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
    finally {
        validateAge(); //to get the validate age function to run even if no selection was made in that fieldset
    }
}

/* remove fallback placeholder text */
function zeroPlaceholder() {
    var messageBox = document.getElementById("customText");
    
    messageBox.style.color = "black";
    if (messageBox.value === messageBox.placeholder) {
        messageBox.value = "";
    }
}

/* restore placeholder text if box contains no user entry */
function checkPlaceholder() {
    var messageBox = document.getElementById("customText");
    
    if (messageBox.value === "") {
        messageBox.style.color = "rgb(178,184,183)";
        messageBox.value = messageBox.placeholder;
    }
}

/* create a placeholder for customText if property not supported */
function generatePlaceholder() {
    if (!Modernizr.input.placeholder) {
        var messageBox = document.getElementById("customText");
        
        messageBox.value = messageBox.placeholder;
        messageBox.style.color = "rgb(178,184,183)";
        if (messageBox.addEventListener) {
           messageBox.addEventListener("focus", zeroPlaceholder, false);
           messageBox.addEventListener("blur", checkPlaceholder, false);
        } else if (messageBox.attachEvent){
            messageBox.attachEvent("onfocus", zeroPlaceholder);
            messageBox.attachEvent("onblur", checkPlaceholder);
        }
    }
}

//need event listeners for validateDType
function createEventListeners() {
    var deType = document.getElementById("dType");
    
    if (deType.addEventListener) {
        deType.addEventListener("blur", validateDType, false);
    } else if (type.attachEvent) {
        deType.attachEvent("onblur", validateDType);
    }
}
/* setUpPage functions */
function setUpPage() {
    removeSelectDefaults();
    generatePlaceholder();
    createEventListeners();
}

/* remove default values from dType field */
function removeSelectDefaults() {
    var emptyBoxes = document.getElementById("dType");
    
    emptyBoxes.selectedIndex = -1;
}



if (window.addEventListener) {
	window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}
