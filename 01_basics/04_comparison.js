console.log(2>1);   //true
console.log(2>=1);  //true

console.log("2">1); //true
console.log("2abc">1);  //false

console.log(null>0);   //false
console.log(null==0);   //false
console.log(null>=0);   //true because comparisons convert null to a number, treating it as 0.

console.log(undefined>0);   //false
console.log(undefined==0);  //false


// === check datatypes and value also

console.log("2" ===2);  //false



// falsy values=>


// if (false) {
//     // Not reachable
//   }
  
//   if (null) {
//     // Not reachable
//   }
  
//   if (undefined) {
//     // Not reachable
//   }
  
//   if (0) {
//     // Not reachable
//   }
  
//   if (-0) {
//     // Not reachable
//   }
  
//   if (0n) {
//     // Not reachable
//   }
  
//   if (NaN) {
//     // Not reachable
//   }
  
//   if ("") {
//     // Not reachable
//   }

//   if (document.all) {
//     // Not reachable
//   }
