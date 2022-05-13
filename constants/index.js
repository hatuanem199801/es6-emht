const apple = "Apple";
if (true) {
    const apple = "Apple 1";
    console.log({apple});
}

for (let i = 0; i < 10; i++) {
    const apple = "Apple " + i;
    console.log({apple});
}

function getApple() {
    const apple = "Get apple 1";
    console.log({apple});
}

getApple();

console.log(apple);

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