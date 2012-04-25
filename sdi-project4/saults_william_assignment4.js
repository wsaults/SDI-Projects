// Author: William Saults
// Date: 04/25/12
// Assignment: Deliverable 4
// Description: My JS Lib

/* String
1    Does a string follow a 123-456-7890 pattern like a phone number?
2    Does a string follow an aaa@bbb.ccc pattern like an email address?
3*    Is the string a URL? (Does it start with http: or https:?)
4*    Title-case a string (split into words, then uppercase the first letter of each word)
5*    Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: "a,b,c" + "," + "/" → "a/b/c".

*/

/* Number
6*    Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10 - params: (decimal, #ofPlaces) result = num.toFixed(2);
7    Fuzzy-match a number: is the number above or below a number within a certain percent?
8    Find the number of hours or days difference between two dates.
9*    Given a string version of a number such as "42", return the value as an actual Number, such as 42.
*/

/* Array
10*    Find the smallest value in an array that is greater than a given number
11*    Find the total value of just the numbers in an array, even if some of the items are not numbers.
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
	
	
/* 	3    Is the string a URL? (Does it start with http: or https:?) */
/* ================================================================================================ */
	var isURL = function (str) {
	var result;
	
	if (str.substring(0,5) === "http:") {
		result = true;
	} else if (str.substring(0,6) === "https:") {
		result = true;	
	} else {
		result = false;
	}
	
	return result;
	}
	
	
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
	
/* 	8    Find the number of hours or days difference between two dates. */
	var findDate = function(d1, d2, daysOrHours) {
		var result = 0,
			days = 24*60*60*1000, // hours*minutes*seconds*milliseconds	
			hours  = 60*60*1000 	// minutes*seconds*milliseconds
		;
		
		switch(daysOrHours)
		{
			case 2:
			  // return hours
			  result = Math.abs((d1.getTime() - d2.getTime())/(hours));
			  break;
			  
			default:
			  // return days
			  result = Math.abs((d1.getTime() - d2.getTime())/(days));
		}
		
		return result;
	}
	
	
/* 	9    Given a string version of a number such as "42", return the value as an actual Number, such as 42. */
/* ================================================================================================ */
	var strToNum = function (str) {
	var result = parseInt(str);
	
	return result;
	}

	// I am here!
	// parseInt!

	
/* 	10    Find the smallest value in an array that is greater than a given number params: array, numberToFind */
/* ================================================================================================ */
	var justALittleGreater = function (numArray, num) {
	var result = 0,
		difference = 0,
		diffArray = []
	;
	
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
	
	
/* 	11    Find the total value of just the numbers in an array, even if some of the items are not numbers. */
/* ================================================================================================ */
	var totalArrayRecall = function (array) {
		var result = 0;
		
		for (var i = 0; i < array.length; i++) {
			if (!isNaN(array[i])) {
/* 				console.log(array[i]); */
				result += parseInt(array[i]);
			}	
		}
		return result;
	}
	
	
	
	// Public methods & properties
	return {
		"isURL"					  : isURL,
		"titleCase"				  : titleCase,
		"findAndReplaceDelimiter" : findAndReplaceDelimiter,
		"numberFormater"  		  : numberFormater,
		"findDate"				  : findDate,
		"strToNum"				  : strToNum,	
		"justALittleGreater"	  : justALittleGreater,
		"totalArrayRecall"		  :	totalArrayRecall
	};
};

var lib = willsLib();

/*
// 3
var url = "http://www.facebook.com",
	urlSecure = "https://www.chase.com",
	notURL = "www.someThingUnknown.com" // Probably exists. I'm not gonna look, lol.
;
var bool = lib.isURL(url);
console.log("Is it a URL? " + bool);
*/

/*
// 4
var titleCasedStr = lib.titleCase("99 mobile apps on the wall, 99 mobile apps. . .");
console.log(titleCasedStr);
*/

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

// 8
var date1 = new Date(1987,02,18);
var date2 = new Date();
// Pass in 1 for days and 2 for hours
var difference = lib.findDate(date1,date2,1);
console.log("The difference is: " + lib.numberFormater(difference, 2));

/*
// 9
var str = "88";
var strToNum = lib.strToNum(str);
console.log(str + 1);
console.log(strToNum + 1);
*/

/*
// 10
var numFinder = lib.justALittleGreater([3,10,55,36,19,21,22,1,9,77,99,54,33,7],20)
console.log(numFinder + " Is the closest greater number.");
*/

/*
// 11
var array = [3,10,55,36,"4",19,21,22,"5",1,9,77,99,"d",54,33,7];
var total = lib.totalArrayRecall(array);
console.log("The total is: " + total);
*/
