// Author: William Saults
// Date: 04/03/12
// Assignment: Deliverable 2
// Description: My Vacation - Retold.

// Variables
var areYourBagsPacked = false,
	doYouNeedGas = true,
	luck = 0,
	isThereAWand = true,
	isThereCleaningSolution = true,
	isThereTraffic = true,
	theOverseersName = "'the unseen one'",
	receptionistName = 'Ol\' McDonald',
	isWindShieldDirty = true
;
	
	
// Procedure Declaration
// Takes an argument
var checkIfBagsArePacked = function (areYouPacked) {
	// argument conditional
	if (areYouPacked) {
		// If true output something
		console.log(theOverseersName.replace("t","T"),"is impressed that you've taken the initiative to pack your bags " + 
		"\nand has bestowed +1 luck upon your voyage to come!");
	luck++;
	} else {
		// if false output something else
		console.log(theOverseersName.replace("t","T"),"is not too happy with you. You forgot to pack your bags! " + 
		"Bummer and \n",theOverseersName.replace("t","T"),"reduces your luck by 1");
	luck--;
	}
	// return
	return;
};


// Boolean Function Declaration


// Number Function Declaration

// String Function Declaration

// Array Function Declaration



// Procedure Call

// Boolean Function Call

// Number Function Call

// String Function Call

// Array Function Call

// Combine return values

// Output return values