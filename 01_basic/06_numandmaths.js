const score = 100
console.log(score);


const balance = new Number(score)   // for more function() goto to console and 
// type this ^^^
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));  // --->give the decimal point in the end as you want (1) then 100.0  and (2)then 100.00 
console.log(balance.toExponential(2));

// WE CAN GET THIS TYPE OF FUNCTON() FROM Crome console ^||^|^|^ 

const othernumber = 133.434

console.log(othernumber.toPrecision(3)); 

// -----------------------------------------------------------

const hundread = 100000
console.log(hundread.toLocaleString('en-IN'))  //  ---> this function is used to give commas (100000) ---> (1,00,000) we use (en-IN) for indian values

// ------------++++ MATHS +++++----------------------------------------------------------------------------------------
// console.log(Math);
// console.log(Math.abs(-4));   //------> (4)this function change the negative(-) value into positive(+) value

// console.log(Math.round(4.5));   //  this functon give the round figure if the value is under (4.4) it will give (4) 
// // and if value is increase by (4.5) it will give -->(5)

// console.log(Math.ceil(4.1));   // if value if greater than (4) it will give -->(5)  (CEIL MEANS TOP VALUES)

// console.log(Math.floor(4.9)); // if we take (4.2) it will take (4) if we take (4.9)it will take same value -->(4) (FLOORE VALUE MEANS SMALL VALUE)

// console.log(Math.sqrt(5));
// console.log(Math.min(2,45,7,4,1,4))      // FIND MIN NO
// console.log(Math.max(323,4557,23,23,56,57,7,234));  // FIND MAX NO
// console.log(Math.random());
// console.log(Math.floor(Math.random()*10)+1);

// const min = 10
// const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)

console.log();