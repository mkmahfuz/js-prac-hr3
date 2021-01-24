//simple function with known parameters
function addNumbers(num1,num2){
    return num1 + num2;
}

var result = addNumbers(3,5);
console.log(result);

//hero3 18-4 date-24-1-2021
//function with unknown parameters
function addNumbers1(){
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        console.log(num);
        sum = sum + num;
    }
    return sum;
}

var result1 = addNumbers1(3,5,8,1,2,3);
console.log(result1);