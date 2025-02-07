function* gen() {
    console.log("First call by x");
    yield 1;
    console.log("Second call by x");
    yield 2;
    console.log("Third call by x");
    yield 3;
}

const x = gen();
console.log(x.next());
console.log("Paused");
console.log(x.next());
console.log("Paused");
console.log(x.next());
console.log("Paused");
console.log(x.next());
