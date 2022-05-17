let element = new Map();
let key = Symbol(); // make key is unique.
element.set(1, "Link");
element.set(key, "Table"); // set value by key of map.
console.log(element.get(key) === "Table"); // get value by key of map.
console.log(element.size === 2); // Get size of map.
console.log(element.keys()); // Get key of map.
console.log(element.values()); // Get value of map.
console.log(element.has(key)); // check key exists in a map.
// console.log(element.delete(key)); // Delete key and values pair.
console.log(element.has(key)); // false
element.forEach((value, key) => { // iterable of key and value of map.
    console.log({key, value})
})

for (let [key, value] of element.entries()) // Returns an iterable of key, value pairs for every entry in the map.
    console.log({key, value});