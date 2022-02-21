var account = {
    name: "pragati",
    balance: 10
};
console.log(account);
var person = {
    firstName: "Pragati",
    lastName: "Sanepara"
};
//access the object values
console.log(person.firstName);
console.log(person.lastName);
var personDetails = {
    firstName: "Pragati",
    lastName: "Sanepara",
    sayHello: function () { }
};
personDetails.sayHello = function () {
    console.log("hello " + personDetails.firstName);
};
personDetails.sayHello();
//Objects as function parameters
var human = {
    firstname: "Pragati",
    lastname: "Sanepara"
};
var invokeperson = function (obj) {
    console.log("first name :" + obj.firstname);
    console.log("last name :" + obj.lastname);
};
invokeperson(human);
//Anonymous Object
var invokeperson = function (obj) {
    console.log("first name :" + obj.firstname);
    console.log("last name :" + obj.lastname);
};
invokeperson({ firstname: "Pragati", lastname: "Sanepara" });
