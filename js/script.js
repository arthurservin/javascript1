////Anonymous function

// function (string) { ///inside the () is where arguments occur, string is just a place holer
//   return string.toUpperCase(); ////data transformation and return
// }; ///end of the funtion


//// cant refer to function in code since it has no name


//// NAMED FUNCTIONS

// function addTwo(num) {
//   return num += 2;
// };

////funtion should be object oriented and always return the same value if given the same value



/////CALL FUNCTION (they get hoisted to the top)
//
// addTwo(22);  ////call site, 22 is placed in the upper place holder
//
// /// wrapping in console log
//
// console.log(addTwo(1));
//
// let myNewNumber = addTwo(43);

//
// function logMyString(string) {
//   console.log(string);
// };
//
// logMyString('Im the best');
//
//
// function alertAd() {  ///is hoisted FUNCTION DECLARATION
//   alert('We have a sale!');
// };


// alertAd();  ////starts runnning the function until it gets called, which is happening here


///FUNCTION EXPRESSSION  (not hoisted)

// let confirmStuff = function(someString)  {
// let newVariable = 'cheese';
// confirm(someString)
// };
//
// console.log(newVariable); //does not operate, it only exist inside the function and is not seen

////RECURSIVE FUNCTION calls onto itself

// let i = 0
// function iCallMyself() {
//   console.log(i);
//   i++;
//   if(i < 10) iCallMyself();
// };


// iCallMyself

/// ARROW FUNCTIONS

// (logFunction, alertFunction) => {  /// fat arrow means theres no function keyword
//   logFunction('hello world');
//   alertFunction('Goodbye, friends!');
// };
//
// // ONLY 1 arguments
//
// string => {
//   console.log(string);
// };

/// espressed FUNCTION

// let logString = string => {
//   console.log(string);
// };
//
// logString('Hello Cats')
//
//
//
// string => (string.toUpperCase()); //// only works when one thing needs to be done



//// PRACTICE AS TAKEHOME

// function dogAge(num) {
//   return num * 7;
// };
//
// alert(dogAge(3));

/////////////  PART 2


//
// function yearsLeft(death, now) {
//     return death - now;
// };
//
// deathClock = yearsLeft(80, 32);
//
// function lifeQtips(deathClock, yearlyTips) {
//     return deathClock * yearlyTips;
// };
//
// allTips = lifeQtips(deathClock,1095);
//
// alert(`You will need ${allTips} to last you until you are ${80}`);


//

///////////////  METHODS
// associated with an object, the log in console.log is a method (left is object, right is method)
// all methods are funtions but not all funtions are methods


"anything".toUpperCase();  ///is only upper casing when the "anything appears"










////
