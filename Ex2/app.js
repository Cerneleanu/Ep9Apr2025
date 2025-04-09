const n = prompt("Enter a number: ")
function isPrime(n){
    if (n <= 1) return false;
    for (let i = 2; i < n; i++){
        if (n % i === 0) return false;
    }
    return true;
} console.log(n + " is prime: " + isPrime(n))