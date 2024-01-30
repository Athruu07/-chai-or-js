// primitive 

// 7 types : string, number, boolean, null,undefine,symbol,Bigint

//non primitive  or  references

// Array , object , function 

// const score = 100
// const scoreval = 100.0

// const isloggedin = false
// console.log(typeof isloggedin);
// const outsidetemp = null 
// console.log(typeof outsidetemp);

// let userEmail 

// const id = Symbol("123")           //  here we are using SYMBOL 

// const anotherid = Symbol("123")    

// console.log(id === anotherid);   // se we can't get true value here

// const bigNumber = 232233223n
// console.log(typeof bigNumber);

// const heros =["Ravi" , "Athruu" , "shubzz"]           // objects type
// let myobj = 
//  {
//      name:"aaaaa" ,
//          age:12
//  }


//  console.log( typeof myobj);
  

// const aapapapa = function()
// {
//     console.log("hiiiiii");
// }


// ******************************************************************************************************************************************************

// As we havw two type of memory

// Stack which is (primitive)
// Heap which is (Non-primitive)

// let myname = "Atharva";

// let anothername = myname
// // console.log(anothername);

// anothername = "chaiorcode"
 

// console.log(myname);
// console.log(anothername);

// let take another example 

// how canwe access and change the value using STACK and HEAP

let valueone = {
    email:"ap@123",
    upi:"2266"
}
console.log(valueone.email);
console.log(valueone.upi);

// let valuetwo = valueone

// valuetwo.email = "athruu@26264"
// valuetwo.upi="1111"

// console.log(valueone.email)
// // console.log(valuetwo.email)
// console.log(valueone.upi);
