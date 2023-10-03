// array

const myArr = [0,1,2,3,4,5,true,"shailesh"];
const myHeros = ["shaktiman", "naagraj"];

// console.log(myArr[0]);

//Array methods

myArr.push(6);
// console.log(myArr);

myArr.pop();
// console.log(myArr);

myArr.unshift(9)
// console.log(myArr);

myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(3));
// console.log(myArr.indexOf("shailesh"));

const newArr = myArr.join();
// console.log(newArr);
// console.log(typeof newArr);

//slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3);
// console.log(myn1);
// console.log("B", myArr);

const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log("C", myArr);

