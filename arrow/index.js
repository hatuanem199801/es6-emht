import fetch from "node-fetch";

// // Arrow function
// const furits = ['Apple', 'Pine Apple', 'Orange', 'Lemon', 'Mine']
// const newFruits = furits.filter(item => item.includes('App'))
// console.log({newFruits})

// // Comparing with the traditional function

// // Traditional function
// function countNumberA (a) {
//     return a + 100;
// }
// console.log(countNumberA(100));

// // Arrow function without `function`, ```return```, body, and arguments parentheses.
// const countNumberB = b => b + 100;
// console.log(countNumberB(101));

// /// Arrow function required body, return, argument parentheses.
// const countTwoNumber = (a, b) => {
//     if (!a || !b) {
//         return "Invalid argument";
//     }
//     return a + b;
// };
// console.log(countTwoNumber(1, 2));

// // Use arrow function as methods.
// const people = {
//     firstName: "Ha",
//     lastName: "Em",
//     address: "HCM City",
//     age: 24,
//     getAddress: () => console.log(this.address, this),
//     getFullName: () => {
//         return this.firstName + " " + this.lastName;
//     }
// }

// people.getAddress(); // undefined {}
// console.log(people.getFullName()); // undefined undefined

// const apple = {
//     price: 200,
//     title: "Apple"
// };

// global.price = 400;
// console.log(price);

// // tranditional function.
// const fruitPrice = function(salePrice = 0) {
//     return this.price - salePrice;
// }

// // arrow function.
// // const fruitPrice = (salePrice = 0) => this.price - salePrice;
// // All results are NaN.

// let result = fruitPrice.call(apple, 1);
// console.log(result); // 190;

// const salePrices = [2];
// result = fruitPrice.apply(apple, salePrices);
// console.log(result);

// const otherApple = fruitPrice.bind(apple);
// console.log(otherApple(3));


// The greatest benefit of using Arrow Function is with methods like 
// setTimeout() and EventTarget.addEventListener()
// Because that is usually require some kinds of closure, call, apply or bind
// to ensure that the function is excuted in the proper scope.

// Traditional function.
// const foo = {
//     count: 0,
//     doSomething: function () {
//         setTimeout(function() {
//             this.count++;
//             console.log({count: this.count});
//         }, 500);
//     }
// }

// Arrow function.
// const foo = {
//     count: 0,
//     doSomething: function() {
//         setTimeout(() => {
//             // context of traditional function will be used within.
//             this.count++;
//             console.log({count: this.count});
//         }, 500);
//     }
// }
// foo.doSomething();

// No binding arguments.
// var arguments = [1, 2, 3];
// var arr = () => arguments[0];

// console.log(arr()); // 1

// function foo(n) {
//     const f = (...args) => args[0] + n;
//     return f(n);
// }
// console.log(foo(3));

// Arrow functions do not have a prototype property.
// const apple = () => {hallo: "World"};
// console.log(apple.prototype); //undefined


// Returning object literals
// var apple = () =>
//     ({ price: 200, getName: function() {} });

// var apple = () => (
//     {
//         price: 200,
//         getName: function() {}
//     }
// );
// console.log(apple()); // undefined


// Parsing order
// Empty arrow function.
let empty = () => {};
console.log(empty);
// IIFE
console.log((() => "Hallo world")());
// Conditional
let computedAge = a => a >= 18 ? "Adult" : "Children";
console.log(computedAge(18));
console.log(computedAge(17));
console.log(computedAge(10));

// Filtering.
const fruits = ['Apple', 'Apple USA', "Apple UK", 'Cocunut', 'Cucumber'];

const aFruits = fruits.filter(fruit => fruit.includes("A"));
console.log(aFruits);

// Promise method
fetch('https://picsum.photos/1080')
    .then(res => console.log(res.arrayBuffer))
    .catch(err => console.log(err));

setTimeout( () => {
    console.log('I happen sooner');
    setTimeout( () => {
        // deeper code
        console.log('I happen later');
    }, 1);
}, 1);