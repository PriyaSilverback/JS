/*
JavaScript Global Functions
decodeURI() 	                        Decodes a URI
decodeURIComponent() 	                Decodes a URI component
encodeURI() 	                        Encodes a URI
encodeURIComponent() 	                Encodes a URI component
eval() 	                                Evaluates a string and executes it as if it was script code
isFinite() 	                            Determines whether a value is a finite, legal number
isNaN() 	                            Determines whether a value is an illegal number
Number() 	                            Converts an object's value to a number
parseFloat() 	                        Parses a string and returns a floating point number
parseInt() 	                            Parses a string and returns an integer
String() 	                            Converts an object's value to a string
*/

function evalEx() {
    var x = 10;
    var y = 20;
    var a = eval("x*y") + "<br>";
    var b = eval("2+2") + "<br>";
    var c = eval("x+17") + "<br>";

    var res = a + b + c;
    console.log(res);
}
evalEx();

function encodeAnddecodeUriEx() {
    var uri = "http://idevtek.com/index.html?name=w e b";
    var enc = "Encoded URI: " + encodeURI(uri);
    var dec = "Decoded URI: " + decodeURI(uri);
    var res = enc + "<br>" + dec;
    console.log(res);
}
encodeAnddecodeUriEx();

function isFiniteEx()
{
var a = isFinite(1234) + "<br>";
var b = isFinite(-1.235) + "<br>";
var c = isFinite(6-3) + "<br>";
var d = isFinite(0) + "<br>";
var e = isFinite("Hi") + "<br>";
var f = isFinite("2013/11/11") + "<br>";

var res = a + b + c + d + e + f;
console.log(res);
}
isFiniteEx();

function isNANEx() {
    console.log(isNaN(1234)); //false
    console.log(isNaN("Hello")); //true
}
isNANEx();

function numberEx() {

        var test1 = new Boolean(true);
        var test2 = new Boolean(false);
        var test3 = new Date();
        var test4 = new String("888");
        var test5 = new String("913-876");

        var n = Number(test1) + "<br>" + Number(test2) + "<br>" + Number(test3) + "<br>" + Number(test4) + "<br>" + Number(test5);
        console.log(n);
    }

numberEx();

function parseFloatEx() {

    var a = parseFloat("10.33") + "<br>";
    var b = parseFloat("34 45 66") + "<br>";
    var c = parseFloat(" 60 ") + "<br>";
    var d = parseFloat("40 years") + "<br>";
    var n = a + b + c + d;
    console.log(n);
}
parseFloatEx();

function parseIntEx() {

    var a = parseInt("10.33") + "<br>";
    var b = parseInt("34 45 66") + "<br>";
    var c = parseInt(" 60 ") + "<br>";
    var d = parseInt("40 years") + "<br>";
    var n = a + b + c + d;
    console.log(n);
}
parseIntEx();