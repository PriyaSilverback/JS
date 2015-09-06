/*
    Examples of HTML events:

    When a user clicks the mouse
    When a web page has loaded
    When an image has been loaded
    When the mouse moves over an element
    When an input field is changed
    When an HTML form is submitted
    When a user strokes a key

   HTML Event Attributes

  
   onload/onunload                  The onload and onunload events are triggered when the user enters or leaves the page.
                                    The onload event can be used to check the visitor's browser type and browser version, and 
                                    load the proper version of the web page based on the information.
   
   onchange                         The onchange event are often used in combination with validation of input fields

   onmouseover/onmouseout           The onmouseover and onmouseout events can be used to trigger a function when the user mouses over, 
                                    or out of, an HTML element.

   onclick/onmousedown/onmouseup    The onmousedown, onmouseup, and onclick events are all parts of a mouse-click. 
                                    First when a mouse-button is clicked, the onmousedown event is triggered, then, 
                                    when the mouse-button is released, the onmouseup event is triggered, 
                                    finally, when the mouse-click is completed, the onclick event is triggered

*/

var date = new Date();
function GetDate() {
    console.log(date);
}

function ShowSalary() {
    console.log("$1000");
}

function showEmail(ctrl) {
    console.log(ctrl.value);
}
function showName(ctrl) {
    console.log(ctrl.value);
}
/* Mouse Over and Mouse Out */
function mouseOver(ctrl) {
    ctrl.innerHTML = "Hey There!";
}

function mouseOut(ctrl) {
    ctrl.innerHTML = "Mouse Over Example";
}

function mouseDown(ctrl)
{
ctrl.style.backgroundColor="green";
ctrl.innerHTML="Got You";
}

function mouseUp(ctrl)
{
ctrl.style.backgroundColor="#0000FF";//rgb
ctrl.innerHTML="Thank You";
}
/* Mouse Events End */

/*On Focus*/
function setBGColor(ctrl) {
    ctrl.style.backgroundColor = "skyblue";
    //background-color
    //backgroundColor
}
document.getElementById("btnDynamic").onclick = function () { GetDate(); }



