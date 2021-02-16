// ternary operator
// ?:
//condition?true:false

const money1 = 120;
const money2 = 80;
const food1 = money1>100 ? "biryani" : "khuchuri";
console.log(food1); //biryani

const food2 = money2>100 ? "biryani" : "khuchuri";
console.log(food2); //khichuri

//usecase for css class
//usecase-1
//const cssClass = active ? "active" : "inactive"; // if(active){cssClass = "active"}else {cssClass="inactive"}
//usecase-2
//const action = active ? displayUser() : hideUser(); // for if-else
// usecase-3 //only if no else
//const action2 = active && displayUser(); // jodi active ta true hoy then displayUser() ta call hobe
//const action3 = active || hideUser(); // jodi active ta false hoy then hideUser() ta call hobe

//usecase-3 example
// let active = true; 
let active = false; 
let x1 = active && 5;
let y1 = active || 6;
console.log(x1) // 5 ---when active is true but false --when active is false
console.log(y1) // true --when active is true but 6 --when active is true

//converting string to number
const numx1 = "45";
console.log(typeof(numx1)) //string

const numx2 = +"46";
console.log(typeof(numx2)) //number

let numx3 = "5";
console.log(typeof(+numx3)) //number
numx3 = +numx3;
console.log(typeof(numx3)) //number
//but
let numx4 = "6";
numx4 +=numx4;
console.log(typeof(numx4)) //string

//converting number to string

const strx1 = 5 + "";
console.log(typeof(strx1)) //string

let strx2 = 6;
console.log(typeof(strx2)) //number

strx2 += "";
console.log(typeof(strx2)) //string

const strx3 = "" + 5;
console.log(typeof(strx3)) //string

console.log("--------")

//nulish coalescing
// ?? operator
// const x = null;
// const x = undefined;
const x = 'a';
const y = 3;
const z = x ?? y; // if x == null or undefined then return y, otherwise return x. (for any falsy value use z = x || y)
console.log(z) // return 3 

console.log("----------")

//Optional chaining operator
// ?.

const adventurer = {
    name: 'Alice',
    cat: {
      name: 'Dinah'
    }
  };
  
//   const dogName = adventurer.dog.name; // it wll give an error-- cannot read property 'name' of undefined
  //so use the ?.
  const dogName = adventurer.dog?.name;
  console.log(dogName);
  // expected output: undefined
  
  console.log(adventurer.someNonExistentMethod?.());
  // expected output: undefined


  console.log("-------------")
  //boolean value toggle

  let actv = true;
  actv = !actv;

  console.log(actv) // false

  actv = !actv;
  console.log(actv) // true