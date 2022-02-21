//Using square brackets
let fruits: string[] = ["Apple", "Orange", "Banana"];

//Multi Type Array
let values: (string | number)[] = ["Apple", 2, "Orange", 3, 4, "Banana"];

//Access Array Elements
fruits[0]; // returns Apple
fruits[1]; // returns Orange
fruits[2]; // returns Banana
fruits[3]; // returns undefined

//Access Array Elements with FOR loop
for (var index in fruits) {
	console.log(fruits[index]); // output: Apple Orange Banana
}

for (var i = 0; i < fruits.length; i++) {
	console.log(fruits[i]); // output: Apple Orange Banana
}

//Multi-Dimensional Array
var mArray: number[][] = [
	[10, 20, 30],
	[50, 60, 70],
];
console.log(mArray[0][0]);
console.log(mArray[0][1]);
console.log(mArray[0][2]);
console.log();
console.log(mArray[1][0]);
console.log(mArray[1][1]);
console.log(mArray[1][2]);

//Using TypeScript ‘Spread’ operator
//The spread operator can be used to initialize arrays and objects from another array or object. It can also be used for object destructuring. It is a part of ECMAScript 6 version.

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
//Create new array from existing array
let copyArray = [...arr1];
console.log("CopiedArray: " + copyArray);
//Create new array from existing array with more elements
let newArray = [...arr1, 7, 8];
console.log("NewArray: " + newArray);
//Create array by merging two arrays
let mergedArray = [...arr1, ...arr2];
console.log("MergedArray: " + mergedArray);

//Output:
//CopiedArray: 1, 2, 3
//NewArray: 1, 2, 3, 7, 8
//MergedArray: 1, 2, 3, 4, 5, 6

//Passing an Array to a Function
let arr: string[] = ["pragati", "2022", "Java", "JavaScript"];
// Passing an Array in a function
function display(arr_values: string[]) {
	for (let i = 0; i < arr_values.length; i++) {
		console.log(arr[i]);
	}
}
// Calling an Array in a function
display(arr);

// Initializing an Array by using the Array object.
let arr3: string[] = new Array("pragati", "2022", "Java", "JavaScript");
for (var i = 0; i < arr.length; i++) {
	console.log(arr3[i]);
}
