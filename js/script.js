/// QUERY THE DOM

let body = document.getElementsByTagName('body');  //strint within the quotes looks for this node
//  the "let body" set the body as an element, document is looking in the DOM

console.log(body[0]);

const header = document.getElementsByClassName('heading');

const paragraph = document.getElementById('paragraph'); //ID exclusive to JS

console.log(paragraph);


let div = document.querySelector('.arts-the-best'); ///returns the first element you ask for
// . for query selector is for class
// # if for ID

document.querySelectorAll('.arts-the-best');


///   EVENT LISTENERS
// when real time thing are happening on the page, this one listens
// know what you are listening for and what you are listening to, then what happens

// div.addEventListener(  //event listener takes 2 arguments, second argument is a function of what you want it to do when event (1st one) happens
//   'mouseover',
//   funtion(ev){
//     div.style.backgroundColor = 'indigo'
//   }
// );

///  Bettter way to write

div.addEventListener(
  'mouseover',
  ev => {    /// the "ev" can be used for later to ask for this event to do something else 
    console.log(ev);                           /// ES6 way of using callback
    div.style.backgroundColor = 'indigo'
  }
);










//
