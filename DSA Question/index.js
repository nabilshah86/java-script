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


// 7. find the second largest number in an array.

function secondLargest(arr){
arr = [...new Set(arr)];
arr.sort((a, b) => b - a);
return arr[1];
}
console.log(secondLargest([10, 20, 4, 45, 99]));

// 8. remove duplicate elements from an array and return a new array.

function removeDuplicate(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5]));

// 9. write a function to find the factorial of a given number using a loop.

function factorial(n){
    if (n === 0 || n === 1)

    {
        return 1; 
    }
    return n * factorial(n - 1);
}
console.log(factorial(5));

// 10. write a function to check whether an array is sorted in ascending order.

function isSorted(arr) {
    for ( let i = 0; i < arr.length - 1; i++){
        if (arr[i] > arr[i + 1]){
            return false;
        }
    }
    return true;
}
console.log(isSorted([1, 2, 3, 4, 5,]));
console.log(isSorted([1, 3, 2, 4, 5,]));
