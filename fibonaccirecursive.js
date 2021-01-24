//recursive way

function fibrecursive(n){
    if(n == 0){
        return 0;
    }else if(n == 1){
        return 1;
    }else{
        return fibrecursive(n-1) + fibrecursive(n-2);
    }
}

console.log(fibrecursive(8)); // retun 8th element of fibonacci , that is 21

// recursive way -- the series in array
function fibrecursive2(n){
    if(n == 0){
        return [0];
    }else if(n == 1){
        return [0,1];
    }else{
        // the nth element
        var fibo = fibrecursive2(n-1);
        var nextElement = fibo[n-1] + fibo[n-2];
        fibo.push(nextElement);
        return fibo;
    }
}

console.log(fibrecursive2(8));
