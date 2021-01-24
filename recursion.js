// simple recursive example from https://www.freecodecamp.org/news/understanding-recursion-in-javascript/
let countDown = number => {
    //base case
    if (number === 0) {
        return;
    }
    console.log(number);
    return countDown(number - 1);
};
console.log(countDown(5)) // 5, 4, 3, 2, 1 // there is problem the last value is undefined.
// recursion my way of the upper example
let countDown1 = number =>{    
    //base case
    if(number == 0){
        return 0;
    }
    console.log(number);
    countDown1(number-1);
}
console.log(countDown1(1));
// recursion my way addition of 0 to given number

let count = (number) => {
    // base case
    if (number == 0){
       return 0;
    }else{
        
        let cnt = count(number-1);
        cnt = number + cnt;
       return cnt;
        
    }

}
console.log(count(5));
