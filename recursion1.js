let countDown = number => {
    //base case
    if (number === 0) {
        return "ok";
    }
    console.log(number);
    let cnt = countDown(number - 1);
    return cnt;
    
    
};
console.log(countDown(5)) // 5, 4, 3, 2, 1