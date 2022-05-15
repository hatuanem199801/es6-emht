# Parameters
Việc xử lí với parameters đã đơn giản và trực quan hơn trong ES6.
Sẽ không còn là các xử lí phức tạp bằng ```arguments``` trong các phiên bản cũ như trước.

## Đơn giản và trực quan. (simple and intuitive default values)
```js
function fruit(title, price = 0, priceSale = 0) {
    return {
        title,
        price: price - priceSale,
    }
}
```

## Tổng hợp các parameters trong một parameter. (rest parameter)

```js
function fruit(title, price = 0, priceSale = 0, ...other) {
    return {
        title,
        price: price - priceSale,
        other
    }
}
console.log(
    fruit(
        'Apple',
        10000,
        2000,
        {  
            description: "lorem ipsum",
            seourl: 'apple-01',
            date: new Date 
        }
    )
);
```

## Spearding Operator (phương thức phân tán).
- Phân tán hay trải rộng các thành phần trong một mảng (array) hay một chuỗi (string) là một tính năng rất tuyệt vời của ES6, giúp cho việc xử lí dữ liệu một cách dễ dàng hơn.

#### Spearding của một mảng (array).
```js
let params = ["Hallo world", 100];
let otherParams = [100, 200, ...params];
function countSometing(a, b, ...c) {
    return a + b + c.length;
}
console.log(countSometing(1, 2, ...otherParams));
```

#### Spearding của một chuỗi (string).
```js
const apple = 'Apple';
const charApple = [...apple];
console.log(charApple);
```