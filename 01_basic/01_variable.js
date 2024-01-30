const accountId = 2622228;
let accountEmail = "ap@.com";
let accountPassword = "1234";
let accountCity = "satara";
let accountState; // we are just adding a new task how will it work

// let change accountId
// accountId=2
// so here it cant change the value of accountId beacuse it is *constant*
console.log(accountId);

// let change the others value

accountPassword = "2626262";
accountCity = "vapi";
accountEmail = "apap@.com";

//    here we are using second 2 method for console this values

console.table([accountId, accountEmail, accountPassword, accountCity, accountState,]);
