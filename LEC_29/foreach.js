let arr = [1,2,3,4,5];

arr.forEach((ele, idx) => {
    console.log("The element at index ", idx , " is : ", ele);
}) 


arr.forEach((ele) => {
    ele = 1;
    console.log('hi');
})
console.log(arr);