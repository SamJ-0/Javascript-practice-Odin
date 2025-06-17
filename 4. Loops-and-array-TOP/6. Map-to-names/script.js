let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ]; 

console.log(users.map(namesMapped));


function namesMapped(users) {
    return users.name;
}