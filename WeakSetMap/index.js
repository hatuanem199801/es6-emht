// Memory-leak-free Object-key’d side-by-side data-structures.

let isMarked = new WeakSet();
let attachedData = new WeakMap();

class Fruit {
    constructor(title) {
        this.title = title;
    }

    mark() {
        isMarked.add(this);
    }

    unMark() {
        isMarked.delete(this);
    }

    marked() {
        return isMarked.has(this);
    }

    set data(v) {
        attachedData.set(this, v);
    }

    get data() {
        return attachedData.get(this);
    }
}

let apple = new Fruit("apple");
console.log(apple);
apple.mark();
apple.data = "red apple";
console.log(apple.data);
console.log(apple);

console.log(isMarked.has(apple));
console.log(attachedData.has(apple));
apple = null;
console.log(isMarked.has(apple));
console.log(attachedData.has(apple));