// localStorage and sessionStorage work in a same way.. localStorage is permanent while sessionStorage is per session.

//Storage Object properties and methods
//property -> length - Returns the number of data items stored in the Storage object
//methods -> 
// key(n)	Returns the name of the nth key in the storage
// getItem(keyname)	Returns the value of the specified key name
// setItem(keyname, value)	Adds that key to the storage, or update that key's value if it already exists
// removeItem(keyname)	Removes that key from the storage
// clear()	Empty all key out of the storage

localStorage.setItem('fname','khalid');
const item = localStorage.getItem('fname');
localStorage.setItem('lname','mahfuz');

const obj1 = {age:32,sal:2000,country:"bangladesh"};
localStorage.setItem('person1',obj1); // it will save the person with value [Object Object]
//localstorgae only takes value as single value of string or number or boolean, so use json.stringfy(obj)
const strobj1 = JSON.stringify(obj1);
localStorage.setItem('person2',strobj1);

//get data from localstorgae
const persondata = localStorage.getItem('person2');
console.log(persondata); // {"age":32,"sal":2000,"country":"bangladesh"}
const parsedperson2 = JSON.parse(persondata);
console.log(parsedperson2.age)


console.log(item)
//Note: this file will not run in vscode terminal use html file in browser--connected with storage.html