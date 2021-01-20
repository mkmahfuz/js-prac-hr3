function isPrime(n){
    for(var i = 2; i<n;i++){
        if(n%i == 0){
            return "not prime";
    }
    
}
return "is prime";

}


console.log(isPrime(24));