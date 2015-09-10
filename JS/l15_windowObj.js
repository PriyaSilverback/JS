/*
Browser Object Model

The window object is supported by all browsers. It represent the browser's window.

All global JavaScript objects, functions, and variables automatically become members of the window object.

Global variables are properties of the window object.

Global functions are methods of the window object.

Even the document object of the HTML DOM is a property of the window object: 


    window.innerHeight  -     the inner height of the browser window
    window.innerWidth   -     the inner width of the browser window
    
    window.open()       -     open a new window
    window.close()      -     close the current window
    window.moveTo()     -     move the current window
    window.resizeTo()   -     resize the current window

    window.scrollTo()   -     Scroll the content to the horizontal position


*/

function browserWindowSize() {
    var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

    var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

    x = document.getElementById("demo");
    x.innerHTML = "Browser inner window width: " + w + ", height: " + h + ".";
}

browserWindowSize();

var wndw = null;
//Opens a new window
function openWindow() {
    wndw=window.open("http://idevtek.com", "my window", "width=780px,height=350px"); //window.open is a method, first parameter = url, second= name, 3rd = attributes width height)
}

//Opens a new Tab
function openTabbedWindow() {

    wndw = window.open("http://idevtek.com");
}

//closes opened window
function closeWindow() {
    if (wndw != null) {
        wndw.close();
    }
}

//closes current window
function closeCurrentWindow() {
        window.close();
    }
function moveWindow() {
    winMove = window.open("http://idevtek.com", "", "width=600,height=500");
    winMove.moveTo(screen.width / 2 - 300, screen.height / 2 - 250)
    winMove.focus();                                        // Assures that the new window gets focus
}

function scrollWindow()
{
    window.scrollTo(500,0);
}

function resizeWin() {
    winMove = window.open("http://idevtek.com", "", "width=600,height=500");
    winMove.resizeTo(250, 250);                           // Resizes the new window
    winMove.focus();                                     // Assures that the new window gets focus
}