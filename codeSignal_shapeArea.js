// Below we will define an n-interesting polygon. Your task is to 
// find the area of a polygon for a given n.

// A 1-interesting polygon is just a square with a side of length 
// 1. An n-interesting polygon is obtained by taking the n - 1-interesting 
// polygon and appending 1-interesting polygons to its rim, side by side. 
// You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.

n = 5;

function solution(n) {
    
    var area = 1;
    for(var i = 1; i < n; i++) {
        area += 4 * i;
    }
    console.log("final area =" + " " + area);
    return area;
}

console.log(solution(n));

// another solution

function solution(n) {
    if (n === 1) return 1;
    return 4*(n-1) + solution(n-1);
}
