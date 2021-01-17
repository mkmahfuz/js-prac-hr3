//basic function with parameter
function add(para1,para2){
    var total= para1 + para2;
    return total;
}

var result = add(2,3); //call add function and pass 2 arguments
console.log(result);

//largest number function from an array

function largestnumber(arr){
    var larger = 0;
    for(x of arr){       
        if (x > larger){
            larger = x;
        }        
    }
    return larger;
}

var arr1 = [34,36,23,87];
var largest = largestnumber(arr1);
console.log(largest);
