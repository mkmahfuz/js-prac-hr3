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



// ?.

