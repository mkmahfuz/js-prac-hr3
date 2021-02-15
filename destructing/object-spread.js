//object spread 16-2-2021
const objspread1 = {firstname:"mk",lastname:"md"};
const objspread2 = {...objspread1};
console.log(objspread1) // { firstname: 'mk', lastname: 'md' }
console.log(objspread2) // { firstname: 'mk', lastname: 'md' }
objspread2.age = 35;
console.log(objspread1) // { firstname: 'mk', lastname: 'md' }
console.log(objspread2) // { firstname: 'mk', lastname: 'md', age: 35 }

//creating object shortcut way

const x = 25;
const y = 35;

const objnum1 = {x:x,y:y};
console.log(objnum1) // { x: 25, y: 35 }

const objnum2 = {m:x,n:y};
console.log(objnum2) // { m: 25, n: 35 }

const objnum3 = {x,y}; //this is the modern way and shortcut way
console.log(objnum3) // { x: 25, y: 35 }

//--------------- shortcut way to create an object
const fname = "khalid";
const lname = "mahfuz";
const age = 32;

const objPerson = {fname,lname,age};
console.log(objPerson) //  { fname: 'khalid', lname: 'mahfuz', age: 32 }

//---------------------
//--------------- shortcut way to create an object with method
const fname1 = "khalid";
const lname1= "mahfuz";
const age1 = 32;
const fullname = ()=>fname1 +" "+ lname1;
// const fullname = function () {return fname1 + lname1;  }
const objPerson1 = {fname1,lname1,age1,fullname};
// console.log(objPerson1) //  
console.log(objPerson1.fullname()) // khalid mahfuz

