const accountId = 144553
let accountEmail = "shailesh.31.kumar@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi NCR"
let accountState;

// accountId = 2 // not aalowed because it is a constant variable

accountEmail = "abdhs@gmail.com"
//accountPassword="545"
accountCity="Bengluru"

/*console.log(accountId);
console.log(accountPassword);
console.log(accountCity);*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/