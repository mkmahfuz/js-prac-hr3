const obj1 = {fname:"khalid",lname:"mahfuz"};
const obj2 = obj1; // obj2 refer the obj1, so if we change one object's value it will change the other's value also

console.log(obj2) //{ fname: 'khalid', lname: 'mahfuz' }
obj2.age = 32;
console.log(obj2) //{ fname: 'khalid', lname: 'mahfuz', age: 32 }
console.log(obj1) // { fname: 'khalid', lname: 'mahfuz', age: 32 }

// so how to copy the object's value???
//answer -- use object destructing

const {fname,lname} = obj1;

const obj3 = {fname,lname};
console.log(obj3); //{ fname: 'khalid', lname: 'mahfuz' }
console.log(obj2) //{ fname: 'khalid', lname: 'mahfuz', age: 32 }
console.log(obj1) //{ fname: 'khalid', lname: 'mahfuz', age: 32 }
obj3.age = 34;
console.log(obj3) //{ fname: 'khalid', lname: 'mahfuz', age: 34 }
console.log(obj2) //{ fname: 'khalid', lname: 'mahfuz', age: 32 }
console.log(obj1) //{ fname: 'khalid', lname: 'mahfuz', age: 32 }
// -----------------------
console.log("---------------")
//object spread
const objspread1 = {firstname:"mk",lastname:"md"};
const objspread2 = {...objspread1};
console.log(objspread1) // { firstname: 'mk', lastname: 'md' }
console.log(objspread2) // { firstname: 'mk', lastname: 'md' }
objspread2.age = 35;
console.log(objspread1) // { firstname: 'mk', lastname: 'md' }
console.log(objspread2) // { firstname: 'mk', lastname: 'md', age: 35 }





