let arr = [1,2,3,4,5];

const result1 = arr.forEach((ele, idx) => {
    console.log("The element at index ", idx , " is : ", ele);
    return ele;
}) ;
console.log();
const result2 = arr.map((ele, idx) => {
    console.log("The element at index ", idx , " is : ", ele);
    return ele * ele;
}) ;
console.log();
console.log("Result from for each : ", result1);
console.log("Result from map : ", result2);