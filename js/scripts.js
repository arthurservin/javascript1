//let bestNumber = true;
//let isTrue = true;

//console.log(bestNumber && isTrue);

//console.log(bestNumber && isTrue); //asking if both are true, if either are
// false, its all considered false, beacause the isTrue = false that the whole
//is false, if it was true, it would be true, the number is always true

// console.log(bestNumber || isTrue);  evaluates if either one is true, the
//whole becomes true, if anything in the strand is true, it will stop processing and become true

//console.log(!isTrue); // always confirms what the opposite of what you are looking at




//let num = 11;

//let string = '11';

//console.log(num == string); //because their value is the same but their
//type is different, it still responds or logs as true

//console.log(num === string); // a strict equality requires value and types to be the same,
//typically want to use a strict equal instead



///my attempt at in class practice

//var anyString = "";
//var new String(anyString);
//console.log(anyString === anyString)




///actual in class practice (on phone)

//const prim = "my string";
//const objectString = newString('myString');


///Modulus
//console.log(5 % 2); // % indicates what the remainder is, logs out 1



//inc and dec
//let start = 1; // what the numerical value is, adds it from the start

//....after some logic

//start++;

//console.log(start); ///starts on 2, subtracts 1 if -- is after start


//console.log(start);


//let nonNumber = "cheese"; ///cheese is a non number

//console.log(parseInt(nonNumber));  //telling you tried to attempt on a non-number  (NaN),
//parseInt only operates on #s

//console.log(isNaN(nonNumber)); ///checking if not a number, this would be true

//console.log(!isNaN(nonNumber)); ///checking if it is a number, this would be false (cheese)

//let fifty = "50";

//console.log(parseInt(fifty)); // changes the word fifty into an actual #


//let nonString = 50000;

//console.log(nonString.toString()); //changes nonString type to a string type

//console.log(nonString += 20); // nonString = nonString + 20, when on the console log it changes the nonString
// nonString += 20; just adds the value to the nonString, changes the value from here on


//let stringNum = "50000"; // the "" makes it a string

//console.log(stringNum += 20); //this just adds the value to the end of the string = 5000020


// 2nd in class practice (my attempt)

//let numValue = prompt('What is the number value' , "10");

//let numValue2 = prompt('What is the second number value' , "10");

//let ten = "10";

//console.log(parseInt(ten));

//let numResult = numValue + numValue2

//alert(`${numResult}`);


///actual

//let numValue1 = parseInt(prompt('What is the number value' , "10")); ///prompt always gives a string

//let numValue2 = parseInt(prompt('What is the second number value' , "10"));


//alert(numValue1 + numValue2);


///if they dont give a valid number (select "cancel"), what do we do?

//let numValue1 = parseInt(prompt('What is the number value' , "10"));

//let numValue2 = parseInt(prompt('What is the second number value' , "10"));

//if(!isNaN(numValue1) && !isNaN(numValue2)) alert(numValue1 + numValue2); //only checking of true

//

//let numValue1 = parseInt(prompt('What is the number value' , "10"));

//let numValue2 = parseInt(prompt('What is the second number value' , "10"));

//if(!isNaN(numValue1) && !isNaN(numValue2)) {
  //alert(numValue1 + numValue2);

//} else {
//alert("No dummie!");

//}



//


//if(!isNaN(numValue1) && !isNaN(numValue2)) {
  //alert(numValue1 + numValue2);

//} else if(isNaN(numValue2))  {
  //numValue2 = parseInt(prompt("No, I said number!!" , "10"));
  //alert(numValue1 + numValue2);
//} else {
//alert("No dummie!");

//}





// switch

//let greeting = prompt("Tell me how to say hello.", "Hola!");

//switch(greeting.toLowerCase()) {
  //case 'hello':
  //  alert(`I love saying ${greeting}!`);
//    break;
//  case 'wassup':
//    alert(`${greeting} is so 90s!!`);
//    break;
//  default:
//    alert(`I've never heard ${greeting} before!`);
//    break;
//}



//// Ternary

//let money = 10;

//let currency = confirm("In dollars or not?")

//currency ? alert(`$${money}`) : alert(money);   ///colin means end of the true statement, false on other side



/// 3rd in class practice (check photo in class, last one)


//let isAdult = confirm("Are you over 18?");

//if(isAdult) {
  //let isUnder80 = confirm("Are you under 80?");
//if(inUnder80) {
  //let isCool = confirm("Do you like Star Wars?");
  //if(!)
//}
//} else {
  //alert("Too old!");
//}
