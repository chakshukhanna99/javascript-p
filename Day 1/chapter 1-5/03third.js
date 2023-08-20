const prompt = require("prompt-sync")();
let sum =0;
let n=10;
for(let i=0;i<=n;i++){
sum =sum+i;
}
console.log(sum);

const object ={
    harry:90,
    shubh: 45,
    shivika: 56,
    ritika: 57,
    shiv: 23
  }

  for(let a in object ){
    console.log("marks of"+a+" are "+ object[a]);
  }

  for (let b of "Harry") {

    console.log(b)
    }


    let numbers = [1, 2, 3, 4, 5];

    for (let number of numbers) {
      console.log(number);
    }    
let a=7;
let b=8;
let c=9;
    function sumofthree(a,b,c){
        console.log(a+b+c);
    }

    sumofthree(a,b,c);

    const sumtwo=(a,b)=>{
        console.log(a+b);
    }
    sumtwo(c,b);


const marks= {
    Harry : 90 ,
    Shubham :  45,
    Rajesh :   56
}
// for(let a in marks){
//     console.log(marks[a])
// }
for (let i = 0; i < Object.keys(marks).length; i++) {
    console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
  }

  let i=prompt("enter the number f");

let cn;
  while(cn!=i){
    console.log("try again \n");
cn= prompt("enter the number")

  }

  const mean=(a,b,c,d,e,n)=>{
    console.log((a+b+c+d+e)/n)
  }
  mean(10,20,30,40,50,5)