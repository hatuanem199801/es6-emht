//Object Property Assignment
const apple = {title: "apple"};
const price = {price: 2000, salePrice: 1800};
const seo = {url : 'https://example.com/apple-1', seourl: 'apple-1', price: 2100, image: "https://picsum.photos/1080/"};
// Assign new property for `apple`.
// The next object property will override the previous object property.
// If they have the same name of property.
Object.assign(apple, price, seo); 
console.log(apple);


// Array Element Finding
// New function for finding an element in an array.
const fruits = ['Apple', 'Pine apple', "Orange", "Cherry", "WaterMelon"];

const orange = fruits.find(fruit => fruit === 'Orange'); // found element or undefined.
console.log(orange);
const cherryIndex = fruits.findIndex(fruit => fruit === 'Cherry'); // -1 or index of element.
console.log(fruits[cherryIndex]);


// New string repeating functionality.
console.log("Apple ".repeat(4))

// String searching
// New specific string functions to search for a sub-string.
console.log("Apple".startsWith("A", 0)); // searching and start-position.
console.log("Apple".endsWith("e", 5)); // searching and end-position
console.log("Apple".includes("pp", 1)) // searching and position


// Number Type Checking
console.log("Number.isNaN(1) " + Number.isNaN(1)); // false
console.log("!Number.isNaN(1) " + !Number.isNaN(1)); // true
console.log("Number.isNaN(NaN) " + Number.isNaN(NaN)); // true
console.log("Number.isInteger(1) " + Number.isInteger(1)); // true
console.log("Number.isInteger(1.1) " + Number.isInteger(1.1)); // false
// Checking whether an integer number is in the safe range, i.e.,
// it is correctly represented by JavaScript 
// (where all numbers, including integer numbers, are technically floating point number).
console.log("Number.isSafeInteger(1) " + Number.isSafeInteger(1)); // true
console.log("Number.isSafeInteger(9007199254740992) " + Number.isSafeInteger(9007199254740992)); // false
console.log("Number.isFinite(\"1\") " + Number.isFinite("1")); // false
console.log("Number.isFinite(1.1) " + Number.isFinite(1.1)); // true
console.log("Number.isFinite(1) " + Number.isFinite(1)); // true
console.log("Number.isFinite(Infinity) " + Number.isFinite(Infinity)); // false
console.log("Number.isFinite(-Infinity) " + Number.isFinite(-Infinity)); // false


// Number Comparison
console.log(0.1 + 0.2 === 0.3) // false
console.log(0.1 + 0.2 === 0.3) // false

console.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON) // true


// Number Truncation
console.log(Math.trunc(42.9)) // 42
console.log(Math.trunc(0.1)) // 0
console.log(Math.trunc(-0.1)) // -0

// Number Sign Determination.
// Determine the sign of a number, including special cases of signed zero and non-number.
console.log("Number Sign Determination.");
console.log(Math.sign(7.0))   // 1
console.log(Math.sign(0.1))  // 1
console.log(Math.sign(0))  // -0
console.log(Math.sign(-0))  // -0
console.log(Math.sign(-0.1))  // -1
console.log(Math.sign(-7))  // -1
console.log(Math.sign(NaN)) // NaN