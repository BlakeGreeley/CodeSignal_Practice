// Given an array of integers, find the pair of adjacent elements 
// that has the largest product and return that product.

inputArray = [3, 6, -2, -5, 7, 3];

function solution(inputArray) {
    const newArray = []
    for(let i = 0; i < inputArray.length - 1; i++) {
        const x = inputArray[i] * inputArray[i+1]
        newArray.push(x)
    }
    console.log(newArray)

    return newArray.reduce((currentValue, newValue) => {
        return Math.max(currentValue, newValue)
    })
}
console.log(solution(inputArray));

// another faster solution

function solution(inputArray) {
    const newArray = []
    for(let i = 0; i < inputArray.length - 1; i++) {
        const x = inputArray[i] * inputArray[i+1]
        newArray.push(x)
    }
    return Math.max(...newArray)
}

console.log(solution(inputArray));



