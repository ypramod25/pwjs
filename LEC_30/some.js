const arr = [1,400,5,6,9]
const result = arr.some((element) => {
   console.log(element);
   return element > 100; // understand by changing the value this value
});

console.log(result);