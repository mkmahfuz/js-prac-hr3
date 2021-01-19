//basic random -- the value will be 0 to 1 (exclusive)
var a = Math.random(); // 0.63652229911211 
console.log(a);

// value 0 to 9
var b = Math.floor(Math.random()*10); // 5 or 6 or 9 or 0 or 1
console.log(b);

//value 0 to 10
var c = Math.floor(Math.random()*11); // 5 or 6 or 9 or 0 or 1 or 10
console.log(c);

//value 1 to 10
var d = Math.floor(Math.random()*10) + 1; // 5 or 6 or 9  or 1 or 10 //not 0 anymore, N.B: it is *10 not *11
console.log(d);

// value 1 to 100
var e = Math.floor(Math.random() * 100) + 1; // returns a random integer from 1 to 100
console.log(e);

//returns a random number between min (included) and max (excluded)
function randomMinMaxExclude(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}
var f = randomMinMaxExclude(0,10); // return 0 to 9
console.log(f);

//returns a random number between min and max (both included)
function randomMinMaxInclude(min,max){
    return Math.floor(Math.random()*(max-min)+1)+min;
}
var g = randomMinMaxInclude(0,10); // return 0 to 10
console.log(g);