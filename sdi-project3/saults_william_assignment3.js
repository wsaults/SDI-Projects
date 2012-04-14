// Author: William Saults
// Date: 04/14/12
// Assignment: Deliverable 3
// Description: A student in class



var student = function (firstName, lastName, age, bool) {
	
	return {
	// Properties: Boolean, Array, Number, String, Object
		"firstName": firstName,
		"lastName": lastName,
		"age": age,
		"isMale": bool
	};
};

// Global Variables
var luck = 0,
	temperature = 75
;

// Arguments: Boolean, Array, Number, String, Object
var newStudent = student ("Harley", "Quinn", 22, false);


// Conditional
if(newStudent.firstName = "Harley") {
	console.log("Hello " + newStudent.firstName + ", welcome to class!");
	
	// Nested Conditional
	if(newStudent.age > 18) {
		console.log("What!?! you're " + newStudent.age + " years old! Arn't you a little old for this class?\n" +
		"Oh well, have a seat.");
	} else {
		console.log("Excellent, " + newStudent.age + " is a perfect age for this class.");
	}
	
} else {
	console.log("Who are you? You arn't the new student!");
}


