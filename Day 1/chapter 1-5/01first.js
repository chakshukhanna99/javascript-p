const prompt = require("prompt-sync")();

let a = 45;
let b = "hello";
let c = null;
let d = true;
let e = BigInt("567")+BigInt("3");
let f = Symbol("I am a nice symbol")
let g = undefined;
console.log(a,b,c,d,e,f,g)
console.log(typeof d);
const item = {
  "harry":true,
  "shubh":false,
  "lovish":69,
  "Rohan":undefined,
}
console.log(item["lovish"])
console.log(item.lovish);
 
console.log("from here practice set 1 is started");
let name = "chakshu"+1;

console.log(name);
console.log(typeof name);

const object = {
    name:"chakshu",
    age: 18
}
object['friend']="everyone";
object.isgood = true;
console.log(object["isgood"])
console.log(object.isgood)
console.log(object.friend)
console.log(object["friend"])

const wordm ={
    a:"aao bhyi aao",
    b:"bhai"
}
console.log(wordm["a"])
console.log(wordm.b)

let names = prompt("whats your name");
console.log(names);
