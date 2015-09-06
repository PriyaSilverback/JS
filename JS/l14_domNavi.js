/*
HTML DOM Navigation
DOM Nodes
Node Relationships

    parentNode
    childNodes[nodenumber]
    firstChild
    lastChild
    nextSibling
    previousSibling

Navigating Between Nodes
Child Nodes and Node Values

DOM Root Nodes

    document.documentElement        - The full document
    document.body                   - The body of the document

nodeName,nodeValue,nodeType properties

HTML DOM Elements (Nodes)

document.createElement() 	Create an HTML element
document.removeChild() 	    Remove an HTML element
document.appendChild() 	    Add an HTML element
document.replaceChild() 	Replace an HTML element
*/

function childNodesValues() {
    console.log(document.getElementById("dynamic").childNodes[0].nodeValue);
}

function domRootNodes() {
    console.log(document.body.innerHTML);
}
//domRootNodes();
//childNodesValues();



/*
HTML DOM Elements (Nodes)

document.createElement() 	Create an HTML element
document.removeChild() 	    Remove an HTML element
document.appendChild() 	    Add an HTML element
document.replaceChild() 	Replace an HTML element
*/

function addNewElement() {
    var para = document.createElement("p");
    var node = document.createTextNode("This is a paragraph.");
    para.appendChild(node);

    var element = document.getElementById("divMain");
    element.appendChild(para);
}

function addNewElementBefore() {
    var para = document.createElement("p");
    var node = document.createTextNode("This is another paragraph.");
    para.appendChild(node);

    var element = document.getElementById("divMain");
    var childElement = document.getElementById("anchor");
    element.insertBefore(para, childElement);
}

function removeExistingElement() {
    var parent = document.getElementById("divMain");
    var child = document.getElementById("dynamic");
    parent.removeChild(child);
}

function replaceExistingElement() {
    var para = document.createElement("p");
    var node = document.createTextNode("Hello World.");
    para.appendChild(node);

    var parent = document.getElementById("divMain");
    var child = document.getElementById("dynamic");
    parent.replaceChild(para, child);
}