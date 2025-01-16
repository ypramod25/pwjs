console.log(Math.random());

//random between x and y inclusive
let x = 10 , y = 90;
console.log(x + (y-x)*(Math.random()));


//sanket
function randomInRange(x, y) {
    return Math.floor((x + (Math.abs(x-y) * Math.random())));
}

console.log(randomInRange(4,76));