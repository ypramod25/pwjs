
function create(time) {
    return new Promise((res, rej) => {
        setTimeout(()=> {
            rej(time);
        },time);
    });
}
create(5000)
.then(function f1 (val) {
    console.log("resolved by value", val);
    return val * 2;
}, function r1(val) {
    console.log("rejected by value ", val);
    throw 10;
    return val * 2;
})
.then(function f2 (val) {
    console.log("resolved by value", val);
    return val * 2;
}, function r2(val) {
    console.log("rejected by value ", val);
    return val * 2;
})
.then(function f3 (val) {
    console.log("resolved by value ", val);
    return val * 2;
}, function r3 (val) {
    console.log("rejected by value ", val);
    return val * 2;
})