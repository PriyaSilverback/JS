
function browserScreenSize() {
    //window.screen
    
    document.write("Total width/height: ");
    document.write(screen.width + "*" + screen.height);

    document.write("<br>");
    
    document.write("Available width/height: ");
    document.write(screen.availWidth + "*" + screen.availHeight);
    document.write("<br>");
    
    document.write("Color depth: ");
    document.write(screen.colorDepth);
    document.write("<br>");
    
    document.write("Color resolution: ");
    document.write(screen.pixelDepth);
    
}

browserScreenSize();
