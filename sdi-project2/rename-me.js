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
	theOverseersName = "'The unseen one'",
	receptionistName = 'Ol\' McDonald',
	manaPoints = 88,
	startingChannel = 0,
	flipingThroughChannels = ['The Brady Bunch','The Matrix','A local news channel','Mr. T trying to sell something','An oxyclean commercial','Entertainment Tonight']
;
	
// Procedure Declaration
// Takes an argument
var checkIfBagsArePacked = function (areYouPackedBool) {
	// argument conditional
	if (areYouPackedBool) {
		// If true output something
		console.log(theOverseersName,"is impressed that you've taken the initiative to pack your bags " + 
		"\nand has bestowed +1 luck upon your voyage to come!");
	luck++;
	} else {
		// if false output something else
		console.log(theOverseersName,"is not too happy with you. You forgot to pack your bags! " + 
		"Bummer and \n",theOverseersName,"reduces your luck by 1");
	luck--;
	}
	// return
	return;
};

// Boolean Function Declaration
// Takes two arguments
var checkIfYouCanWashYourWindSheild = function (hasWandBool, hasCleaningSolutionBool) {
	// Compares the two arguments
	if (hasWandBool && hasCleaningSolutionBool) {
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
var refillManaPoints = function (manaNum) {
	// stores argument in local variable
	var mana = num;
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
// takes two string arguments
var getTheOverSeersBoast = function (nameOneString, nameTwoString) {
	// stores arguments in local variables
	var nameOne = nameOneString,
		nameTwo = nameTwoString,
		// string concatenation
		combineTheNames = "Thinking about your grand adventure" + nameOne + "admires his own cleverness " + 
		"\nfor naming the hotel receptionist \""+ nameTwo + "\" before you were even born."
	;
	
	// return string
	return combineTheNames;
};

// Array Function Declaration
// takes a number argument and an array argument
var flipThroughTheChannels = function (num, array) {
	// stores arguments in localvariables
	var channel = num,
		channelsToFlipThrough = array
	;
	
	// start for loop
	
	for (var i = 0; i < (channelsToFlipThrough.length)-1; i++) {
		// while true do some math and output
		console.log("You turn to channel " + i+2 + " and see that " + channelsToFlipThrough[i] + " is playing.");
	}
	
	// when false return array
	return channelsToFlipThrough;
};







// Procedure Call

// Boolean Function Call

// Number Function Call

// String Function Call

// Array Function Call
//flipingThroughChannels = flipThroughTheChannels(0,flipingThroughChannels);

// Combine return values

// Output return values