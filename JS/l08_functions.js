/*
Functions in javascript
A function is a code block in javascript which gets called when some entity calls it

In javascript we have following types of functions

1. Functions without any return value or any input Arguments
2. Functions without any return value but with input Arguments
3. Function with return value and input Arguments

Local JavaScript Variables & Global JavaScript Variables

*/
var num=10;
function HelloWorld() {
    document.write("Hello World");
}

function GreetUsers(username, greeting) {
var num=10;
    document.write(greeting + " " + username);
}

function FindEvenNumber(number) {
var num=10;
    if (number % 2 == 0) {
        return "even";
    }
    else {
        return "odd";
    }
}



var result = FindEvenNumber(21);
document.write(result);

var person = {};
person.greet = GreetUsers("Matt", "Hello");
person.greet;

/*

A variable declared (using var) within a JavaScript function becomes LOCAL and can only be accessed from within that function.
(the variable has local scope).

You can have local variables with the same name in different functions, 
because local variables are only recognized by the function in which they are declared.

Local variables are deleted as soon as the function is completed.
The scope of local variables is only within the function in which its defined

Global JavaScript Variables

Variables declared outside a function, become GLOBAL, and all scripts and functions on the web page can access it.


*/