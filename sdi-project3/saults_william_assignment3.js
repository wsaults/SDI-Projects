// Author: William Saults
// Date: 04/14/12
// Assignment: Deliverable 3
// Description: A student in class



var student = function (firstName, lastName, age, bool, array) {

	var studentClasses = array
	var addClass = function (newClass) {
		studentClasses.push(newClass);
	};
	var getClasses = function () {
		for (var i = 0; i < studentClasses.length; i++) {
			console.log("Class " + i + " is " + studentClasses[i]);
		}
	};
	var shoutName = function () {
		console.log("MY NAME IS " + firstName.toUpperCase() + "!!!!");
	};
	
	return {
	// Properties: Boolean, Array, Number, String, Object
		"firstName": firstName,
		"lastName": lastName,
		"age": age,
		"isMale": bool,
		"classes": studentClasses,
		"getClasses":getClasses,
		"shoutName":shoutName,
		"addClass":addClass
	};
};

// Global Variables
var luck = 0,
	temperature = 75
;

// The story begins
console.log("Hello everyone welcome back to class.");
console.log("It's a great day and the temperature is " + temperature + " degrees. Now lets get started!");
console.log("Oh look a new student!");

// Arguments: Boolean, Array, Number, String, Object
// Returned values
var newStudent = student ("Harley", "Quinn", 89, false, ["English","Spanish","History","Objective-C","JavaScript"]);


// Conditional
if(newStudent.firstName = "Harley") {
	console.log("Hello " + newStudent.firstName + ", welcome to class!");
	
	console.log("Shout your name for the class please.");
	newStudent.shoutName();
	
	console.log("Gooood, that's good. Now please state your age.");
	
	console.log("I am " + newStudent.age + " years old.");

	
	// Nested Conditional
	if(newStudent.age > 18) {
		console.log("What!?! you're " + newStudent.age + " years old! Arn't you a little old for this class?");
		// Nested Loop
		// While Loop
		// Math
		while (newStudent.age > 18) {
			newStudent.age--;
		}
		
		console.log("The instructor gives " + newStudent.firstName + " a peculiar potion. POOF!!!");
		console.log("There your age is " + newStudent.age + ".");
		console.log("Now you'll fit right in.");
	} else {
		console.log("Excellent, " + newStudent.age + " is a perfect age for this class.");
	}
	
} else {
	console.log("Who are you? You arn't the new student!");
}

console.log("So " + newStudent.firstName + " what classes are you in?");
newStudent.getClasses();

console.log("Oh well lets add Geometry to that!");
newStudent.addClass("Geometry");
console.log("Now your classes are:");
newStudent.getClasses();
