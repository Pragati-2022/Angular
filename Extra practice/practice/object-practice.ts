const account: {
	name: string;
	balance: number;
	status?: string; // if we don't to assign value so we put ? so that it take by default
	// (property) status?: string | undefined
} = {
	name: "pragati",
	balance: 10,
};
console.log(account);

var person = {
	firstName: "Pragati",
	lastName: "Sanepara",
};
//access the object values
console.log(person.firstName);
console.log(person.lastName);

var personDetails = {
	firstName: "Pragati",
	lastName: "Sanepara",
	sayHello: function () {}, //Type template
};
personDetails.sayHello = function () {
	console.log("hello " + personDetails.firstName);
};
personDetails.sayHello();

//Objects as function parameters
var human = {
	firstname: "Pragati",
	lastname: "Sanepara",
};
var invokeperson = function (obj: { firstname: string; lastname: string }) {
	console.log("first name :" + obj.firstname);
	console.log("last name :" + obj.lastname);
};
invokeperson(human);

//Anonymous Object
var invokeperson = function (obj: { firstname: string; lastname: string }) {
	console.log("first name :" + obj.firstname);
	console.log("last name :" + obj.lastname);
};
invokeperson({ firstname: "Pragati", lastname: "Sanepara" });
