let arr = [5, 2, 1, -10, 8];

let result = arr.sort(compare);
console.log(result);

function compare(a, b) {
    return b - a;
}