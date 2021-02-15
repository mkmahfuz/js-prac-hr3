// spread operator or three dots

//example one -- spread for concat()
const arr1 = [2,3,4];
const arr2 = [...arr1,6]; //spread the arr1's values here one by one
console.log(arr1)
console.log(arr2)

//**example two -- spread for copying array's value only ,not the reference

//copy reference
const arr3 = ['a','b','c'];
const arr4 = arr3; // now arr4 and arr3 refer the same values

arr4.push('d');
console.log(arr3) // ['a','b','c','d']
console.log(arr4) // ['a','b','c','d']

// now copy values only
const arr5 = ['a','b','c'];
const arr6 = [...arr5]; // it will copyhe values only not the reference
arr6.push('d');
console.log(arr5) // ['a','b','c']
console.log(arr6) // ['a','b','c','d']


//**exapmple three--

function arrFunc(x,y,z) {
    return x+y+z;    
}
const num1 = [2,3,4];
const result1 = arrFunc(...num1); // spread the num1 array's value and use as separated arguments
console.log(result1) // return 9