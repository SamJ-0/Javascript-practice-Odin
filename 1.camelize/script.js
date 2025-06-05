let wordToCamelize = "border-left-width";
let wordSplit = wordToCamelize.split("-");

let camelized = wordSplit.map(camelize).join("");

console.log(camelized);

function camelize(str, index) {
    if (index >= 1) {
        let letter = str.charAt(0);
        return letter.toUpperCase() + str.slice(1);
    }
    
    return wordSplit[0];   
}