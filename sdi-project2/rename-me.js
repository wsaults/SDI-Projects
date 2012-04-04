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
	canCleanWindSheild = undefined,
	isWindShieldDirty = true,
	isThereTraffic = true,
	theOverseersName = "'the unseen one'",
	receptionistName = 'Ol\' McDonald',
	manaPoints = 88;
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
// Takes two arguments
var checkIfYouCanWashYourWindSheild = function (hasWand, hasCleaningSolution) {
	// Compares the two arguments
	if (hasWand && hasCleaningSolution) {
			// If true output something
			if (luck > 0) {
				// Clean it.
				console.log("Thank goodness there is a wand and cleaning solution here! You scrub away at your dirty windshield until it's clean.");
				console.log("You hop in your car and realize that you can actually see the road. Hurray!");
				canCleanWindSheild = true;
				isWindShieldDirty = false;
			} else {
				// It stays dirty.
				console.log("Well this is embarrassing. Due to your lousy luck you suffer from short-term memory loss and forget about cleaning the windshield.");
				console.log("You hop in your car and strain to see the road. Bummer dude!");
				canCleanWindSheild = false;
			}
		// If false output something else
		} else {
			// It stays dirty.
			console.log("Well looks like someone didn't due their job. As a result you don't have what you need to clean your windshield.");
			console.log("You hop in your car and strain to see the road. Bummer dude!");
			canCleanWindSheild = false;
		}
	// Return boolean
	return canCleanWindSheild;
};



// Number Function Declaration
// takes one number argument
var refillManaPoints = function (m) {
	// stores argument in local variable
	var mana = m;
	// begin while loop
	// while true
	while (mana < 100) {
		// do some math and output
		console.log("Your mana points were " + mana + " but now they are " + ++mana + ".");
		// continue loop
	}
	
	// when false return number
	return mana;
};


// String Function Declaration

// Array Function Declaration



// Procedure Call

// Boolean Function Call

// Number Function Call

// String Function Call

// Array Function Call

// Combine return values

// Output return values