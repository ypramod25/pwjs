let x = 3749203;
let result = 0;
while(x) {
    result += x % 10;
    x = Math.floor(x/10);
}
console.log(result);