/* in JavaScript an array is a special variable which can hold more than one value at a time.
 There are 3 ways of creating arrays in Java script;
	 */
//1 Regular:
	var array1=new Array();
	array1[0]="Keepup";
	array1[1]="Resultsaresoon";
	array1[2]="Good";
	
	document.write(array1[1]);
	
//Condensed
var array2=new Array("keepup","Resultsaresoon","workmore");
document.write(array2[2]);
//Literal:
var lite=["firsrt","second","third"];
document.write(lite[0]);

//Accessing an Array Element
//access first element of strArray - index starts from 0	
	var name=array1[0];
	document.write(name);
	document.write("<br/>");
	
//Updating an element of an Array
array1[1]="Priya"; //this replaces Jacob with Mike
document.write(array1[1]);
//An array can contain different elements of different data types
var strDiffArray=new Array();
strDiffArray[0]=1; //numeric
strDiffArray[1]="John"; //string
strDiffArray[2] = true; //boolean

document.write("<br/>");
document.write(strDiffArray[2]);

//Properties of Array Objects
var length=array1.length;             // the number of elements in strArray
document.write("<br/>");
document.write(length);

//concat() 	Joins two or more arrays, and returns a copy of the joined arrays
var evenNumber = [2, 4];
var oddNumber = [1, 3, 5];
var numberArr = oddNumber.concat(evenNumber);
document.write("<br/>");
//print out the result as a string
document.write(numberArr.toString());

//indexOf()  Search the array for an element and returns its position
var indxOf=array1.indexOf("Priya");   // the index position of "Jacob"
document.write("<br/>");
document.write(indxOf);

//join() 	Joins all elements of an array into a string
var students = ["John", "Jacob", "Jordan","Jacob Junior"];
var studenCSV = students.join("-"); //specify separator, default is ,(comma)
document.write(studenCSV); 

//lastIndexOf() 	Search the array for an element, starting at the end, and returns its position
var lastIndexOf=students.lastIndexOf("Jacob"); 
document.write(lastIndexOf); 

//pop() 	Removes the last element of an array, and returns that element
students.pop();
document.write("<br/>"); //to create a line break
document.write(students.toString());

//push() 	Adds new elements to the end of an array, and returns the new length
var newLength=students.push("Martin");
document.write("<br/>"); //to create a line break
document.write(students.toString());
document.write("<br/>"); //to create a line break
document.write(newLength);

//reverse() Reverses the order of the elements in an array
var reverseStudents = students.reverse();
document.write("<br/>"); //to create a line break
document.write(reverseStudents.toString());

//sort() Sorts the elements of an array
var numArray = [25, 8, 7, 41];
numArray.sort();
document.write("<br/>"); //to create a line break
document.write(numArray.toString());
numArray.sort(sortfunction);
document.write("<br/>"); //to create a line break
document.write(numArray.toString());

function sortfunction(a, b){
    //Compare "a" and "b" in some fashion, and return -1, 0, or 1

    //return (a - b) //causes an array to be sorted numerically and ascending
    //return (b - a) //causes an array to be sorted numerically and descending
    return 0.5 - Math.random() ;//random sort
}


