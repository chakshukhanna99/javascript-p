
const prompt = require("prompt-sync")();
let marks_class_12 = [91, 82, 63, 84, false, "Not Present"]
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])
console.log(marks_class_12[6]) // Will be undefined because index 6 does not exist
console.log("The length of marks_class_12 is", marks_class_12.length)
marks_class_12[6] = 89 // Adding d new value to the array
marks_class_12[0] = 96 // Changing the value of an array
console.log(marks_class_12)
console.log(typeof marks_class_12)

// Array Methods
let num = [1, 2, 3, 34, 4]
let b = num.toString() // b is now d string 
console.log(b, typeof b)
let c = num.join(" and ")   //1AND_,2AND_,STRING
console.log(c, typeof c)
// let r = num.pop() // pop returns the popped element
// console.log(num, r)
// let r = num.push(56) // push returns the new array length
// console.log(num, r)
// let r = num.shift()
// console.log(r, num) // Removes an element from the start of the array

let r = num.unshift(78)
console.log(r, num)
console.log(r)

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
// let num_even_more = [211, 212, 213, 214, 415, 416, 417, 418, 419]
// console.log(num.length)
// delete num[0]
// console.log(num.length)

// let newArray = num.concat(num_more, num_even_more)
// console.log(newArray)
// console.log(num, num_more)
//let num = ,num.sort();    console.log(num).   sort alphabatically
// sort method
// let compare = (d, b)=>{
//   return b - d
// }
// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// num.sort(compare)
// num.reverse()
// console.log(num)

// Splice and Slice
// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// let deletedValues = num.splice(2, 4, 1021, 1022, 1023, 1024, 1025)
// console.log(num)
// console.log(deletedValues)

// let newNum = num.slice(3)
// let newNum = num.slice(3, 5)
// console.log(newNum)

let arrx=[1,2,3,4,8];
for(let i=0;i<arrx.length;i++){
    console.log(arrx[i]);
}
let str = "chakshu";
let nstr = Array.from(str);
console.log(nstr);

for(let i=0;i<nstr.length;i++){
    console.log(nstr[i]);
}
for(let items of arrx){
    console.log(items)
}
for(let items in arrx){
    console.log(items)
}
arrx.forEach((element) => {
    console.log(element*element)
});

let arrv = [45, 23, 21];
// Array map method
let x = arrv.map((value, index, array) => {
  // console.log(value, index, array)
  return value + index
})
// console.log(arrv)

// Array filter method
let arr2 = [45, 23, 21, 0, 3, 5]
let a2 = arr2.filter((d) => {
  return d < 10
})
// console.log(a2, arr2)

// Array reduce method
let arr3 = [1, 2, 3, 5, 2, 1]
const reduce_func = (h1, h2) => {
  return h1 + h2
}
let newarr3 = arr3.reduce(reduce_func)
console.log(newarr3)

// Chapter 5 Practice Set
// Practice Problem 1
let arrvp = [1, 2, 3, 4, 5, 6, 7, 83]
let d = prompt("Enter d number")
d = Number.parseInt(d)
arrv.push(d)
console.log(arrvp)

// Practice Problem 2
let arrvx = [1, 2, 3, 4, 5, 6, 7, 83]
let de;
do {
  de = prompt("Enter d number")
  de = Number.parseInt(d)
  arrvx.push(d)
} while (de != 0);
console.log(arrvx)

// Practice Problem 3
let arrve = [1, 2, 30, 4, 50, 6, 7, 83, 670]
let n = arrve.filter((x)=>{
  return x%10 == 0
})
console.log(n)

// Practice Problem 4
let arrvd = [1, 2, 30, 4, 50, 6, 7, 83, 670]
let ne = arrv.map((x)=>{
  return x*x
})
console.log(ne)

// Practice Problem 5
let arrvl = [1, 2, 3, 4, 5]
let nd = arrv.reduce((x1, x2) => {
  return x1 * x2
})
console.log(nd)