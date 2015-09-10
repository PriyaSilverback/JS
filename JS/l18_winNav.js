
function navigatorExample()
{
    document.write("Browser CodeName: " + navigator.appCodeName +"<br/>");
    document.write("Browser Name: " + navigator.appName +"<br/>");
    document.write("Browser Version: " + navigator.appVersion +"<br/>");
    document.write("Cookies Enabled: " + navigator.cookieEnabled +"<br/>");
    document.write("Platform: " + navigator.platform +"<br/>");
    document.write("User-agent header: " + navigator.userAgent +"<br/>");
    document.write("User-agent language: " + navigator.systemLanguage +"<br/>");
}

navigatorExample();