/*Conditional Statements in JavaScript
1. If:
if(condition)
{
	execute code if condition is true
}

2. If else:
if(condition)
{
	execute code if condition is true
} else {
	execute the code within this braces is conition is false.
}

3. if else if else
if(conditoon1)
{
	execute code if condition1 is true
} else if(condition2) {
	execute code if condition2 is true
} else {
	this line of code to be excuted if conditon1 and 2 are not true
}

4. Switch: Switch can ve used to select any of nany blocks of code to be excueted.
swicth(n){
	case1:
	execute code block1
	break;
	case2:
	execute code block2
	break;
	defaut;
	code to be executed if n is different from case1 and 2
}

*/

// if else if else
var marks = 100;
var marksobtained = 80;

if (marksobtained>=80){
	document.write("well Done");
} else if(marksobtained<80){
	document.write("Work Hard");
} else {
	document.write("concentrate");
}

// Switch:
var marksIn = 80;
switch(marksIn){ //Switch ON
	case 80:
	document.write("well done");
	break;
	
	case 70:
	document.write("work hard"); 
	break;
	
	default:  	 // if none of the above cases are true then it executes defaut
	document.write("concentrate");
	

// switch: version2 of switch
switch(marksIn) {
	case 80:
	case 75:
	document.write("well done ");
	break;
	
	case 70:
	documemt.write("work hard");
	break;
	
	default:
	document.write("concnetrate");
}
}
