/*
Debugging in JavaScript

The old way - using alert and document.write

The new way - using built in browser debugging tools 
Popular debuugers
firebug,Q [built in debugger - firefox],Chrome Dev tools

Learn more about these
Firebug - https://getfirebug.com/javascript
Chrome Dev tools - https://developers.google.com/chrome-developer-tools/docs/javascript-debugging

Shortcut key to invoke debugger is F12
*/
function test() {

    for (var i = 0; i < 500; i++) {
        console.log(i);
    }
}

test();


