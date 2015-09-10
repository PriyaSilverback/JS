/*
The window.location object can be used to get the current page address (URL) and to redirect the browser to a new page.
The window.location object can be written without the window prefix.



    location.hostname returns the domain name of the web host
    location.pathname returns the path and filename of the current page
    location.port returns the port of the web host (80 or 443)
    location.protocol returns the web protocol used (http:// or https://)
    location.search returns the querystring

*/

function locationExample() {

    console.log(location.hostname);
    console.log(location.pathname);
    console.log(location.port);
    console.log(location.protocol);
    console.log(location.search);

   
}

function redirect() {
    location.href = "http://idevtek.com";
}

locationExample();