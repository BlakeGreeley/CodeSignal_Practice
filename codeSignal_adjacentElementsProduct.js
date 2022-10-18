// Given an array of integers, find the pair of adjacent elements 
// that has the largest product and return that product.

inputArray = [3, 6, -2, -5, 7, 3];

function solution(inputArray) {
    const newArray = []
    for(let i = 0; i < inputArray.length - 1; i++) {
        console.log(inputArray[i] * inputArray[i+1])
    }
}
console.log(solution(inputArray));
