const prompt = require("prompt-sync")();

let a = Math.random()*100;
let x = Number.parseInt(a);
// console.log(x);
let count =0;
let num=0;
do{
    num= prompt("enter the number");
   if(num==x){
   console.log("congo your guess is correct");
  
   console.log(`your score is ${100-count}`)
   }
   else if(num<x){
    console.log("number is smaller");
   }
   else{
    console.log("number is greater")
   }
   count++;
}while(num!=x)