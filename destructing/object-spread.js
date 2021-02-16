//object spread 16-2-2021
const objspread1 = {firstname:"mk",lastname:"md"};
const objspread2 = {...objspread1};
console.log(objspread1) // { firstname: 'mk', lastname: 'md' }
console.log(objspread2) // { firstname: 'mk', lastname: 'md' }
objspread2.age = 35;
console.log(objspread1) // { firstname: 'mk', lastname: 'md' }
console.log(objspread2) // { firstname: 'mk', lastname: 'md', age: 35 }



