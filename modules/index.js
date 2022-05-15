// # Support for exporting/importing values from/to modules without global namespace pollution.
// import hello, { PI, sum } from './count.js'; // normal import
import * as count from './count.js'; // using of * as <something> to get all function.
import * as math from './math.js';
console.log("Count module");
console.log(count.sum(10, 20));
console.log(count.PI);
console.log(count.default);

console.log("Math module");
console.log(math.sum(20, 20));
console.log(math.PI);
console.log(math.C2);
console.log(math.default(10, 20));