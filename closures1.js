function add(){
    var counter = 0;
    function plus(){counter += 1;}
    plus();
    return counter;
}

console.log(add(),add()); // this will alway return 1-- so how to solev this?? check the bellow code

//function expression
var counter1 = 0 ; // this is global variable- so it can be changed by other functions.
var add1 = function(){counter1 += 1; return counter1};

console.log(add1(),add1(),add1());

// so this is the solution
//function self invoked and use it as closures
// 1st self invoked function which return a function expression.
var add2 = (function(){ var counter2 = 0; return function(){counter2 += 1; return counter2}})();

console.log(add2(),add2(),add2(),add2());

//my own way to explain the closure with inner function 26-1-2021

var add3 = (function(){
    var counter = 0;
    var x = function(){counter += 1; return counter;};
    return x;
})();

console.log(add3());
console.log(add3());
console.log(add3());
// the result will be 1,2,3