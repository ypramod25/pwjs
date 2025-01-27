// //by promises;
// function download(url) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             if(!url)rej();
//             else{
//                 data = "dummyData";
//                 console.log("data downloaded");
//                 res(data);
//             }
//         }, 4000); 
//     })
// }
// function saveToFile(data) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             if(!data)rej();
//             else {
//                 filename = "dummy.txt";
//                 console.log("data saved to filename",filename);
//                 res(filename)
//             }
//         }, 2000); 
//     })
// }
// function uploadFromFile(filename) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             if(!filename)rej();
//             else {
//                 console.log("data uploaded from the file ", filename);
//                 res("Operation successfull");
//             }
//         }, 3000);
//     })
// }
// const response = download("asdl.com");
// response.then((value) => saveToFile(value),()=>{return}).then((value) => uploadFromFile(value),()=>{return;}).then(()=> console.log("All done"));

// Dummy functions using Promises

function downloadData(url) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Downloaded data from ${url}`);
        resolve("downloadedData");
      }, 4000); // 4-second delay
    });
  }
  
  function saveDataToFile(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filename = "dataFile.txt";
        console.log(`Saved data to file: ${filename}`);
        resolve(filename);
      }, 2000); // 2-second delay
    });
  }
  
  function uploadFile(filename, newUrl) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Uploaded file: ${filename} to ${newUrl}`);
        resolve("uploadSuccess");
      }, 3000); // 3-second delay
    });
  }
  
  // Chaining the Promises
  downloadData("http://example.com")
    .then((data) => saveDataToFile(data))
    .then((filename) => uploadFile(filename, "http://uploadurl.com"))
    .then(() => console.log("All tasks completed!"))
    .catch((error) => console.error("Error:", error));
