/*
Finding HTML Elements

document.getElementById() 	        Finding an element by element id
document.getElementsByTagName() 	Finding elements by tag name
document.getElementsByClassName() 	Finding elements by class name
document.getElementsByName() 	    Finding elements by name
document.forms[]                    Finding elements by HTML element objects 

*/
//getElementById
console.log(document.getElementById("divMain").innerHTML);
//getElementsByTagName
var paragraphArray = document.getElementsByTagName('p');

for (var i = 0; i < paragraphArray.length; i++) {
   // console.log(paragraphArray[i].innerHTML);
}

//getElementsByName
var nameArray = document.getElementsByName("header");
for (var i = 0; i < nameArray.length; i++) {
    //console.log(nameArray[i].innerHTML);
}

//getElementsByClassName
var classArray = document.getElementsByClassName("active");
for (var i = 0; i < classArray.length; i++) {
   // console.log(classArray[i].innerHTML);
}

//document.forms[]
var formArray = document.forms["form1"];
for (var i = 0; i < formArray.length; i++) {
    console.log(formArray.elements[i].value);
}
console.log(document.forms["form1"]["email"].value);

