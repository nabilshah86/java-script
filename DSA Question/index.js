// 1.Swap two numbers a and b without using a third varible 
let 
a = 5;
b = 10;

 a = a + b;
 b = a - b;
 a = a - b;
 console.log(a,b);
 
// 2. write a function to find the largest of three numbers using conditional statements.

function findLargest (a, b, c) {
    if (a >= b && a >= c){
        return a;
    } else if (b >= a && b >=c){
return b;
    }else {
        return c;
    }
} 
console.log(findLargest(3,7,5));

// 3.  write a function to check whether a given number is prime

function isPrime(num){
    if (num <= 1){
        return false;
    }
    for (let i =2; i <= Math.sqrt(num);i++){
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(7));
console.log(isPrime(10));

// 4. Reverse an array using a loop instead of built-in methods.

function reverseArray(arr) {
    let reversedArr = []
    for (let i = arr.length - 1; i >= 0; i--){
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}
console.log(reverseArray([1, 2, 3, 4,]));

// 5. Write a function to find the sum of all even numbers in an Array.

function sumEvenNumbers(arr) {
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 ) {
        sum += arr[i];
    }
}
return sum;
}
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6,]));

// 6. Write a function to count the number of vowels in a given string.

function countVowels(str) {
    let count = 0;
    let vowels = 'aeiouAEIOU';
    for (let i = 0; i < str.length; i++){
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("hello world"))
