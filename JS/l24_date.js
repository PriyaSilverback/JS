/*
Date Object

Create a Date Object
new Date() // current date and time
new Date(milliseconds) //milliseconds since 1970/01/01
new Date(dateString)
new Date(year, month, day, hours, minutes, seconds, milliseconds)
*/

var today = new Date();
document.getElementById("demo").innerHTML = today;

var dateString = new Date("November 25, 2013 20:38:00");
document.getElementById("demo1").innerHTML = dateString;

var dateYMD = new Date(2013, 11, 25); //year,month,date
document.getElementById("demo2").innerHTML = dateString;

var dateYMDHMS = new Date(2013, 11, 24, 20, 33, 05); //year,month,date,hour,min,sec
document.getElementById("demo3").innerHTML = dateString;

/*
getFullYear()
Use getFullYear() to get the year.
*/
var newDate = new Date();
console.log(newDate.getFullYear());
/*
getTime()
getTime() returns the number of milliseconds since 01.01.1970.
*/
console.log(newDate.getTime());
/*
toUTCString()
How to use toUTCString() to convert today's date (according to UTC) to a string.
*/
console.log(newDate.toUTCString());
/*
getDay()
Use getDay() and an array to write a weekday, and not just a number.
*/
console.log(newDate.getDay());
/*
getMonth()
*/
console.log(newDate.getMonth());
/*
parse()
Parses a date string and returns the number of milliseconds since midnight of January 1, 1970

*/
var dte = Date.parse("Nov 26, 2013");
console.log(dte);

/* 
Setting Dates 
*/

var newDate = new Date();
newDate.setFullYear(2013, 11, 24);

var expiryDate = new Date();
expiryDate.setDate(expiryDate.getDate() + 5);

/*
Compare Two Dates
*/
var startDate = new Date();
startDate.setDate(startDate.getDate() + 15);

var today = new Date();

if (startDate > today) {
    alert(startDate);
}
else {
    alert(today);
}
