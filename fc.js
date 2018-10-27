/*    JavaScript 6th Edition
 *    Chapter 6
 *    Individual Case Project

 *    Survey Ch6 Form Enhancement
 *    Author: Terri Lyman
 *    Date: October 13, 2018, update 10/26/18

 *    Filename: fc.js
 */
"use strict"; //interpret document contents in JS strict mode
 
//  global variables
var formValidity = true;
var dateObject = new Date(); // date of diagnosis ch7

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

 function displayCalendar(whichMonth) { // 10/26/18 ch7
     var date;
     var dateToday = new Date();
     var dayOfWeek;
     var daysInMonth;
     var dateCells;
     var captionValue;
     var month;
     var year;
     var monthArray = ["January","February","March","April","May","June","July","August","September","October","November","December"];
     document.getElementById("dDate").value = "";

     if (whichMonth === -1) {
         dateObject.setMonth(dateObject.getMonth() - 1);
     } else if (whichMonth === 1) {
         dateObject.setMonth(dateObject.getMonth() + 1);
     }
     
     month = dateObject.getMonth();
     year = dateObject.getFullYear();
     dateObject.setDate(1);
     dayOfWeek = dateObject.getDay();
     captionValue = monthArray[month] + " " + year;
     document.querySelector("#cal table caption").innerHTML = captionValue;
     
     if (month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11) { // Jan, Mar, May, Jul, Aug, Oct, Dec
         daysInMonth = 31;
     } else if (month === 1) { // Feb
         if (year % 4 === 0) { //leap year test
             if (year % 100 === 0) {
                 if (year % 400 === 0) { //leap year
                     daysInMonth = 29;
                 } else{
                     daysInMonth = 28;
                 }
             } else {
                 daysInMonth = 29;
             }
         } else {
             daysInMonth = 28;
         }
       } else { //Apr, Jun, Sep, Nov
           daysInMonth = 30;
       }   
     
    dateCells = document.getElementsByTagName("td");
    for (var i = 0; i < dateCells.length; i++) {
        // clear existing table data
        dateCells[i].innerHTML = "";
        dateCells[i].className = "";
    }       
    for (var i = dayOfWeek; i < daysInMonth + dayOfWeek; i++) {
        // add dates to days cells
        dateCells[i].innerHTML = dateObject.getDate();
        dateCells[i].className = "date";
        if (dateToday > dateObject) {
            dateCells[i].className = "pastdate";
        }
        date = dateObject.getDate() + 1;
        dateObject.setDate(date);    
        }
        // reset month to month shown
        dateObject.setMonth(dateObject.getMonth() - 1);
        document.getElementById("cal").style.display = "block";
        // display calendar if it's not already visible
}

function selectDate(event) { // 10/26/18 ch7
    if (event === undefined) { //get caller element in IE8
        event = window.event;
    }
    var callerElement = event.target || event.srcElement;
    if (callerElement.innerHTML === "") {
        // cell contains no date, so don't close the calendar
        document.getElementById("cal").style.display = "block";
        return false;
    }
    dateObject.setDate(callerElement.innerHTML);
    
    var fullDateToday = new Date();
    var dateToday = Date.UTC(fullDateToday.getFullYear(), fullDateToday.getMonth(), fullDateToday.getDate());
    var selectedDate = Date.UTC(dateObject.getFullYear(), dateObject.getMonth(), dateObject.getDate());
    
    if (selectedDate > dateToday) {
        document.getElementById("cal").style.display = "block";
        return false;
    }
    document.getElementById("dDate").value = dateObject.toLocaleDateString();
    hideCalendar();
    timeSince();
    selectedDate = dateObject.toLocaleDateString();
    document.getElementById("diaDate").innerHTML = selectedDate;
}

function hideCalendar() { //10/26/18 ch7
    document.getElementById("cal").style.display = "none";
}

function prevMo() {//10/26/18 ch7
    displayCalendar(-1);
}

function nextMo() { //10/26/18 ch7
    displayCalendar(1);
}

// calculate years, months and days since dx 10/26/18 ch7
function timeSince() {
    var dateToday = new Date();
    var dateFrom = Date.UTC(dateObject.getFullYear(), dateObject.getMonth(), dateObject.getDate());
    var dateTo = Date.UTC(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate());
    
    //years since diagnosis miliseconds in a day times 31 days times 12 months
    var yearsSince = Math.floor((dateTo - dateFrom) / (86400000 * 31 * 12));
    //months since diagnosis
    var fractionalYear = (dateTo - dateFrom) % (86400000 * 31 * 12);
    //miliseconds in a day times 31 days
    var monthsSince = Math.floor(fractionalYear / (86400000 * 31));
    //days since diagnosis 
    var fractionalMonth = (dateTo - dateFrom) % (86400000 * 31);
    // miliseconds in a day
    var daysSince = Math.floor(fractionalMonth / 86400000);
    
    document.getElementById("timeSince").innerHTML = yearsSince + " years, " + monthsSince + " months, and " + daysSince + " days since diagnosis."
}


//need event listeners for validateDType
function createEventListeners() {
    var deType = document.getElementById("dType");
    
    if (deType.addEventListener) {
        deType.addEventListener("blur", validateDType, false);
    } else if (type.attachEvent) {
        deType.attachEvent("onblur", validateDType);
    }
    
    var dateField = document.getElementById("dDate");
    
    if (dateField.addEventListener) {
        dateField.addEventListener("click", displayCalendar, false);
    } else if (dateField.attachEvent) {
        dateField.attachEvent("onclick", displayCalendar);
    }
    // ch7
    var dateCells = document.getElementsByTagName("td");
    
    if (dateCells[0].addEventListener ){
        for (var i = 0; i < dateCells.length; i++) {
            dateCells[i].addEventListener("click", selectDate, false);
        }
    } else if (dateCells[0].attachEvent) {
        for (var i = 0; i < dateCells.length; i++) {
            dateCells[i].attachEvent("onclick", selectDate);
            }
    }
    //ch7
    var closeButton = document.getElementById("close");
    
    if (closeButton.addEventListener) {
        closeButton.addEventListener("click", hideCalendar, false);
    } else if (closeButton.attachEvent) {
        closeButton.attachEvent("onclick", hideCalendar);
    }
    //ch7
    var prevLink = document.getElementById("prev");
    var nextLink = document.getElementById("next");
    
    if (prevLink.addEventListener) {
        prevLink.addEventListener("click", prevMo, false);
        nextLink.addEventListener("click", nextMo, false);
    } else if (prevLink.attachEvent) {
        prevLink.attachEvent("onclick", prevMo);
        nextLink.attachEvent("onclick", nextMo);
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
