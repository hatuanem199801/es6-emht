// ES6
const apple = "apple";

for (let i = 0; i < 10; i++) {
    const apple = 'apple loop ';
    console.log(apple + i);
}

function getApple() {
   const apple = "apple 1";
   console.log(apple);
}

getApple();

console.log(apple);

// ES5
// Object.defineProperty(typeof global === 'object' ? global : window, "PI", {
//     value: 3.141123123123,
//     enumerable: true,
//     writable: false,
//     configurable: false
// });

// console.log(PI);