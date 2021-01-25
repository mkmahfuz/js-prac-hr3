// callback function :: when a function name is passed as an argument to another function ,is a callback function.

function getName(fname,lname,myFunc) {
   return myFunc(fname,lname);    
}

function fullName(fname,lname){
    return fname + lname;
}

function address(home,district){
    return home + district + "nice";
}

console.log(getName('karim','rahim',fullName));
console.log(getName('dhaka','bangladesh',address));
