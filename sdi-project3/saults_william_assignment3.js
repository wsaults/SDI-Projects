// Author: William Saults
// Date: 04/14/12
// Assignment: Deliverable 3
// Description: A student in class



var student = function (firstName, lastName, age, bool, array,json) {

	var studentClasses = array
	var addClass = function (newClass) {
		studentClasses.push(newClass);
	};
	var listClasses = function () {
		for (var i = 0; i < studentClasses.length; i++) {
			console.log("Class " + i + " is " + studentClasses[i]);
		}
	};
	var getFirstName = function () {
		return firstName
	};
	return {
	// Properties: Boolean, Array, Number, String, Object
		"getFirstName": getFirstName,
		"lastName": lastName,
		"age": age,
		"isMale": bool,
		"classes": studentClasses,
		"listClasses":listClasses,
		"addClass":addClass,
		"info":json
	};
};

// Global Variables
var yourAge = 89,
	yourClasses = ["English","Spanish","History","Objective-C","JavaScript"],
	temperature = 75,
	studentInfo = {
	
		"lunchFood": [
			{
				"Description": "Banana",
				"Quantity": 2
			},
			{
				"Description": "Sandwich",
				"Quantity": 1
			},
			{
				"Description": "Muffin",
				"Quantity": 1
			}
		]
	}
;

// The story begins
console.log("Hello everyone welcome back to class.");
console.log("It's a great day and the temperature is " + temperature + " degrees. Now lets get started!");
console.log("Oh look a new student!");

// Arguments: Boolean, Array, Number, String, Object
// Returned values
var newStudent = student ("Harley", "Quinn", yourAge, false, yourClasses, studentInfo.lunchFood);
var name = newStudent.getFirstName();

// Conditional
if(newStudent.firstName = "Harley") {
	console.log("Hello " + name + ", welcome to class!");
	
	console.log("Shout your name for the class please.");
	
	console.log("MY NAME IS " + name.toUpperCase() + "!!!!");
	
	console.log("Gooood, that's good. Now please state your age.");
	
	console.log("I am " + newStudent.age + " years old.");

	
	// Nested Conditional
	if(newStudent.age > 18) {
		console.log("What!?! You're " + newStudent.age + " years old! Aren't you a little old for this class?");
		// Nested Loop
		// While Loop
		// Math
		while (newStudent.age > 18) {
			newStudent.age--;
		}
		
		console.log("The instructor gives " + name + " a peculiar potion. POOF!!!");
		console.log("There your age is " + newStudent.age + ".");
		console.log("Now you'll fit right in.");
	} else {
		console.log("Excellent, " + newStudent.age + " is a perfect age for this class.");
	}
	
} else {
	console.log("Who are you? You arn't the new student!");
}

console.log("So " + name + " what classes are you in?");
newStudent.listClasses();

console.log("Oh well lets add Geometry to that!");
newStudent.addClass("Geometry");
console.log("Now your classes are:");
newStudent.listClasses();

console.log("Okay, now we are set. Lets continue with class!");
console.log("Oh, one last thing!");
console.log("Lets see your lunch.");
console.log(newStudent.info);
console.log("Now lets see your lunch in string format.");
var string = JSON.stringify(newStudent.info);
console.log(string);

console.log("Very good! Now lets cancel class today. Go make apps!");

