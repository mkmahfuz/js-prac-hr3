//fibonacci in iterative way
//0,1,1,2,3,5,8,13,21,34,55,89,144,...,


function fibonacci(n){
  var fibo = [0,1];
  for(var i = 2; i<=n; i++){
      fibo[i]= fibo[i-1] + fibo[i-2];
  }
  return fibo;
}

console.log(fibonacci(5)); //0,1,1,2,3,5