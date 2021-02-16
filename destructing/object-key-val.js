const obj1 = {fname:"khalid",lname:"mahfuz"};

const keyArray = Object.keys(obj1); // return keys as array
console.log(keyArray); //[ 'fname', 'lname' ]

const valuArray = Object.values(obj1);
console.log(valuArray) //[ 'khalid', 'mahfuz' ]

//read values from object with array forEach

keyArray.forEach(key=>console.log(obj1[key])) //cannot use console.log(obj1.key) use the obj1[key]

console.log(obj1.fname)