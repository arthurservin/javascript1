
// scaleChoice = prompt("Celcius or Fahrenheit");
//
// control.log(`${scaleChoice}`);

/////////////////////////////////

///   HW review

// step one
const h3 = document.querySelector("#temp");
let scale = prompt("Celcius or Fahrenheit?");
let temp = prompt("How hot is it?", "99");


// step two

function convertTemp(scale, temp) {
  ///
  scale = scale.toLowerCase();
  let returnVal;  //// ???
  let oppositeVal = scale === "c" ? "Fahrenheit" :
  "Celcius";
///
  temp = parseInt(temp);  /// makes sure its a number
  if(!isNaN(temp)) {  /// if it is a number
    returnVal = scale === "c" ?
    (1.8 * temp) + 32 /// if it is c (Celcius) than work this problem, converts to Fahrenheit
    :
    (5 / 9) * (temp - 32); /// if not, work this one which converts to Celcius

///////////

h3.innerText = `Your temp is ${returnVal} ${oppositeVal}`; // innerText is when you click in the text

} else {
  scale = prompt("What scale do you want to use?", "F or C");
  temp = prompt("How hot is it?", "99");
  convertTemp(scale, temp);

  }
}


convertTemp(scale, temp);


/////////////


h3.addEventListener("click", (e) => {  /// the e can be anything, its an event name
  let valueArr = e.target.innerText.split(" "); //// thsis creates an array of the whole sentece written out
  scale = valueArr[valueArr.length - 1] === "Celcius" ? "C" : "F" ;
  temp = valueArr[valueArr.length - 2]; // the minus 1 or 2 is selecting which item in the new array to pull out 
  convertTemp(scale, temp); /// this is the actual event that runs the scale and temp figured just above to run again

});

























/////
