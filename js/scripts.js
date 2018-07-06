var myString = "Hello World!";
console.log(typeof myString);

var myNumber = 43; //PRIMITIVE
var myOtherNymber = new Number (43); //NUMBER OBJECT

console.log(typeof myNumber);



let newVariable = "I am the best variable"; //will spit out UNDEFINED
console.log(newVariable, "after being declared"); //adds to the previous variable definition


{
  let newVariable = "I am the worst";
  console.log(newVariable, "Inside the scope");
}

newVariable = "I am ugly";

console.log(newVariable, "Outside the scope.");

//STRING interpolater
console.log("Hey there, " + myString + "how are you?");  //ES5

console.log(`Hey there, ${myString} how are you?`); //ES6

{
// = scope, BLOCK OF CODE with curly brackets, outside doesn't affect in but can affect the outside
}




const age = 32;

{
  const age = 35;
  console.log(age);
}

console.log(age);

let today = new Date ();
let myBirthday = new Date ('3/6/1986')
console.log(myBirthday);


let bestNumber = 42.7;

Math.floor(bestNumber);

console.log (Math.floor(bestNumber))  //floor rounds down whole number, ceil rounds up



let classRoom = "Room 1";
let objectClassroom = new String("Room 1");
console.log(typeof classRoom);
console.log(typeof objectClassroom);
console.log(classRoom.length);

alert("You have gone the wrong way.");  //1 directional communication to user

const isReady = confirm("Lets party?");
alert("isReady");

let userName = prompt("Tell me your secrets.", "John Doe");
console.log(userName);
