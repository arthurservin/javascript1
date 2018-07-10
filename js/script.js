//Takehome 2
let userFirstname = prompt("First Name");
console.log(userFirstname);


let userLastname = prompt('Last Name');

alert(`Hello Mr. or Ms. ${userLastname}!`);


///// Takehome 2 review

let birthday = new Date (prompt("What is your birthday?" , "03/06/1986")); ///2nd defaults if nothing is written

let confirmBday = confirm(`Is ${birthday} your correct birthday?`);

if(confirmBday) alert(`${birthday} is in fact your birthday?`);
