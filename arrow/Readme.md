# Arrow function

> Biểu thức hàm được viết dưới dạng mũi tên là một giải pháp ngắn gọn thay thể cho một hàm truyền thống. Nhưng nó có giới hạn và không thể sử dụng trong tất cả các trường hợp.

- Đôi điều về ```arrow function```:
    + Không có các ràng buộc riêng với ```this```, ```arguments``` hay ```super```.
    + Không nên sử dụng như một ```methods```.
    + Không sử dụng được phương thức ```new.target```.
    + Không phù hợp với các phương thức ```call```, ```bind```, ```apply``` mà thường dựa vào phạm vi của một ```scope```.
    + Không sử dụng được ```constructor```.
    + Không sử dụng được ```yield``` trong body function.

## Syntax cơ bản:

```js
// 1 tham số và trả về một biểu thức đơn giản.
param => expression

// 2 tham số và trả về một biếu thức đơn giản.
(param1, paramN) => expression

// 1 tham số và một arrow function với biểu thức phức tạp trong một body.
param => {
  let a = 1;
  return a + param;
}

// 2 tham số và một arrow function với biểu thức phức tạp trong một body.
(param1, paramN) => {
   let a = 1;
   return a + param1 + paramN;
}
```

## Syntax nâng cao:

```js
Trả về một đối tượng "object".
params => ({ title : "lorem ipsum"}) // returning the object {title: "lorem ipsum"}

Hỗ trợ "rest parameters".
(a, b, ...r) => expression

Hỗ trợ "default parameters".
(a=400, b=20, c) => expression

Hỗ trợ "destructuring":
([a, b] = [10, 20]) => a + b;  // result is 30
({ a, b } = { a: 10, b: 20 }) => a + b; // result is 30
```

**Ví dụ điển hình, dễ thấy nhất trong Javascript ES6**

```js
const furits = ['Apple', 'Pine Apple', 'Orange', 'Lemon', 'Mine'];

const newFruits = furits.filter(item => item.includes('App'));

console.log({newFruits})
```


**Đôi chút so sánh với ```traditional function```**:

Traditional function
```js
function countNumberA (a) {
    return a + 100;
}
console.log(countNumberA(100));
```

Arrow function without `function`, ```return```, body, and argument parentheses.
```js
const countNumberB = b => b + 100;

console.log(countNumberB(101));
```

\* ```{ braces }```, ```(parentheses)```, ```body``` và ```return``` thì chỉ dùng vào một số trường hợp bắt buộc. Như một ```arrow function``` có thêm những dòng (line) để xử lí một dữ liệu nào đó thì lúc này chúng ta cần phải thêm những phương thức trên. Ví dụ:

```js
const countTwoNumber = (a, b) => {
    if (!a || !b) {
        return "Invalid argument";
    }
    return a + b;
};
console.log(countTwoNumber(1, 2));
```

## ```Arrow functions``` không được sử dụng như một phương thức (method).

> Vì bản chất ```arrow function``` chỉ làm cho một phương thức gọn hơn mà không làm thay đổi tính chất của một ```method``` nên  không thể được sử dụng như một ```phương thức (methods)```. Nó chỉ được sử dụng như một ```phương thức ảo - (non-methods)```. Nên các hàm như ```call```, ```apply```, ```bind``` cũng không có giá trị tương tự như ```this``` trong ```arrow function```.

```js
const people = {
    firstName: "Ha",
    lastName: "Em",
    address: "HCM City",
    age: 24,
    getAddress: () => console.log(this.address, this),
    getFullName: () => {
        return this.firstName + " " + this.lastName;
    }
}

people.getAddress(); // undefined {}
console.log(people.getFullName()); // undefined undefined
```

\* Ví dụ đối với ```call```, ```apply```, ```bind```:
```js
const apple = {
    price: 200,
    title: "Apple"
};

global.price = 400;
console.log(price);

// tranditional function.
const fruitPrice = function(salePrice = 0) {
    return this.price - salePrice;
}

// arrow function.
// const fruitPrice = (salePrice = 0) => this.price - salePrice;
// All results are NaN.

let result = fruitPrice.call(apple, 1);
console.log(result); // 190;

const salePrices = [2];
result = fruitPrice.apply(apple, salePrices);
console.log(result);

const otherApple = fruitPrice.bind(apple);
console.log(otherApple(3));
```


## Greatest benefit of using Arrow Function.
- là với những phương thức như là ```setTimeOut``` hoặc là ```addEventListener()```. Vì nó thường yêu cầu các phương thức như là ```closure``, ```call```, ```apply``` or ```bind``` để chắc chắn rằng function được thực thi trong một vùng (scope) nhất định.

```js

// Traditional function.
const foo = {
    count: 0,
    doSomething: function () {
        setTimeout(function() {
            this.count++;
            console.log({count: this.count});
        }, 500);
    }
}

// Arrow function.
const foo = {
    count: 0,
    doSomething: function() {
        setTimeout(() => {
            // context of traditional function will be used within.
            this.count++;
            console.log({count: this.count});
        }, 500);
    }
}
foo.doSomething();
```


## Không có binding arguments
- Arrow function không có argument của chính đối tượng.

```js
var arguments = [1, 2, 3];
var arr = () => arguments[0];

console.log(arr()); // 1

function foo(n) {
    // sử dụng `rest parameter` để thay thế cho `arguments` object.
    const f = (...args) => args[0] + n;
    return f(n);
}
console.log(foo(3));
```


## Arrow functions không có ```prototype property```.
```js
const apple = () => {hallo: "World"};
console.log(apple.prototype); //undefined
```

## Không sử dụng được ```yield```.
> ```yield``` không thể sử dụng được trong arrow function.

## Trả về một object bị sai nếu không thêm dấu ngoặc đơn ({});

```js
// INVALID syntax;
var apple = () => { price: 200, getName: function() {} };
console.log(apple());

// VALID syntax;
var apple = () => ({ price: 200, getName: function() {} });
console.log(apple());
```

## Ngắt dòng bậy bạ cho đẹp code.
```js
// VALID syntax;
var apple = () 
    => ({ price: 200, getName: function() {} });

// Đôi khi ngắt dòng cũng là một nghệ thuật.
var apple = () => (
    { price: 200, getName: function() {} }
);

var apple = () => (
    {
        price: 200,
        getName: function() {}
    }
);
console.log(apple());
```
## Hỗ trợ ```parsing order```
Mặc dù không phải là một toán tử (operator) nhưng trong một số trường hợp đặc biệt nhưng chúng ta vẫn có thể sử dụng trong các loại toán tử ```operator precedence```.


```js
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
```