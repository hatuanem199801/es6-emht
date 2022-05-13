
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