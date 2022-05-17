// Cleaner data-structure for common algorithms based on sets.
let element = new Set();

element.add("Link").add("Table").add("Heading").add("Paragraph").add("Image");
// element.clear(); // delete all the value in elements.
// element.delete("Link"); // Delete value.
for (let value of element.entries()) // Iterable element.
    console.log({value});

console.log(element.has("Link")); // check value of Set.
console.log(element.keys()); // get key of Set.
console.log(element.size); // get size of Set.
console.log(element.delete("Table")); // get size of Set.
console.log(element.values()); // get value of Set.