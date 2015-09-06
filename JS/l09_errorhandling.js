/*
Error Handling in JavaScript

try   statement lets you try a block of code for errors
catch statement handles the error
throw statement lets you create custom errors
*/

function greetMessage() {
    try {
        addlert("Hello");
    }
    catch (err) {
        alert("Error Description " + err.message);
    }
}
function addlert(greeting) {
    document.write(greeting);
}
greetMessage();





function throwExample() {
    try {
        var input = prompt("Enter a number between 1 to 10", "");

        if (input == "") throw "empty";
        if (isNaN(input)) throw "entered value is not a number";
        if (input > 10) throw "Number is more than 10";
        if (input < 5) throw "Number is too low";


    }
    catch (err) {
        var txt = "Error description: " + err + "\n\n";
        alert(txt);
    }
}
throwExample();