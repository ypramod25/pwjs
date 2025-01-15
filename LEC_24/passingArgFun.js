function processArray(arr, fn) {
    for(let i = 0; i < arr.length; i++) {
        console.log("index : " , i, " value : ", arr[i], " cube is : " , fn(arr[i]));
    }
}

processArray([1,2,3,4,5], function cube(x) {
    return x * x * x;
})