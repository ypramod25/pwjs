
function outer() {
    let i = 0;
    let j = [1,2,3];
    let s = "pramod";

    function inner() {
        i += 1;
        console.log(m);
        return i;
    }
    let m = 89;
    i++;
    return inner;
}

const x = outer();
console.log(x());
console.log(x());