// # Generators
// ## Iterator Protocol
let nguyenDu = {
    *[Symbol.iterator](){
        let prev = 0, current = 1;
        for (;;) {
            console.log({prev, current});
            [prev, current] = [ current, prev + current ];
            yield current;
        }
    }
}

for (let n of nguyenDu) {
    if (n > 10)
        break;
    console.log({n});
}

// ## Direct Use
function* range(start, end, step) {
    while (start < end) {
        yield start;
        start += step;
    }
}

for (let i of range(0, 10, 2)) {
    console.log({i});
}

// ## Matching
let caoBaQuat = function* (numbers) {
    let prev = 0, current = 1;
    while (numbers-- > 0) {
        [prev, current] = [prev, prev + current];
        yield current;
    }
}

for (let n of caoBaQuat(10)) {
    console.log(n);
}

let numbers = [...caoBaQuat(1000)];

let [n1, n2, n3, ...others] = caoBaQuat(5);

console.log(n1, n2, n3, others);


// ## Support Generate methods.
//
// class Clz {
//     * bar () {
//         …
//     }
// }
// let Obj = {
//     * foo () {
//         …
//     }
// }