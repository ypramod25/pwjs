const isEven = function(x, fn) {
    fn();
    return x % 2 == 0;
}

isEven(10, function e () {
    console.log("Processing....");
    console.trace("Trace the function");
});