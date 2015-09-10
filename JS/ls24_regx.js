/*
RegExp

A regular expression is an object that describes a pattern of characters.

When you search in a text, you can use a pattern to describe what you are searching for.

A simple pattern can be one single character.

A more complicated pattern can consist of more characters, and can be used for parsing, format checking, substitution and more.

var patt=new RegExp(pattern,modifiers);

or more simply:

var patt=/pattern/modifiers; 
pattern specifies the pattern of an expression
modifiers specify if a search should be global, case-sensitive, etc.


RegExp Modifiers

Modifiers are used to perform case-insensitive and global searches.

The i modifier is used to perform case-insensitive matching.

The g modifier is used to perform a global match
*/
function regexExample() {
    var str = "Hello World";
    var pattern = /hello/i;
    var result = str.match(pattern);
    console.log(result);
}

function regexGlobalExample() {
    var str = "This is a Test string";
    var pattern = /test/gi;
    var result = str.match(pattern);
    console.log(result);
}

/*
test()
The test() method searches a string for a specified value, and returns true or false, depending on the result.

*/
var pattern = new RegExp("s");
console.log(pattern.test("Master JavaScript"));

/*
exec()
The exec() method searches a string for a specified value, and returns the text of the found value. If no match is found, it returns null.
*/
console.log(pattern.exec("Master JavaScript"));

function validateEmail(email) {
    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    if (reg.test(email)) {
        return true;
    }
    else {
        return false;
    }
}

function checkForValidURL(value) {

    var urlregex = new RegExp("^((http|https):\/\/)?(www[.])?([a-zA-Z0-9]|-)+([.][a-zA-Z0-9(-|\/|=|?)?]+)+$");
    if (urlregex.test(value)) {
        return (true);
    }
    return (false);
}
regexExample();
regexGlobalExample();

console.log("Correct Email "+validateEmail("xyz@domain.com"));
console.log("Invalid Email " + validateEmail("Hello"));

console.log("Valid URL " + checkForValidURL("http://idevtek.com"));
console.log("Invalid URL " + checkForValidURL("Hello"));

