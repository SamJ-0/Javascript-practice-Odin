let arr = [5, 3, 8, 1];

let filtered = filteredRange(arr, 1, 4);

console.log(filtered);

   // Use .filter() with a function inside to return a new array containing elements between a and b.
   // Removes the hard-coded values I had before

function filteredRange(arr, a, b) {

    return arr.filter(function(num) {
        return num >= a && num <= b
    });
}