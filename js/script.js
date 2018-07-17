/// Arrays and Loops

//Arrays

// let myArray = [];  ///most basic form

// let favFoods = ["pizza", "hamburger", "french fries"]; //needs to be in quotations

// let allThings = ['strings', 23, ['stuff'], {}, false]; //length of arrays = how many items seperated by commas

///first in the array is 0, starts a zero

//console.log(favFoods[1]);


//TRY OUT 1
// var randomStuff = ['Tag', 720,true, 2004];
//console.log(randomStuff,randomStuff.length);


///////////////////////////


//can take answer from users and plug into array

//checking is this is an array
//alert(Array.isArray(randomStuff), typeof randomStuff);
//if(Array.isArray(randomStuff));

//console.log(Array.isArray(randomStuff), typeof randomStuff);


///////////////////////

///Push

//console.log(randomStuff);
//randomStuff.push("Keano Reeves"); ///adds to the end of the array (orginal value + variable)
//console.log(randomStuff);

///unshift

//randomStuff.unshift("Sarah");

//console.log(randomStuff);

///pop

//randomStuff.pop(); //look for the last array and take it off

//let lastMember = randomStuff.pop();
//console.log(lastMember); /// shows what was removed

///shift

//randomStuff.shift(); //removes the first array item
//console.log(randomStuff);

///splice
//randomStuff.splice(2); ///1 argument, BEGINNING with that index, removes
//all indices after
//console.log(randomStuff)

//let removed = randomStuff.splice(2);
//console.log(randomStuff, removed);


//console.log(randomStuff, "BEFORE");
//randomStuff.splice(1,2); //2 arguments: index is the 1st, 2nd is how many are removed (includes the starting index and the next)
//console.log(randomStuff, "after");

//console.log(randomStuff, "BEFORE");
//randomStuff.splice(3,1,["I got added"]); //replaces the removed indices with what is in brackets, the 3rd item and every thereafter is what is put in
//console.log(randomStuff, "after");


//randomStuff.splice(3,(randomStuff.length - 4),["I got added"]); // the length measures how many in array total so need to figure out from deductions wher you want to be from length

//randomStuff.splice(-2,1,["I got added"]); ///the negative makes it count from the end of the array index


/////////////////

///slice : original stays the same but creates a copy


// let copy = randomStuff.slice(); // with no arguments it just make a copy
//(lets you manipuate the copy without changing the original, once execute the copy it can replace the original)
// console.log(copy);

// let copy = randomStuff.slice(1); // first one is an index

// console.log(copy);

// let copy = randomStuff.slice(1, 4); //what index do you want to stop and not include
// console.log(copy);


////////////////////////////////////////////

//IndexOf

// let removeIndex = randomStuff.indexOf(720); //tells you what index number it is at that you are looking for
// console.log(removeIndex, randomStuff);

// randomStuff.splice(removeIndex, 1);
// console.log(removeIndex, randomStuff); //tells you what index number what taken out


// let myNums = [1, 2, 3, 4, 5];
// console.log(myNums.reverse());
// console.log(myNums); //proves that this number range is now change to reverse


////sort
// console.log(randomStuff, 'Before')
// randomStuff.sort();
// console.log(randomStuff, 'After');


////multiDimensional

// let multiDimensional = [['hello', 1], ['goodbye', 0]];

// console.log(multiDimensional[0][0], multiDimensional[1][0]); ///consoles out first the index within that multiDimensional then the index within that inner array


//in class practice 2, by teach

// let favMovies = [];

// let favorite = ["Dumb and Dumber", "Lloyd Chistmas"];
// let secondFav = ["Casino", "Joe Pesci"];
// let thirdFav = ["Resavoir Dogs", "Mr. Pink"];
// let fourthFav = ["Heat", "Doc"];

///
// favMovies.push(favorite, secondFav, thirdFav, fourthFav);

// console.log(favMovies); //to check if it works

// let titles = [];

// titles.push(favMovies[0][0], favMovies[1][0], favMovies[2][0]);


// alert(titles);

/////

// let faveAndLeast = [];

// faveAndLeast.push(favMovies[0], favMovies[3]);

// console.log(faveAndLeast);

// alert(favMovies.length);


///////////////////////
/// Day 4 continued

// for (let i = 0; i < 5; i++) {  /// first
  // console.log('Hi');
// }

// for (let i = 0; i < 5; i++) {
  // console.log(`The number is ${i}`);
// }


////////////test trying to get in multiples of 10 to 100
// for (let i = 0; i < 11; i++) {
//   console.log(`The number is ${i*10}`);
// }


///array ////   need to revisit
// const colors = ['blue', 'red', 'green', 'purple'];
// //
// // console.log(colors[index]);
// //
// for (let index = 0; index < colors.length; index++){
//   console.log(colors[index]);
//   if (index === 1)break; ///stops loop at index identified
// }

//while Loops

// let counter = 0;
// while(counter < 5) {
//   console.log(`before ${counter}`);
//   counter++;
//   console.log(`after ${counter}`);
// }


/// continue
//
// for (let index = 0; index < colors.length; index++){
//   console.log(colors[index]);
//   continue;
//   console.log('why cant you see me');
// }


////For EACH

// const captains = ['Kirk', 'Picard', 'Sisko', 'Janwady', 'Lorca'];
//
// captains.forEach( (captain, index) => { ///    => means "fat arrow"
//   console.log(captain, index)
// } )



/// For Of

// const captains = ['Kirk', 'Picard', 'Sisko', 'Janwady', 'Lorca'];
//
// for(let captain of captains) {
//   console.log(`Hello Captain ${captain}`);
// }  ////first name what ever you want, second have to be existing array

///for..in is for obejects

// const me = {
//   firstName: 'Art',
//   secondName: 'Rob',
//   age: 32
// }
//
//
// for (let property in me) {
// console.log(me[property]);
// }



///////////try out #1

let favMovies = [];

let favorite = ["Dumb and Dumber", "Lloyd Chistmas"];
let secondFav = ["Casino", "Joe Pesci"];
let thirdFav = ["Resavoir Dogs", "Mr. Pink"];
let fourthFav = ["Heat", "Doc"];

//my attempt
// for (let i = 0; i < 4; i++) {
//   console.log(favMovies);
// }

///actual

let faveAndLeast = [];
faveAndLeast.push(favMovies[0], favMovies[3]);

for (let i = 0; i < favMovies.length; i++) {
  if(input === alert(`${favMovies[i][0]} ${favMovies[i],[1]}

}
////I missed this
