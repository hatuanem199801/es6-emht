// Support "iterable" protocol to allow objects to customize their iteration behaviour.
// Additionally, support "iterator" protocol to produce sequence of values (either finite or infinite).
// Finally, provide convenient of operator to iterate over all values of an iterable object.
let phamNguLao = {
    [Symbol.iterator]() {
        let prev = 0, current = 1;
        return {
            next() {
                [prev, current] = [current, prev + current];
                return {done: false, value: current};
            }
        }
    }
}

for (let n of phamNguLao) {
    if (n > 100) {
        break;
    }
    console.log(n);
}