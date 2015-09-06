document.write("Hello World");
//variables are like containers to hold values
/*Variables name must begin with a letter, $, and_
Variables names are case sensitive
camelCasing is recommended
JavaScript have different types of data.
if a variable stored in "" or '', it is called a string
if a variable is stored without quotes, t is called a numeric data and can be a whole or a eciman number*/

/*Variables and Data Types:
We declare javascript variables with keyword var
*/

//Numeric Data Type:
var pi = 3.14; // a decimal Number
var evenNumber = 2; // a whole number

var pi;
pi = 3.14;
document.writeln("value of pi" + pi);

//Arithmatic Operatios:
var a = 10;
var b = 20;
var c = a+b;
document.writeln(c);


//String:
var name = "Priya";
var age = 30, height = 5.4, job = "Developer";

//Boolean:
var result = true;


// undefined data type: a variable declared without a value and will have a value.
var salary;
document.writeLn("salary" + salary);

//re-declaring a javascript variable retains its value:
var percentage = 100;
var percentage;
//percentage will keep its value as 100;

//javascript has dynamic types: means same varaible can be used as diferent types
var general = 5;// numeric data type
general = "some name"; //String data type
genera = true; // boolean
