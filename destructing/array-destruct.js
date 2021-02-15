// array destructing
const arr1 = [2,3,4];
const [x,y,z] = [55,6,7];
const [m,n,p] = arr1;
const [s,d] = arr1;
console.log(x);
console.log(y);
console.log(z);
console.log(x,y,z);
console.log("--------------");
console.log(m,n,p)
console.log(s,d)


function boxify(num1) {
    return [num1,num1*2];
    
}

const arrreturn = (n1)=>[n1,n1+n1,n1+n1+n1];

console.log(boxify(2)) //will return an array
console.log(arrreturn(2)) //will return an array

//now destruct the return array
const [x1,y1] = boxify(3); // assign array values to variable
console.log(x1,y1)

const [x2,y2,z2] = arrreturn(5); // assign array values to variable
console.log(x2,y2,z2)
console.log(typeof(x)) //number
//
const [m1,n1] = arrreturn("str1");
console.log(m1,n1)
console.log(typeof(m1)) // string