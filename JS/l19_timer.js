/*

setInterval     executes a function, over and over again, at specified time intervals
clearInterval   used to stop further executions of the function specified in the setInterval() method 

setTimeout      executes a function, once, after waiting a specified number of milliseconds
clearTimeout    method is used to stop the execution of the function specified in the setTimeout() method.

*/
var myTimer = null;
var setTimer = null;

function callMeEverySec() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("demo").innerHTML = t;
    myTimer = setInterval(callMeEverySec, 1000);
}

function clearSetInterval() {
    clearInterval(myTimer);
}

function callMeAfter4Sec() {
    setTimer = setInterval(setTimeoutExample, 4000);
}

function clearSetTimeOut() {
   clearTimeout(setTimer);
}

function setTimeoutExample() {
    document.getElementById("demo").innerHTML = "Hello";
}