let arr = [5, 3, 8, 1];

let filtered = arr.filter(filteredRange);

console.log(filtered);

function filteredRange(num) {
    let a = 1;
    let b = 4;
    return num >= a && num <= b;
}