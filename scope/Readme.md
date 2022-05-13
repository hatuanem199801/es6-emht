#Scope
Có hai loại scope trong Javascript.
1. Function scope.
2. Block scope.

## Function scope.
- Là những biến hay những đối tượng hoặc những function nằm trong scope của function chính (parent function) thì những giá trị tương ứng sẽ không có giá trị khi được định nghĩa bên ngoài vùng (scope) của 1 function.

```js
function getNameOfUser(firstName, lastName) {
    // myFullName chỉ có giá trị trong getNameOfUser function.
    // Ngoài scope của function này, nó không có giá trị.
    const myFullName = firstName + " " + lastName;
    return myFullName;
};

// console.log(myFullName); // ReferenceError: myFullName is not defined
console.log(getNameOfUser('Ha', "Em"));
```

## Block scope.
- Là những biến hay những đối tượng hoặc những function nằm trong scope của một block javascript - Block được định nghĩa bên trong ```{ }```, sẽ không có giá trị khi được định nghĩa bên ngoài 1 block.


```js
for (let i = 0;i < 10; i++) {
    console.log({i});
}

// console.log(i); // ERROR: ReferenceError: i is not defined

if (true) {
    let halloJame = "Hallo Jame ;)";
}
// console.log(halloJame); // ERROR: ReferenceError: halloJame is not defined

const apple = "pineApple";
switch (apple) {
    case 'apple':
        console.log(apple);
        break;
    case "pineApple":
        console.log(apple);
        break;
    default:
        break;
}

console.log(apple);
```
