let arr = [1,5,3,6,2];

function foreach(arr, fun) {
    for(let i = 0; i < arr.length; i++) {
        fun(arr[i], i);
    }
}

foreach(arr, (ele, i) => {
    console.log("The element at index ", i , " is : ", ele);
})
 