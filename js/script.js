//
// const div = document.querySelector(".myDiv"); /// always spits out the zero index first
//
// const skate = "http://www.industrytap.com/wp-content/uploads/2017/06/skateboard_1498844008.jpg";
//
// let image = document.querySelector("img");
//
//
// // console.log(div.textContent);
// //
// // div.textContent = "Say cheese and die!";  ///reset the value and puts the they other
// //
// // console.log(div.innerHTML);
// //
// //
// // div.innerHTML = "<h1> Hey there Stein</h1>"
// //
//
//
// let newH1 = document.createElement("h1");
//
//
// newH1.textContent = "This is the new Content";
//
// newH1.id = "red_bg";  /// wipes out existing id
//
// newH1.id += " red_bg "; //// adds new id in the newH1
//
// div.appendChild(newH1);
//
//
// //////
//
// let newH2 = document.createElement("h2");
//
// newH2.textContent = "I am now before h1";
//
// newH2.className = "blue-bg";
//
// newH2.className += " white-text";
//
// div.insertBefore(newH2, newH1);
//
// /////
//
// let newP = document.createElement("p"); // adding p
// newP.textContent = "I am the spirited one"; // the text that will be there
// newP.classList.add("purple-text", "green-bg"); //and the attributes that are applied
//
// div.appendChild(newP); // puts it in the DOM
//
// ///
//
// let span = document.querySelector("span");
// span.addEventListener("mouseenter", (e) => {
//   span.classList.remove("white-text");
//
// })
//
//
// span.addEventListener("click", (e) => {
//   span.classList.toggle("giant-text");
//   span.classList.contains("green-bg") ?
//   span.classList.replace("green-bg", "blue-bg")
//   :
//   span.classList.replace("blue-bg", "green-bg")
// })
//
// image.addEventListener("click", (e) => {
//   image.setAttribute("src", "skate");
// })


/////  Do tryout for takehome


let body = document.querySelector("body");
let script = document.querySelector("script");



	for(let i=1; i<=100; i++){
		let newP = document.createElement("p");
		if(i % 5 === 0 && i%3 === 0){ /// % = mudulous
			newP.textContent = "FizzBuzz";


		} else if(i%3 === 0){
			newP.textContent = "Fizz";

		} else if(i%5 === 0){
			newP.textContent = "Buzz";

		} else {
			newP.textContent = i;
		}
		body.insertBefore(newP, script);
	}














//
