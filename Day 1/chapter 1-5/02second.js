const prompt = require("prompt-sync")();

console.log("Operators in Js")
// Arithmetic Operators 
let ass = 10;
let b = 4;
console.log("ass + b = ", ass + b)
console.log("ass - b = ", ass - b)
console.log("ass / b = ", ass / b)
console.log("ass ** b = ", ass ** b)
console.log("ass % b = ", ass % b)
console.log("++ass = ", ++ass)
console.log("ass++ = ", ass++)
console.log("--ass = ", --ass)
console.log("ass-- = ", ass--)
console.log("ass = ", ass)
console.log("ass-- = ", ass--)

// Assignment Operators 
let assignment = 1;
assignment += 5 // same as assignment = assignment + 5
console.log("ass is now = ", ass)
assignment -= 5 // same as assignment = assignment - 5
console.log("ass is now = ", ass)
assignment *= 5 // same as assignment = assignment * 5
console.log("ass is now = ", ass)
assignment /= 5 // same as assignment = assignment / 5
console.log("ass is now = ", ass)

// Comparison Operators 
let comp1 = 6;
let comp2 = 7;
console.log("comp1 == comp2 is ", comp1 == comp2)
console.log("comp1 != comp2 is ", comp1 != comp2)
console.log("comp1 === comp2 is ", comp1 === comp2)
console.log("comp1 !== comp2 is ", comp1 !== comp2)
console.log("comp1 > comp2 is ", comp1 > comp2)

// Logical Operators
let x = 5;
let y = 6;
console.log(x<y && x==5)
console.log(x>y || x==5)
console.log(!false)
console.log(!true)

// Comments
// This is ass single line comment
/* This is ass sample multiline comment and ass tutorial
from 
codewithharry */

let a = prompt("Hey whats you age?");
a = Number.parseInt(a); // Converting the string to a number
if(a<0){
    console.log("This is an invalid age");
}
else if(a<9){
    console.log("You are a kid and you cannot even think of driving");
}
else if(a<18 && a>=9){
    console.log("You are a kid and you can think of driving after 18");
}
else{
    console.log("You can now drive as you are above 18");
}
console.log("Done")
// HomeWork - Explore switch statement and write a basic program in the comments
console.log("You can", (a<18? "not drive" :"drive"))



const expr = 'GTA 6';
switch (expr) {
case 'GTA':
console.log("too old to play");
break;
case 'GTA 2':
console.log("still old too play");
break;
case 'GTA china town':
console.log("good to play on mobile");
break;
case 'GTA vice city':
console.log("bad graphic");
break;
case "GTA san andreas":
console.log("Got good music");
break;
case 'GTA 5':
console.log("You can play it");
break;
case 'GTA 6':
console.log("Waiting");
break;
default:
console.log("WAITING!!!!!!!")
}

let age = prompt("what is your age ");
if(age>=10&&age<=20){
    console.log("yes");
}
else{
    console.log("no");
}

const ages = prompt("what is your age part 2");
switch(ages){
    case '15':
        console.log("mhmmm teenager");
        break;
    case '6':
        console.log("Waiting");
        break;
    default:
    console.log("WAITING!!!!!!!")
               
}

let num = prompt("enter the number");
num = Number.parseInt(num);
if(num%2==0 && num%3==0){
    console.log("yes");
}
else{
    console.log("no");
}

console.log("You can", (num<18? "not drive" :"drive"))