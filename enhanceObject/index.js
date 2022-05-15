// # Enhanced Object Properties
// ## Shorter syntax.
let title = "Apple";
let price = 2000;
let apple = {title, price};

console.log(apple);

// #Computed names of property.
apple = {
    ...apple,
    [["sale" + (() => "Price")()]]: 200
};

console.log(apple.salePrice);

// #Method in propeties.
apple = {
    ...apple,
    getUrl() {
        return "https://picsum.photos/1080"
    }
};

console.log(apple.getUrl());