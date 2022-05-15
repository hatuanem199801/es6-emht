function async (proc, ...params) {
    let iterator = proc(...params);
    return new Promise((resolve, reject) => {
        let loop = (value) => {
            let result;
            try {
                result = iterator.next(value);
            } catch (error) {
                reject(error);
            }

            if (result.done) {
                resolve(result.value);
            } else if (
                typeof result.value === 'object' &&
                typeof result.value.then === 'function'
            ) {
                result.value.then((value) => {
                    loop(value);
                }, (err) => {
                    reject(err);
                })
            } else {
                loop(result.value);
            }
        };
        loop();
    });
};

function makeAsync(text, after) {
    return new Promise((res, rej) => {
        setTimeout(() => res(text), after);
    });
};

async(function* (greeting) {
    let foo = yield makeAsync("Foo", 300);
    let bar = yield makeAsync("Bar", 200);
    let baz = yield makeAsync("Baz", 100);

    return `${greeting} ${foo} ${bar} ${baz}`;
}, "Hallo").then((message) => {
    console.log(message);
})