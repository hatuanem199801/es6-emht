// # Symbol type
// > Duy nhất và không thể thay đổi kiểu dữ liệu.
// > Dùng để dịnh danh những thuộc tính (Properties) của một đối tượng (Objects).

let isTheSame = Symbol("Em") !== Symbol("Em");
console.log({isTheSame});

// Example: Product Object
let product = {};
const title = Symbol('title');
const price = Symbol('price');
const salePrice = Symbol('salePrice');
const description = Symbol('description');

// checking type of Product properties.
console.log(typeof title === 'symbol');
console.log(typeof price === 'symbol');
console.log(typeof description === 'symbol');

// add new properties for product Object.
product.title = "Apple";
product.price = 1000;
product.description = "Lorem ipsum";
product[salePrice] = 200;

// Logging data of product object.
console.log(JSON.stringify(product));
console.log(Object.keys(product));
console.log(Object.getOwnPropertyNames(product));
console.log(Object.getOwnPropertySymbols(product));

// Access value of symbol.
console.log({salePrice: product[salePrice]});

// ## Global symbol
// -> use ```for``` to use global Symbol
// example:
const somePropery = Symbol.for('app.someProperty');
const obj = {};

obj[somePropery] = "Hallo world";
console.log({somePropery: obj[somePropery]});