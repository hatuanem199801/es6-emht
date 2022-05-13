#Constants

Constants hiện tại đã được support trong Javascript ES6. Cũng được biết đến là “immutable variables” - biến có giá trị bất biến.

- Không thể định nghĩa lại giá trị của biến constants.
- Là duy nhất.
- Vùng giá trị phụ phuộc vào block scope và function scope.

**constants** chỉ làm bất biến bản thân nó nhưng không có nghĩ là không thể định nghĩa giá trị bên trong nội dung của một biến constants. Như một đối tượng chẳng hạn, bản thân các giá trị bên trong nó có thể thay đổi.

```js
const fruit = {
    title: "Apple",
    price: 200,
    description: "Blab blab ...."
};
console.log(fruit);
fruit.title = "Pine Apple";
fruit.price = 100;
fruit.description = "lorem ipsum ....";

console.log(fruit);
```


