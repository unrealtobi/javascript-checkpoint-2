// Reverse a String:
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString("hello")); 


// Count Characters:
function countCharacters(str) {
    return str.length;
}

console.log(countCharacters("hello")); 



// Capitalize Words:
function capitalizeWords(sentence) {
    return sentence.replace(/\b\w/g, char => char.toUpperCase());
}

console.log(capitalizeWords("hello world")); 

// Find Maximum and Minimum:
function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

console.log(findMax([3, 8, 2, 10])); 
console.log(findMin([3, 8, 2, 10]));

// Sum of Array:
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumArray([3, 8, 2, 10]));

// Filter Array:
function filterArray(arr) {
    return arr.filter(num => num > 5);
}

console.log(filterArray([3, 8, 2, 10]));

// Factorial:
function factorial(num) {
    if (num === 0) return 1;
    return num * factorial(num - 1);
}

console.log(factorial(5));

// Prime Number Check:
function isPrime(num) {
    if (num === 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(11));

// Fibonacci Sequence:
function fibonacci(num) {
    if (num <= 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(5));