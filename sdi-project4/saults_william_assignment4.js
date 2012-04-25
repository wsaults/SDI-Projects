// Author: William Saults
// Date: 04/25/12
// Assignment: Deliverable 4
// Description: My JS Lib

/* String
1    Does a string follow a 123-456-7890 pattern like a phone number?
2    Does a string follow an aaa@bbb.ccc pattern like an email address?
3    Is the string a URL? (Does it start with http: or https:?)
4    Title-case a string (split into words, then uppercase the first letter of each word)
5*    Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".

*/

/* Number
6*    Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10 - params: (decimal, #ofPlaces) result = num.toFixed(2);
7    Fuzzy-match a number: is the number above or below a number within a certain percent?
8    Find the number of hours or days difference between two dates.
9    Given a string version of a number such as "42", return the value as an actual Number, such as 42.
*/

/* Array
10*    Find the smallest value in an array that is greater than a given number
11    Find the total value of just the numbers in an array, even if some of the items are not numbers.
12    Given an array of objects and the name of a key, return the array sorted by the value of that key in each of the objects: "a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].

*/

// Suggestions:
// 13 UPC code testing
// 14 Word scramble
// 15 Character name generator params: (#ofNames from 1 - 3, male/female, race)
// 16 Password generator params: (#ofCharacters, strengthLV 1 - 3)

// My JS Lib
var willsLib = function () {
	// Private methods
	
/* 	4    Title-case a string (split into words, then uppercase the first letter of each word) */
/* ================================================================================================ */
	var titleCase = function (str) {
		var result = "",
			array = str.split(' ')
		;
/* 		console.log(array); */

		for (var i = 0; i < array.length; i++) {
			array[i] = array[i].replace(array[i].charAt(0), array[i].charAt(0).toUpperCase());
			result += array[i] + " ";
		}
		
		return result;
	}
	
/* 	5    Given a string that is a list of things separated by a given string, as well as another string separator, 
		 return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c". */
/* ================================================================================================ */
	var findAndReplaceDelimiter = function (str, delimiterStr, toDelimiterStr) {
		var re = new RegExp(delimiterStr,'g');
		var result = str.replace(re,toDelimiterStr);
		return result;
	};
	
/*  6 	Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10 
		- params: (decimal, #ofPlaces) result = num.toFixed(2); */
/* ================================================================================================ */
	var numberFormater = function (num, numberOfPlaces) {
		var result = num.toFixed(numberOfPlaces);
		return result;
	}
	
/* 	10    Find the smallest value in an array that is greater than a given number params: array, numberToFind */
/* ================================================================================================ */
	var justALittleGreater = function (numArray, num) {
	var result = 0,
		difference = 0,
		diffArray = []
	;
	
	// How about a difference array where i grab the difference of each i - num and take the lowest positive number?
	for (var i = 0; i < numArray.length; i++) {
		difference += numArray[i];
		diffArray.push(numArray[i] - num);
/* 		console.log("DiffArray: " + diffArray[i]); */
	}
	
	for (var j = 0; j < diffArray.length; j++) {
		if (diffArray[j] > 0 && difference > diffArray[j]) {
			difference = diffArray[j];
			result = numArray[j];
		}
	}
/* 	console.log("closest difference: " + difference); */
	return result;
	};
	
	
	
	// Public methods & properties
	return {
		"titleCase"				  : titleCase,
		"findAndReplaceDelimiter" : findAndReplaceDelimiter,
		"numberFormater"  		  : numberFormater,
		"justALittleGreater"	  : justALittleGreater	
	};
};


/*
is 3 greater than 20 
no do nothing
is 10 greater than 20
no do nothing
is 55 greater than 20
yes result = 55
is 36 greater than 20 but less than 55
yes result = 36
*/


var lib = willsLib();

// 4
var titleCasedStr = lib.titleCase("99 mobile apps on the wall, 99 mobile apps. . .");
console.log(titleCasedStr);

/*
// 5
var findAndReplace = lib.findAndReplaceDelimiter("a,b,c", "," , "/");
console.log(findAndReplace);
*/

/*
// 6
var formattedNumber = lib.numberFormater(2.1, 2);
console.log(formattedNumber);
*/

/*
// 10
var numFinder = lib.justALittleGreater([3,10,55,36,19,21,22,1,9,77,99,54,33,7],20)
console.log(numFinder + " Is the closest greater number.");
*/
