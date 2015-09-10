/*
A cookie is a text file stored in the browser which contains some data such as name value pairs.
name=value
'url=yahoo';expires= Tue,26 Nov 2013 20:00:00 UTC;path=/'
After the expiry time, the domain and its value is sent to
As soon as a browser requests a page from a server to which the cookies from your browser has to be sent,
 the cookies are added to the http header. 
Server side can read the programs that you have write to view the page you requested or you want the links to be in some color.
ookie, the latter which is not to be confused with the literal definition), 
A cookie is a small piece of data sent from a website and stored in a user's web browser while the user is browsing that website.
 Every time the user loads the website,
 the browser sends the cookie back to the server to notify the website of the user's previous activity.[1]
*/
function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}