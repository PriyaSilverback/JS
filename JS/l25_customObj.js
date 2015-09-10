/*
Custom Objects

*/

//Creating Custom Objects
//1.Define and create a direct instance of an object.
//2.Use a function to define an object, then create new object instances.

//1.
var persons = new Object();
persons.name = "Peter";
persons.age = 34;

console.log(persons.name);

//2.
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.setTitle = setTitle;
    function setTitle(title) {
        this.name=title + " " + name;
    }
}

var person = new Person("Peter", "38");
person.setTitle("Mr");
console.log(person.name);
