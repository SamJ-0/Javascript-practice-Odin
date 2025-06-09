let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log(sorted);
console.log(arr);

function copySorted(arr) {
 let arrCopy = arr.map(function(element) {
    return element;
 });
 return arrCopy.sort();
}