// Given the string, check if it is a palindrome.

inputString = 'aabaa'; 

function solution(inputString) {
    const x = inputString.split('')
    const y = x.reverse()
    const z = y.join('')
    return z == inputString
}

console.log(solution(inputString));
