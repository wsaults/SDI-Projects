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
	namesCombined = "",
	manaPoints = 88,
	startingChannel = 0,
	theChannels = ['The Brady Bunch',' The Matrix',' A local news channel',' Mr. T trying to sell something',' An oxyclean commercial',' Entertainment Tonight'],
	output = "";
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
			var canCleanWindSheild;
			// If true output something
			if (luck > 0) {
				// Clean it.
				console.log("Thank goodness there is a wand and cleaning solution here! You scrub away at your dirty windshield until it's clean.");
				console.log("You hop in your car and realize that you can actually see the road. Hurray!");
				canCleanWindSheild = true;
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
	return !canCleanWindSheild;
};

// Number Function Declaration
// takes one number argument
var refillManaPoints = function (manaNum) {
	// stores argument in local variable
	var mana = manaNum;
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
		combineTheNames = "Thinking about your grand adventure " + nameOne + " admires his own cleverness " + 
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



// Vacation begins.
console.log("\nIt's time for vacation! You have an epic journey ahead of you, lets get started!");

console.log("You've just awoke from an amazing slumber and you realize that you've overslept, oh no!");

// Procedure Call
checkIfBagsArePacked(areYourBagsPacked);

console.log("It's time to hit the road.");


console.log("Checking your fuel meter you realize that you need gas. \nSo you stop to fill up.");

console.log("You swipe your card at the pump and fill your gas tank.");
doYouNeedGas = false;
console.log("Ugh! What's that on your windshield??!! You should really clean that nasty thing!");
		
// Boolean Function Call
isWindShieldDirty = checkIfYouCanWashYourWindSheild(isThereAWand,isThereCleaningSolution);

console.log("You see a mana refill station and decide to top off your mana points before arriving at the hotel.");

// Number Function Call
manaPoints = refillManaPoints(manaPoints);

// String Function Call
namesCombined = getTheOverSeersBoast(theOverseersName,receptionistName);

// Check-in at the hotel.
console.log("You've arrive at the hotel and walk to the reception counter");

// Check the luck value
if (luck > 0) {
	console.log("The receptionist recognized you, calls you by name and hands you your room key. Awesome sauce!");
	console.log("You politely thank the receptionist by his name, \"" + receptionistName + "\" which is clearly printed on his name tag.");
} else {
	console.log("Due to your poor luck. . .");
	console.log("Nobody is at the receptionist counter to greet you. In fact the place looks rather barren.");
	console.log("You ding the reception bell for nearly an hour before someone arrives to greet you.");
	console.log("With all your pent-up rage you explode your anger onto the receptionist, whos name is \"" + 
	receptionistName, + "\" \nand let him know exactly how frustrated you are with the poor service of this hotel.");
	
	console.log("Hearing your tirade a manager appears from a sudden poof of smoke.");
	console.log("Dressed in a Genie like attire and a name tag that says 'Property of Aladdin' the manager refunds the cost of your room.");
	if (isWindShieldDirty) {
		console.log("The manager cleans your windshield for you");
		isWindShieldDirty = false;
		console.log("and tops off your gas tank. Yay!")
		if (luck < 0) {
			console.log("The manager also hands you your lost iPhone. It looks as good as new!");
		} else {
			console.log("The manager hands you a brand new iPad!");
		}
	} else {
		console.log("The manager tops off your gas tank.")
		if (luck < 0) {
			console.log("The manager also hands you your lost iPhone. It looks as good as new!");
		} else {
			console.log("The manager hands you a brand new iPad!");
		}
	}
}

console.log("After leaving the front desk and settling into your room you decide to flip on the television.");

// Array Function Call
theChannels = flipThroughTheChannels(0,theChannels);

console.log("Feeling the heavy drain of a busy day your eyelids shut and you drift into a deep sleep.\n\n");

// Combine return values
output = "Trip Summary:\n"
output += "Is the wind shield dirty? ";
output += isWindShieldDirty ? "Yes it is! \n" : "No, it's nice and clean. \n";
output += "Your total mana points equals: " + manaPoints + ".";
output += "\n" + namesCombined;
output += "\nYou flipped through the channels and saw that " + theChannels + " was on TV.";

// Output return values
console.log(output);

