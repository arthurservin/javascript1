myName = prompt("What is your name?");


let favColor = prompt("What is your favorite color?");

switch(favColor.toLowerCase()) {
  case 'red':
    alert(`Roses are red ${myName}!`);
    break;
  case 'orange':
    alert(`Orange you glad I didn't say ${myName}.`);
    break;
  case 'yellow':
    alert(`You're looking a little yella ${myName}.`);
    break;
  case 'green':
    alert(`Get that green ${myName}!`);
    break;
  case 'blue':
    alert(`Why so blue ${myName}?`);
    break;
  case 'pink':
    alert(`${myName}, your cheeks are flush pink.`);
    break;
  case 'purple':
    alert(`${myName}, do you like purple sticky punch?`);
    break;
  case 'black':
    alert(`Man ${myName}, you're so dark.`);
    break;
  case 'white':
    alert(`You must be pretty bright ${myName}.`);
    break;
  case 'grey':
    alert(`${myName}, were you born in England?`);
    break;
  default:
    alert(`${myName}, I've never heard of that color before!`);
    break;
}
