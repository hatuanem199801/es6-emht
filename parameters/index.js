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

// Spearding of elements of an interable collection.

// Spearding of an array.
let params = ["Hallo world", 100];
let otherParams = [100, 200, ...params];
function countSometing(a, b, ...c) {
    return a + b + c.length;
}
console.log(countSometing(1, 2, ...otherParams));

// Spearding of a string.
const apple = 'Apple';
const charApple = [...apple];
console.log(charApple);
