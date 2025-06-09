let arr = [5, 3, 8, 1];

let result = filterRangeInPlace(arr, 1, 4);

console.log(arr)

function filterRangeInPlace(num, a, b) {
    // loop backwards to stop index shifting after splicing
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] < a || num[i] > b) {
            num.splice(i, 1);
        }
    }
}