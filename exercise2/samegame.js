//modified s w g
//let cpu = ["s","w","g"][cpui]
const prompt = require("prompt-sync")();
// Three variables
const variable1 = "snake";
const variable2 = "water";
const variable3 = "gun";
var count=0;
let n=3;
while(n!=0){
let myvar = prompt("enter the variable");


// Generate a random number between 0 and 2
const randomIndex = Math.floor(Math.random() * 3);

// Select a random variable based on the random index
let randomVariable;
if (randomIndex === 0) {
    randomVariable = variable1;
} else if (randomIndex === 1) {
    randomVariable = variable2;
} else {
    randomVariable = variable3;
}

console.log("Random variable:", randomVariable);
if(myvar===randomVariable){
    console.log("win");
    count++;
}
else{
    console.log("better luck next time");
}
n--;


}
// console.log(`your score is ${count}`);
console.log(`your score is ${count}`)