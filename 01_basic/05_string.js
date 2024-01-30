const name = "athruu"
const repocount = 50

console.log(name + repocount + "value");    // this is old one method

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);    // Hello my name is athruu and my repo count is 50


// <- ----------------------------------------------------------------------------------------------------------------- >
  // TO GET ALL THE STRING FUNCTION() GO TO CONSOLE AND 
  // TYPE  const gameName = new String("Athruu-aP"); AND THEN TYPE gamename = you will get the output
  const gameName = new String("Athruu-aP");

console.log(gameName[0]); // A
console.log(gameName.__proto__); // {}
console.log(gameName.length); // 9
console.log(gameName.toUpperCase()); // ATHRUU-AP
console.log(gameName.toLowerCase()); //  athruu-ap
console.log(gameName.charAt(1)); //  at 1 place t is there so output is [t]
console.log(gameName.indexOf("t")); //  at t index 1 is there so OP is [1]

console.log(gameName.substring(0, 4)); // Athr  is the OP

// OR you can user this way

const newString = gameName.substring(0, 4); //----------> examole   Athr
console.log(newString);


// --------------------------------------------------------

const ab = String("patekar"); // ---> Example
const newAp = ab.substring(2,4)
console.log(newAp);                // this way 
console.log(ab.substring(2, 4));  // or this way direct 
console.log(ab.substring(0, 4));

// --------------------------------------------------------

console.log(ab.slice(2, -3)); // or this direct
const anotherstring = ab.slice(-3, 4);  // this way   
console.log(anotherstring);          

// ----------------------------------------------

const newone = "    Athruu    "; // this function fill the gap
console.log(newone); // before
console.log(newone.trim()); // After



//*********** DO ONLT THIS SANTAX  *********//
const ap = 10;
const url = "Athruu@20";
console.log(`my nam is ${url} ans dgev dfjerf sfnsirnw aqoeqne frdotge ohopedw sfweirt  sdwoqijem ${ap}`);
console.log(url.toUpperCase().replace("10", "2628"));
console.log(url.includes("Athruu@20"));   // this function show the value is take is there or not IF available then show ture / false
console.log(url.split());      // return the value into array ---> [''] ---> ['Athruu@20']   
console.log(url.small());  // <small>Athruu@20</small>
console.log(url.bold().big().italics());  // <i><big><b>Athruu@20</b></big></i>

// ---------------- Just for practices -------------------


let aa = Number("aa12"); // -----------> just for practic
console.log(aa); // -----------> NaN
console.log(typeof aa); // ------------> Number

let bb = String(12);
console.log(typeof bb); //------------> type is STRING  ------> output is 12

// ---------------------------------------

// JUST FOR PRACTIC (TIME PASS)


let userone = "athruu"
let usertwo = userone
    usertwo = "apa"
    console.log(usertwo);
    console.log(userone)

// when we run it on crome we geet

//   String {'Athruu'}
// 0
// :
// "A"
// 1
// :
// "t"
// 2
// :
// "h"
// 3
// :
// "r"
// 4
// :
// "u"
// 5
// :
// "u"

// length is 06
