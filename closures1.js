function add(){
    var counter = 0;
    function plus(){counter += 1;}
    plus();
    return counter;
}

console.log(add(),add());

//function expression
var counter1 = 0 ;
var add1 = function(){counter1 += 1; return counter1};

console.log(add1(),add1(),add1());

//function self invoked and use it as closures
// 1st self invoked function which return a function expression.
var add2 = (function(){ var counter2 = 0; return function(){counter2 += 1; return counter2}})();

console.log(add2(),add2(),add2(),add2());